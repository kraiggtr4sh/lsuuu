/* ==========================================================================
   HỆ QUẢ CHÍNH SÁCH THỰC DÂN Ở ĐÔNG NAM Á (THẾ KỶ XVI - XX)
   Interactive Mind Map Engine (SVG Bezier, Pan/Zoom, Filter, Drawer, Quiz)
   ========================================================================== */

(function () {
  'use strict';

  const DATA = window.MINDMAP_DATA;

  // Application State
  const state = {
    scale: 0.72,
    minScale: 0.35,
    maxScale: 1.65,
    panX: 0,
    panY: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    hasMovedDuringDrag: false,

    collapsedBranches: new Set(), // stores branch.id
    activeFilter: 'all',          // 'all' | 'negative' | 'positive'
    activeLeafId: null,           // currently opened leaf in Detail Drawer

    // Quiz State
    quizOpen: false,
    quizIndex: 0,
    quizSelectedOption: null,
    quizScore: 0,
    quizFinished: false,
    quizAnswers: []
  };

  // Flatten all 12 leaf nodes for easy lookup & navigation
  const allLeaves = [];
  const branchMap = new Map();
  DATA.branches.forEach((branch) => {
    branchMap.set(branch.id, branch);
    branch.children.forEach((child) => {
      allLeaves.push({ ...child, branch });
    });
  });

  // DOM References
  const viewport = document.getElementById('canvasViewport');
  const world = document.getElementById('canvasWorld');
  const svgLayer = document.getElementById('connectionsSvg');
  const nodesLayer = document.getElementById('nodesLayer');
  const zoomReadout = document.getElementById('zoomReadout');

  // Drawer DOM
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const detailDrawer = document.getElementById('detailDrawer');
  const drawerBranchTag = document.getElementById('drawerBranchTag');
  const drawerImpactBadge = document.getElementById('drawerImpactBadge');
  const drawerTitle = document.getElementById('drawerTitle');
  const drawerPhoto = document.getElementById('drawerPhoto');
  const drawerStamp = document.getElementById('drawerStamp');
  const drawerCaption = document.getElementById('drawerCaption');
  const drawerDeepAnalysis = document.getElementById('drawerDeepAnalysis');
  const drawerEvidenceList = document.getElementById('drawerEvidenceList');
  const drawerNegEval = document.getElementById('drawerNegEval');
  const drawerPosEval = document.getElementById('drawerPosEval');
  const prevLeafBtn = document.getElementById('prevLeafBtn');
  const nextLeafBtn = document.getElementById('nextLeafBtn');

  // Quiz DOM
  const quizModalBackdrop = document.getElementById('quizModalBackdrop');
  const quizProgressFill = document.getElementById('quizProgressFill');
  const quizBody = document.getElementById('quizBody');
  const quizFooter = document.getElementById('quizFooter');

  /* ========================================================================
     1. SVG FALLBACK GENERATOR FOR ARCHIVAL ILLUSTRATIONS
     (If an image is still loading or unavailable, generates a vintage sepia SVG)
     ======================================================================== */
  function createVintageFallbackDataUri(leaf, branch) {
    const titleEsc = leaf.title.replace(/&/g, '&amp;').replace(/</g, '&lt;');
    const captionEsc = leaf.caption.replace('Ảnh minh họa: ', '').replace(/&/g, '&amp;');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
      <defs>
        <radialGradient id="sepiaBg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#3d3124"/>
          <stop offset="70%" stop-color="#251d14"/>
          <stop offset="100%" stop-color="#140f0a"/>
        </radialGradient>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(218,192,154,0.08)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="600" height="400" fill="url(#sepiaBg)"/>
      <rect width="600" height="400" fill="url(#grid)"/>
      <rect x="18" y="18" width="564" height="364" fill="none" stroke="#a68b67" stroke-width="2" stroke-dasharray="6 4" opacity="0.65"/>
      <rect x="26" y="26" width="548" height="348" fill="none" stroke="#c8ad88" stroke-width="1" opacity="0.4"/>
      <circle cx="300" cy="155" r="54" fill="rgba(200,173,136,0.1)" stroke="#c8ad88" stroke-width="1.5"/>
      <path d="M275 170 L292 142 L308 162 L322 148 L335 170 Z" fill="none" stroke="#d8be98" stroke-width="2.2"/>
      <circle cx="288" cy="136" r="5" fill="#d8be98"/>
      <text x="300" y="248" text-anchor="middle" fill="#ecd9bc" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="22" font-weight="bold">${titleEsc}</text>
      <text x="300" y="280" text-anchor="middle" fill="#bfa582" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-style="italic" font-size="15">${captionEsc}</text>
      <text x="300" y="340" text-anchor="middle" fill="#8c7558" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="12" letter-spacing="2">${leaf.archiveCode}</text>
    </svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }

  /* ========================================================================
     2. BUILD RADIAL MIND MAP NODES & SVG BEZIER CURVES
     ======================================================================== */
  function computeBezierPath(x1, y1, x2, y2, mode) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    if (mode === 'center-to-branch') {
      // Smooth S-curve radiating from center horizontally then curving into quadrant
      const cx1 = x1 + dx * 0.55;
      const cy1 = y1 + dy * 0.12;
      const cx2 = x1 + dx * 0.72;
      const cy2 = y2 - dy * 0.08;
      return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
    } else {
      // Smooth organic curve from primary branch node to its 3 sub-nodes
      const cx1 = x1 + dx * 0.48;
      const cy1 = y1;
      const cx2 = x1 + dx * 0.52;
      const cy2 = y2;
      return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
    }
  }

  function renderMindMap() {
    svgLayer.innerHTML = '';
    nodesLayer.innerHTML = '';

    const c = DATA.center;

    // 1. Render Center Node
    const centerEl = document.createElement('div');
    centerEl.className = 'mind-node center-node';
    centerEl.style.left = `${c.x}px`;
    centerEl.style.top = `${c.y}px`;
    centerEl.innerHTML = `
      <span class="center-period-badge">${c.period}</span>
      <h1 class="center-title">${c.title}</h1>
      <p class="center-subtitle">${c.subtitle}</p>
      <div class="center-quadrant-dots" title="4 Nhánh chính: Chính trị, Kinh tế, Xã hội, Văn hóa - Giáo dục">
        <span style="background:#5c7a8b"></span>
        <span style="background:#c4924c"></span>
        <span style="background:#577861"></span>
        <span style="background:#7b668c"></span>
      </div>
    `;
    centerEl.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.hasMovedDuringDrag) return;
      // Clicking center node expands all branches if any are collapsed, or centers view
      if (state.collapsedBranches.size > 0) {
        state.collapsedBranches.clear();
        updateVisibilityAndFilters();
      } else {
        resetCanvasView(true);
      }
    });
    nodesLayer.appendChild(centerEl);

    // 2. Render 4 Primary Branches & 12 Sub-Branches
    DATA.branches.forEach((branch) => {
      // Base Bezier path from Center -> Branch (Clean solid stroke)
      const primaryPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const dPrimary = computeBezierPath(c.x, c.y, branch.x, branch.y, 'center-to-branch');
      primaryPath.setAttribute('d', dPrimary);
      primaryPath.setAttribute('stroke', branch.color);
      primaryPath.setAttribute('class', 'bezier-path primary-branch');
      primaryPath.dataset.branchId = branch.id;
      svgLayer.appendChild(primaryPath);

      // Primary Branch Node Element
      const branchEl = document.createElement('div');
      branchEl.className = 'mind-node branch-node';
      branchEl.id = `node-${branch.id}`;
      branchEl.dataset.branchId = branch.id;
      branchEl.style.left = `${branch.x}px`;
      branchEl.style.top = `${branch.y}px`;
      branchEl.style.setProperty('--branch-color', branch.color);
      branchEl.style.setProperty('--branch-soft', branch.colorSoft);
      branchEl.style.setProperty('--branch-glow', branch.colorGlow);

      const negCount = branch.children.filter((ch) => ch.impactType === 'negative').length;
      const posCount = branch.children.filter((ch) => ch.impactType === 'positive').length;

      branchEl.innerHTML = `
        <div class="branch-header">
          <div class="branch-icon-wrap">
            <i data-lucide="${branch.icon}" class="w-5 h-5"></i>
          </div>
          <div class="branch-title-group">
            <span class="branch-index">${branch.index}</span>
            <h2 class="branch-name">${branch.name}</h2>
          </div>
          <div class="branch-toggle-btn" title="Đóng / Mở nhánh con">
            <i data-lucide="chevron-down" class="w-4 h-4"></i>
          </div>
        </div>
        <p class="branch-summary">${branch.summary}</p>
        <div class="branch-footer">
          <span class="branch-status-label">3 nhánh hệ quả</span>
          <div class="branch-pills">
            <span class="mini-pill neg">${negCount} Tiêu cực</span>
            <span class="mini-pill pos">${posCount} Tích cực</span>
          </div>
        </div>
      `;

      branchEl.addEventListener('click', (e) => {
        e.stopPropagation();
        if (state.hasMovedDuringDrag) return;
        toggleBranchCollapse(branch.id);
      });

      nodesLayer.appendChild(branchEl);

      // 3 Sub-Branches (Leaf Cards)
      branch.children.forEach((leaf) => {
        // Bezier path from Branch -> Leaf
        const subPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const dSub = computeBezierPath(branch.x, branch.y, leaf.x, leaf.y, 'branch-to-leaf');
        subPath.setAttribute('d', dSub);
        subPath.setAttribute('stroke', branch.color);
        subPath.setAttribute('class', 'bezier-path sub-branch');
        subPath.style.opacity = '0.78';
        subPath.dataset.branchId = branch.id;
        subPath.dataset.leafId = leaf.id;
        subPath.dataset.impactType = leaf.impactType;
        svgLayer.appendChild(subPath);

        // Connection endpoint dot
        const leafEl = document.createElement('article');
        leafEl.className = 'mind-node leaf-node';
        leafEl.id = `node-${leaf.id}`;
        leafEl.dataset.branchId = branch.id;
        leafEl.dataset.leafId = leaf.id;
        leafEl.dataset.impactType = leaf.impactType;
        leafEl.style.left = `${leaf.x}px`;
        leafEl.style.top = `${leaf.y}px`;
        leafEl.style.setProperty('--branch-color', branch.color);
        leafEl.style.setProperty('--branch-soft', branch.colorSoft);
        leafEl.style.setProperty('--branch-glow', branch.colorGlow);

        const badgeIcon = leaf.impactType === 'negative' ? 'alert-triangle' : 'sparkles';
        const fallbackUri = createVintageFallbackDataUri(leaf, branch);

        leafEl.innerHTML = `
          <div class="leaf-top-row">
            <h3 class="leaf-title">${leaf.title}</h3>
            <span class="impact-badge ${leaf.impactType}">
              <i data-lucide="${badgeIcon}" class="w-3 h-3"></i>
              ${leaf.impactLabel}
            </span>
          </div>
          <div class="leaf-body">
            <div class="archival-thumb-frame" title="Nhấp để phóng to ảnh tư liệu & xem phân tích">
              <img src="${leaf.imageUrl}" alt="${leaf.caption}" loading="lazy" />
              <div class="archival-thumb-overlay">
                <span class="zoom-icon-pill"><i data-lucide="maximize-2" class="w-3 h-3"></i></span>
              </div>
            </div>
            <p class="leaf-desc">${leaf.shortDesc}</p>
          </div>
          <div class="leaf-caption-bar">
            <span class="leaf-caption-text">
              <i data-lucide="camera" class="w-3.5 h-3.5"></i>
              ${leaf.caption.replace('Ảnh minh họa: ', '')}
            </span>
            <span class="leaf-more-link">
              Chi tiết <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
            </span>
          </div>
        `;

        // Image fallback handler
        const imgEl = leafEl.querySelector('img');
        imgEl.addEventListener('error', function () {
          if (this.src !== fallbackUri) {
            this.src = fallbackUri;
          }
        });

        leafEl.addEventListener('click', (e) => {
          e.stopPropagation();
          if (state.hasMovedDuringDrag) return;
          openDetailDrawer(leaf.id);
        });

        nodesLayer.appendChild(leafEl);
      });
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }

    updateVisibilityAndFilters();
  }

  /* ========================================================================
     3. EXPAND / COLLAPSE & FILTER HIGHLIGHTING
     ======================================================================== */
  function toggleBranchCollapse(branchId) {
    if (state.collapsedBranches.has(branchId)) {
      state.collapsedBranches.delete(branchId);
    } else {
      state.collapsedBranches.add(branchId);
    }
    updateVisibilityAndFilters();
  }

  function toggleAllBranches() {
    if (state.collapsedBranches.size === DATA.branches.length) {
      state.collapsedBranches.clear();
    } else {
      DATA.branches.forEach((b) => state.collapsedBranches.add(b.id));
    }
    updateVisibilityAndFilters();
  }

  function setFilter(filterType) {
    state.activeFilter = filterType;

    // If user filters by impact type, automatically expand all branches so matching leaves are visible
    if (filterType !== 'all' && state.collapsedBranches.size > 0) {
      state.collapsedBranches.clear();
    }

    document.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.filter === filterType);
    });

    updateVisibilityAndFilters();
  }

  function updateVisibilityAndFilters() {
    // Update Branch Nodes
    DATA.branches.forEach((branch) => {
      const isCollapsed = state.collapsedBranches.has(branch.id);
      const branchEl = document.getElementById(`node-${branch.id}`);
      if (branchEl) {
        branchEl.classList.toggle('collapsed', isCollapsed);
        const statusLabel = branchEl.querySelector('.branch-status-label');
        if (statusLabel) {
          statusLabel.textContent = isCollapsed ? 'Đã thu gọn (Nhấp để mở)' : '3 nhánh hệ quả';
        }
      }
    });

    // Update Leaf Nodes
    document.querySelectorAll('.leaf-node').forEach((leafEl) => {
      const branchId = leafEl.dataset.branchId;
      const impactType = leafEl.dataset.impactType;
      const isCollapsed = state.collapsedBranches.has(branchId);

      leafEl.classList.toggle('collapsed-child', isCollapsed);

      if (state.activeFilter === 'all') {
        leafEl.classList.remove('filter-dimmed', 'filter-highlighted');
      } else if (state.activeFilter === impactType) {
        leafEl.classList.remove('filter-dimmed');
        leafEl.classList.add('filter-highlighted');
      } else {
        leafEl.classList.add('filter-dimmed');
        leafEl.classList.remove('filter-highlighted');
      }
    });

    // Update SVG Sub-Branch Paths
    document.querySelectorAll('.bezier-path.sub-branch').forEach((pathEl) => {
      const branchId = pathEl.dataset.branchId;
      const impactType = pathEl.dataset.impactType;
      const isCollapsed = state.collapsedBranches.has(branchId);

      if (isCollapsed) {
        pathEl.style.opacity = '0';
        pathEl.classList.remove('highlighted', 'dimmed');
        return;
      }

      if (state.activeFilter === 'all') {
        pathEl.style.opacity = '0.78';
        pathEl.classList.remove('highlighted', 'dimmed');
      } else if (state.activeFilter === impactType) {
        pathEl.style.opacity = '1';
        pathEl.classList.add('highlighted');
        pathEl.classList.remove('dimmed');
      } else {
        pathEl.classList.add('dimmed');
        pathEl.classList.remove('highlighted');
      }
    });

    // Update Toggle All Button text
    const toggleAllText = document.getElementById('toggleAllBranchesText');
    if (toggleAllText) {
      toggleAllText.textContent =
        state.collapsedBranches.size === DATA.branches.length ? 'Mở rộng tất cả' : 'Thu gọn nhánh';
    }
  }

  /* ========================================================================
     4. CANVAS PAN & ZOOM ENGINE
     ======================================================================== */
  function applyCanvasTransform(smooth = false) {
    if (smooth) {
      world.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
      clearTimeout(world._smoothTimer);
      world._smoothTimer = setTimeout(() => {
        world.style.transition = 'none';
      }, 460);
    } else {
      world.style.transition = 'none';
    }

    world.style.transform = `translate3d(${state.panX}px, ${state.panY}px, 0) scale(${state.scale})`;
    if (zoomReadout) {
      zoomReadout.textContent = `${Math.round(state.scale * 100)}%`;
    }
  }

  function resetCanvasView(smooth = true) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Fit the 2600x1750 active mindmap bounding box comfortably inside the screen
    const idealScaleX = vw / 2750;
    const idealScaleY = vh / 1920;
    const fitScale = Math.max(0.45, Math.min(0.88, Math.min(idealScaleX, idealScaleY) * 1.05));

    state.scale = fitScale;
    state.panX = vw / 2 - DATA.center.x * state.scale;
    state.panY = vh / 2 - DATA.center.y * state.scale + 14;
    applyCanvasTransform(smooth);
  }

  function focusOnCoordinates(targetX, targetY, targetScale = 0.85) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    state.scale = Math.max(state.minScale, Math.min(state.maxScale, targetScale));
    state.panX = vw / 2 - targetX * state.scale;
    state.panY = vh / 2 - targetY * state.scale;
    applyCanvasTransform(true);
  }

  function zoomByFactor(factor, originX, originY, smooth = true) {
    const prevScale = state.scale;
    const nextScale = Math.max(state.minScale, Math.min(state.maxScale, prevScale * factor));
    if (Math.abs(nextScale - prevScale) < 0.001) return;

    const cx = originX !== undefined ? originX : window.innerWidth / 2;
    const cy = originY !== undefined ? originY : window.innerHeight / 2;

    // Keep the point under cursor stationary
    const worldX = (cx - state.panX) / prevScale;
    const worldY = (cy - state.panY) / prevScale;

    state.scale = nextScale;
    state.panX = cx - worldX * nextScale;
    state.panY = cy - worldY * nextScale;

    applyCanvasTransform(smooth);
  }

  function setupCanvasInteractions() {
    // Pointer Down
    viewport.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return; // left click only
      state.isDragging = true;
      state.hasMovedDuringDrag = false;
      state.dragStartX = e.clientX - state.panX;
      state.dragStartY = e.clientY - state.panY;
      viewport.classList.add('dragging');
    });

    // Pointer Move
    window.addEventListener('pointermove', (e) => {
      if (!state.isDragging) return;
      const newPanX = e.clientX - state.dragStartX;
      const newPanY = e.clientY - state.dragStartY;

      if (Math.abs(newPanX - state.panX) > 4 || Math.abs(newPanY - state.panY) > 4) {
        state.hasMovedDuringDrag = true;
      }

      state.panX = newPanX;
      state.panY = newPanY;
      applyCanvasTransform(false);
    });

    // Pointer Up
    window.addEventListener('pointerup', () => {
      if (!state.isDragging) return;
      state.isDragging = false;
      viewport.classList.remove('dragging');
    });

    // Mouse Wheel Zoom
    viewport.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
        zoomByFactor(zoomFactor, e.clientX, e.clientY, false);
      },
      { passive: false }
    );

    // Window resize
    window.addEventListener('resize', () => {
      applyCanvasTransform(false);
    });
  }

  /* ========================================================================
     5. DETAIL DRAWER (HISTORICAL ARCHIVE DOSSIER)
     ======================================================================== */
  function openDetailDrawer(leafId) {
    const item = allLeaves.find((l) => l.id === leafId);
    if (!item) return;

    state.activeLeafId = leafId;
    const { branch } = item;

    // Branch Pill
    drawerBranchTag.textContent = `${branch.name}`;
    drawerBranchTag.style.background = branch.color;
    drawerBranchTag.style.color = '#ffffff';
    drawerBranchTag.style.border = `1px solid rgba(0,0,0,0.2)`;

    // Impact Badge
    const isNeg = item.impactType === 'negative';
    drawerImpactBadge.className = `impact-badge ${item.impactType}`;
    drawerImpactBadge.innerHTML = `
      <i data-lucide="${isNeg ? 'alert-triangle' : 'sparkles'}" class="w-3.5 h-3.5"></i>
      ${item.impactLabel}
    `;

    // Title & Photo
    drawerTitle.textContent = item.title;
    const fallbackUri = createVintageFallbackDataUri(item, branch);
    drawerPhoto.onerror = function () {
      if (this.src !== fallbackUri) {
        this.src = fallbackUri;
      }
    };
    drawerPhoto.src = item.imageUrl;
    drawerPhoto.alt = item.caption;
    drawerStamp.textContent = item.archiveCode;
    const sourceLinkHtml = item.sourceUrl
      ? `<div style="margin-top:6px;"><a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" style="color:#7c382e;text-decoration:underline;font-weight:700;font-size:11.5px;">Xem hồ sơ tại kho lưu trữ gốc ↗</a></div>`
      : '';
    drawerCaption.innerHTML = `<i data-lucide="camera" class="w-4 h-4 shrink-0 mt-0.5" style="color:#7c382e"></i> <div><span>${item.caption}</span>${sourceLinkHtml}</div>`;

    // Deep Analysis
    drawerDeepAnalysis.textContent = item.deepAnalysis;

    // Historical Evidence List
    drawerEvidenceList.innerHTML = item.historicalEvidence
      .map((ev) => `<li>${ev}</li>`)
      .join('');

    // Dual Impact Evaluation
    drawerNegEval.textContent = item.dualImpact.negative;
    drawerPosEval.textContent = item.dualImpact.positive;

    // Open Drawer UI
    drawerBackdrop.classList.add('open');
    detailDrawer.classList.add('open');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function closeDetailDrawer() {
    state.activeLeafId = null;
    drawerBackdrop.classList.remove('open');
    detailDrawer.classList.remove('open');
  }

  function navigateDrawerLeaf(direction) {
    if (!state.activeLeafId) return;
    const currentIndex = allLeaves.findIndex((l) => l.id === state.activeLeafId);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + allLeaves.length) % allLeaves.length;
    openDetailDrawer(allLeaves[nextIndex].id);
  }

  /* ========================================================================
     6. MINI QUIZ MODE (5 INTERACTIVE QUESTIONS)
     ======================================================================== */
  function openQuizModal() {
    state.quizOpen = true;
    state.quizIndex = 0;
    state.quizSelectedOption = null;
    state.quizScore = 0;
    state.quizFinished = false;
    state.quizAnswers = [];
    quizModalBackdrop.classList.add('open');
    renderQuizStep();
  }

  function closeQuizModal() {
    state.quizOpen = false;
    quizModalBackdrop.classList.remove('open');
  }

  function renderQuizStep() {
    const questions = DATA.quizQuestions;
    const total = questions.length;

    if (state.quizFinished) {
      quizProgressFill.style.width = '100%';
      const percent = Math.round((state.quizScore / total) * 100);
      let badgeTitle = 'Nhà Nghiên Cứu Lịch Sử Xuất Sắc!';
      let feedbackMsg = 'Bạn đã nắm rất vững bản chất hai mặt và các dẫn chứng lịch sử về hệ quả chính sách thực dân ở Đông Nam Á.';
      if (state.quizScore <= 2) {
        badgeTitle = 'Cần Ôn Tập Thêm Sơ Đồ!';
        feedbackMsg = 'Hãy khám phá thêm các nhánh trên sơ đồ tư duy để nắm chắc các dẫn chứng về Chính trị, Kinh tế, Xã hội và Văn hóa nhé.';
      } else if (state.quizScore <= 4) {
        badgeTitle = 'Kiến Thức Lịch Sử Rất Tốt!';
        feedbackMsg = 'Bạn đã hiểu rõ hầu hết các luận điểm cốt lõi về hệ quả chính sách thực dân phương Tây tại Đông Nam Á.';
      }

      quizBody.innerHTML = `
        <div style="text-align:center; padding: 12px 0;">
          <div style="width:72px;height:72px;border-radius:50%;margin:0 auto 14px;background:#f2e4ce;border:2px solid #7c382e;display:flex;align-items:center;justify-content:center;color:#7c382e;">
            <i data-lucide="award" class="w-9 h-9"></i>
          </div>
          <div style="font-family:var(--font-mono);font-size:12px;color:#7c382e;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px;">
            KẾT QUẢ ÔN TẬP NHANH
          </div>
          <h3 style="font-family:var(--font-serif);font-size:24px;font-weight:700;color:#2b2118;margin-bottom:8px;">
            ${state.quizScore} / ${total} Câu Chính Xác (${percent}%)
          </h3>
          <p style="font-weight:700;color:#7c382e;margin-bottom:8px;">${badgeTitle}</p>
          <p style="font-size:13.5px;color:#5a4b3c;max-width:480px;margin:0 auto 18px;line-height:1.55;">
            ${feedbackMsg}
          </p>
        </div>
      `;

      quizFooter.innerHTML = `
        <button class="action-btn" id="quizRestartBtn">
          <i data-lucide="rotate-ccw" class="w-4 h-4"></i> Làm lại bài trắc nghiệm
        </button>
        <button class="action-btn quiz-btn" id="quizDoneBtn">
          <i data-lucide="check" class="w-4 h-4"></i> Quay lại Sơ đồ tư duy
        </button>
      `;

      document.getElementById('quizRestartBtn').addEventListener('click', openQuizModal);
      document.getElementById('quizDoneBtn').addEventListener('click', closeQuizModal);
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    const q = questions[state.quizIndex];
    const progressPct = ((state.quizIndex + 1) / total) * 100;
    quizProgressFill.style.width = `${progressPct}%`;

    const letters = ['A', 'B', 'C', 'D'];
    const isAnswered = state.quizSelectedOption !== null;

    const optionsHtml = q.options
      .map((optText, idx) => {
        let stateClass = '';
        if (isAnswered) {
          if (idx === q.correctIndex) stateClass = 'correct';
          else if (idx === state.quizSelectedOption) stateClass = 'wrong';
        }
        return `
          <button class="quiz-option-btn ${stateClass}" data-opt-index="${idx}" ${isAnswered ? 'disabled' : ''}>
            <span class="quiz-option-letter">${letters[idx]}</span>
            <span>${optText}</span>
          </button>
        `;
      })
      .join('');

    quizBody.innerHTML = `
      <div class="quiz-meta-row">
        <span style="color:${q.branchColor};font-weight:700;">● ${q.category}</span>
        <span>CÂU HỎI ${state.quizIndex + 1} / ${total} • ĐIỂM: ${state.quizScore}</span>
      </div>
      <h3 class="quiz-question-text">${q.question}</h3>
      <div class="quiz-options">
        ${optionsHtml}
      </div>
      ${
        isAnswered
          ? `<div class="quiz-explanation">
              <strong style="color:#7c382e;display:block;margin-bottom:4px;">
                ${state.quizSelectedOption === q.correctIndex ? '✓ Chính xác!' : '✗ Chưa chính xác!'} Giải thích lịch sử:
              </strong>
              ${q.explanation}
            </div>`
          : ''
      }
    `;

    quizBody.querySelectorAll('.quiz-option-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (state.quizSelectedOption !== null) return;
        const chosen = parseInt(btn.dataset.optIndex, 10);
        state.quizSelectedOption = chosen;
        if (chosen === q.correctIndex) {
          state.quizScore += 1;
        }
        renderQuizStep();
      });
    });

    quizFooter.innerHTML = `
      <span style="font-size:12px;color:var(--text-muted);">
        ${isAnswered ? 'Nhấn "Câu tiếp theo" để tiếp tục' : 'Chọn 1 đáp án đúng nhất'}
      </span>
      ${
        isAnswered
          ? `<button class="action-btn quiz-btn" id="quizNextBtn">
              ${state.quizIndex + 1 < total ? 'Câu tiếp theo' : 'Xem kết quả'}
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>`
          : `<button class="action-btn" disabled style="opacity:0.4;cursor:not-allowed;">
              Câu tiếp theo <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>`
      }
    `;

    const nextBtn = document.getElementById('quizNextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (state.quizIndex + 1 < total) {
          state.quizIndex += 1;
          state.quizSelectedOption = null;
        } else {
          state.quizFinished = true;
        }
        renderQuizStep();
      });
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  /* ========================================================================
     7. BIND UI CONTROLS & KEYBOARD SHORTCUTS
     ======================================================================== */
  function bindUIEvents() {
    // Filter Bar Buttons
    document.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        setFilter(btn.dataset.filter);
      });
    });

    // Bottom Canvas Controls
    document.getElementById('zoomInBtn').addEventListener('click', () => zoomByFactor(1.2));
    document.getElementById('zoomOutBtn').addEventListener('click', () => zoomByFactor(0.84));
    document.getElementById('resetViewBtn').addEventListener('click', () => resetCanvasView(true));

    // Expand / Collapse All Button
    document.getElementById('toggleAllBranchesBtn').addEventListener('click', toggleAllBranches);

    // Legend quick jump to quadrant
    document.querySelectorAll('.legend-item[data-target-branch]').forEach((item) => {
      item.addEventListener('click', () => {
        const branchId = item.dataset.targetBranch;
        const branch = branchMap.get(branchId);
        if (!branch) return;
        state.collapsedBranches.delete(branchId);
        updateVisibilityAndFilters();
        // Focus slightly between branch and its leaves
        const targetX = branch.x < DATA.center.x ? branch.x - 240 : branch.x + 240;
        focusOnCoordinates(targetX, branch.y, 0.84);
      });
    });

    // Drawer Controls
    document.getElementById('drawerCloseBtn').addEventListener('click', closeDetailDrawer);
    drawerBackdrop.addEventListener('click', closeDetailDrawer);
    prevLeafBtn.addEventListener('click', () => navigateDrawerLeaf(-1));
    nextLeafBtn.addEventListener('click', () => navigateDrawerLeaf(1));

    // Quiz Controls
    document.getElementById('openQuizBtn').addEventListener('click', openQuizModal);
    document.getElementById('quizCloseBtn').addEventListener('click', closeQuizModal);
    quizModalBackdrop.addEventListener('click', (e) => {
      if (e.target === quizModalBackdrop) closeQuizModal();
    });

    // Team 4 Credits Modal Controls
    const teamModalBackdrop = document.getElementById('teamModalBackdrop');
    const openTeamBtn = document.getElementById('openTeamBtn');
    const teamCloseBtn = document.getElementById('teamCloseBtn');
    const teamDoneBtn = document.getElementById('teamDoneBtn');
    function openTeamModal() {
      if (teamModalBackdrop) teamModalBackdrop.classList.add('open');
    }
    function closeTeamModal() {
      if (teamModalBackdrop) teamModalBackdrop.classList.remove('open');
    }
    if (openTeamBtn) openTeamBtn.addEventListener('click', openTeamModal);
    if (teamCloseBtn) teamCloseBtn.addEventListener('click', closeTeamModal);
    if (teamDoneBtn) teamDoneBtn.addEventListener('click', closeTeamModal);
    if (teamModalBackdrop) {
      teamModalBackdrop.addEventListener('click', (e) => {
        if (e.target === teamModalBackdrop) closeTeamModal();
      });
    }

    // Mobile Rotate Overlay Dismiss Button
    const dismissRotateBtn = document.getElementById('dismissRotateBtn');
    const rotateOverlay = document.getElementById('rotateDeviceOverlay');
    if (dismissRotateBtn && rotateOverlay) {
      dismissRotateBtn.addEventListener('click', () => {
        rotateOverlay.classList.add('dismissed');
      });
    }

    // Keyboard Shortcuts (ESC to close drawer/modal, Left/Right arrows in drawer)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (teamModalBackdrop && teamModalBackdrop.classList.contains('open')) closeTeamModal();
        else if (state.quizOpen) closeQuizModal();
        else if (state.activeLeafId) closeDetailDrawer();
      } else if (state.activeLeafId && !state.quizOpen) {
        if (e.key === 'ArrowLeft') navigateDrawerLeaf(-1);
        if (e.key === 'ArrowRight') navigateDrawerLeaf(1);
      }
    });
  }

  /* ========================================================================
     8. INITIALIZE APPLICATION
     ======================================================================== */
  function init() {
    renderMindMap();
    setupCanvasInteractions();
    bindUIEvents();
    resetCanvasView(false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
