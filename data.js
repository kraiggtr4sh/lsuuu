/* ==========================================================================
   HỆ QUẢ CHÍNH SÁCH THỰC DÂN Ở ĐÔNG NAM Á (THẾ KỶ XVI - XX)
   Historical Dataset, Archival Illustrations & Interactive Quiz Bank
   ========================================================================== */

window.MINDMAP_DATA = {
  center: {
    id: 'center-root',
    period: 'THẾ KỶ XVI – XX',
    title: 'HỆ QUẢ CHÍNH SÁCH THỰC DÂN Ở ĐÔNG NAM Á',
    subtitle: 'Bức tranh toàn cảnh về sự biến đổi cấu trúc Chính trị, Kinh tế, Xã hội và Văn hóa khu vực dưới ách thống trị thực dân phương Tây',
    x: 1600,
    y: 1100
  },

  branches: [
    /* ======================================================================
       1. NHÁNH CHÍNH TRỊ (Góc trên bên trái - Màu đỏ san hô #ef4444)
       ====================================================================== */
    {
      id: 'branch-pol',
      index: 'NHÁNH 01 • GÓC TRÊN TRÁI',
      name: 'CHÍNH TRỊ',
      quadrant: 'top-left',
      color: '#f28482',
      colorSoft: '#ffe5e5',
      colorGlow: 'rgba(242, 132, 130, 0.25)',
      icon: 'landmark',
      summary: 'Xóa bỏ chủ quyền độc lập bản địa, thiết lập ách cai trị chia để trị và du nhập mô hình hành chính thực dân.',
      x: 1090,
      y: 670,
      children: [
        {
          id: 'pol-1',
          branchId: 'branch-pol',
          title: 'Mất độc lập, chủ quyền',
          impactType: 'negative',
          impactLabel: 'Tiêu cực chủ yếu',
          shortDesc: 'Các quốc gia Đông Nam Á biến thành thuộc địa hoặc nửa thuộc địa, ngoại trừ Xiêm giữ được độc lập về danh nghĩa nhờ cải cách và ngoại giao khéo léo.',
          caption: 'Ảnh minh họa: Lễ ký kết hiệp ước thực dân',
          imageUrl: 'assets/images/pol-1.png',
          x: 520,
          y: 350,
          archiveCode: 'HỒ SƠ LƯU TRỮ: POL-XVI/XIX-01',
          deepAnalysis: 'Từ thế kỷ XVI (với việc Tây Ban Nha xâm chiếm Philippines, Bồ Đào Nha chiếm Malacca) đến cuối thế kỷ XIX, hầu hết các vương quốc phong kiến Đông Nam Á lần lượt rơi vào tay thực dân phương Tây (Anh, Pháp, Hà Lan, Tây Ban Nha, Mỹ). Quyền tối cao về ngoại giao, quân sự và tài chính đều bị tước đoạt qua các hiệp ước bất bình đẳng. Vương quốc Xiêm (Thái Lan) dưới triều vua Rama V (Chulalongkorn) là trường hợp duy nhất giữ được độc lập tương đối nhờ chính sách cải cách nội trị toàn diện và ngoại giao "cây tre" mềm dẻo lợi dụng vị trí vùng đệm giữa Anh và Pháp.',
          historicalEvidence: [
            'Việt Nam, Lào, Campuchia bị thực dân Pháp thôn tính và gộp vào "Liên bang Đông Dương" (Union Indochinoise - 1887).',
            'Indonesia trở thành thuộc địa "Đông Ấn Hà Lan" (Dutch East Indies) sau hàng thế kỷ bị Công ty Đông Ấn Hà Lan (VOC) và chính phủ Hà Lan kiểm soát.',
            'Miến Điện (Myanmar), Mã Lai, Singapore, Brunei rơi vào tay thực dân Anh; Philippines chịu sự cai trị của Tây Ban Nha rồi chuyển sang Mỹ (1898).'
          ],
          dualImpact: {
            negative: 'Chấm dứt nền độc lập tự chủ hàng thiên niên kỷ của các dân tộc Đông Nam Á; biến toàn bộ khu vực thành thuộc địa phụ thuộc chính trị và căn cứ quân sự của các đế quốc thực dân.',
            positive: 'Thức tỉnh ý thức quốc gia - dân tộc hiện đại, thúc đẩy các phong trào yêu nước vượt qua khuôn khổ cần vương phong kiến để hướng tới mục tiêu độc lập dân tộc.'
          }
        },
        {
          id: 'pol-2',
          branchId: 'branch-pol',
          title: 'Chia để trị & rạn nứt',
          impactType: 'negative',
          impactLabel: 'Tiêu cực chủ yếu',
          shortDesc: 'Pháp chia Việt Nam thành 3 kỳ (Bắc Kỳ, Trung Kỳ, Nam Kỳ); Anh chia rẽ sắc tộc ở Mã Lai, để lại mâu thuẫn kéo dài.',
          caption: 'Ảnh minh họa: Bản đồ phân chia lãnh thổ và quân đội thực dân',
          imageUrl: 'assets/images/pol-2.png',
          x: 460,
          y: 660,
          archiveCode: 'HỒ SƠ LƯU TRỮ: POL-XIX/XX-02',
          deepAnalysis: 'Để ngăn chặn sự đoàn kết kháng chiến của cư dân bản địa, các đế quốc thực dân triệt để thực thi chính sách "Chia để trị" (Divide et Impera). Chúng tự ý vẽ lại đường biên giới hành chính bất chấp lịch sử - tộc người, áp dụng các quy chế cai trị khác nhau trên cùng một quốc gia, đồng thời kích động sự kỳ thị giữa các dân tộc đa số và thiểu số, giữa người bản địa và cộng đồng di dân (như người Hoa, người Ấn).',
          historicalEvidence: [
            'Tại Việt Nam: Pháp chia cắt đất nước thành 3 xứ với 3 chế độ cai trị khác nhau: Nam Kỳ là xứ thuộc địa (Colonie), Bắc Kỳ là xứ nửa bảo hộ, Trung Kỳ là xứ bảo hộ (Protectorat).',
            'Tại Mã Lai (Malaysia): Thực dân Anh phân tách vai trò kinh tế - chính trị theo sắc tộc: người Mã Lai làm nông nghiệp/hành chính cấp thấp, người Hoa nắm thương mại - khai mỏ, người Ấn làm đồn điền.',
            'Tại Miến Điện và Indonesia: Chính quyền thực dân tuyển mộ binh lính từ các nhóm dân tộc thiểu số (như người Karen, người Ambon) để đàn áp phong trào nổi dậy của dân tộc đa số.'
          ],
          dualImpact: {
            negative: 'Gây rạn nứt nghiêm trọng khối đại đoàn kết dân tộc, để lại những xung đột sắc tộc, tôn giáo và tranh chấp biên giới dai dẳng ngay cả sau khi các nước giành độc lập.',
            positive: 'Phản tác dụng về lâu dài khi nhân dân các vùng miền nhận rõ âm mưu chia rẽ của kẻ thù, từ đó hình thành mặt trận đoàn kết dân tộc thống nhất.'
          }
        },
        {
          id: 'pol-3',
          branchId: 'branch-pol',
          title: 'Bộ máy hành chính mới',
          impactType: 'positive',
          impactLabel: 'Tích cực khách quan',
          shortDesc: 'Từng bước áp dụng hệ thống luật pháp và tổ chức hành chính phương Tây hiện đại thay thế mô hình quân chủ chuyên chế phong kiến.',
          caption: 'Ảnh minh họa: Tòa án / công sở thời thuộc địa',
          imageUrl: 'assets/images/pol-3.png',
          x: 520,
          y: 960,
          archiveCode: 'HỒ SƠ LƯU TRỮ: POL-XIX/XX-03',
          deepAnalysis: 'Nhằm phục vụ mục tiêu cai trị và khai thác thuộc địa hiệu quả, chính quyền thực dân đã du nhập mô hình nhà nước quan liêu hiện đại theo kiểu phương Tây. Các cơ quan chuyên trách (tòa án, sở tài chính, sở cảnh sát, sở học chính, sở công chính), hệ thống luật thành văn, sổ hộ tịch và quy hoạch địa giới hành chính có bản đồ chính xác dần thay thế nền cai trị gia trưởng phong kiến truyền thống.',
          historicalEvidence: [
            'Thiết lập hệ thống Tòa Thượng thẩm, Tòa Đại hình và các bộ luật thành văn (như Bộ Dân luật Bắc Kỳ, Hoàng Việt Hình luật) tách biệt tương đối khỏi lệ làng phong kiến.',
            'Xây dựng hệ thống ngạch bậc công chức chuyên nghiệp, quản lý thuế khóa, ngân sách, hải quan và thống kê dân số theo chuẩn mực hành chính châu Âu.',
            'Định hình đường biên giới quốc gia xác định bằng bản đồ trắc địa hiện đại thay cho khái niệm "biên giới mềm" triều cống thời phong kiến.'
          ],
          dualImpact: {
            negative: 'Bản chất vẫn là công cụ bạo lực và pháp lý của ngoại bang nhằm kiểm soát chặt chẽ đời sống nhân dân bản địa tới tận cấp làng xã.',
            positive: 'Khách quan tạo tiền đề về kỹ thuật quản lý hành chính, pháp quyền hiện đại và cấu trúc lãnh thổ quốc gia cho các nhà nước Đông Nam Á độc lập sau này.'
          }
        }
      ]
    },

    /* ======================================================================
       2. NHÁNH KINH TẾ (Góc trên bên phải - Màu vàng hổ phách #eab308)
       ====================================================================== */
    {
      id: 'branch-eco',
      index: 'NHÁNH 02 • GÓC TRÊN PHẢI',
      name: 'KINH TẾ',
      quadrant: 'top-right',
      color: '#f4a261',
      colorSoft: '#fff1d6',
      colorGlow: 'rgba(244, 162, 97, 0.25)',
      icon: 'coins',
      summary: 'Vơ vét cạn kiệt tài nguyên thiên nhiên, cột chặt kinh tế thuộc địa vào chính quốc nhưng đồng thời tạo dựng hạ tầng hiện đại.',
      x: 2110,
      y: 670,
      children: [
        {
          id: 'eco-1',
          branchId: 'branch-eco',
          title: 'Cướp bóc tài nguyên',
          impactType: 'negative',
          impactLabel: 'Tiêu cực chủ yếu',
          shortDesc: 'Lập đồn điền cao su quy mô lớn (Đông Dương, Indonesia), khai thác kiệt quệ thiếc và than đá (Mã Lai, Việt Nam).',
          caption: 'Ảnh minh họa: Công nhân cạo mủ cao su thời thuộc địa',
          imageUrl: 'assets/images/eco-1.png',
          x: 2680,
          y: 350,
          archiveCode: 'HỒ SƠ LƯU TRỮ: ECO-XIX/XX-01',
          deepAnalysis: 'Đông Nam Á vốn giàu có về khoáng sản và thổ nhưỡng nhiệt đới đã trở thành mục tiêu khai thác tàn bạo của tư bản tài chính phương Tây. Các công ty độc quyền thực dân cưỡng đoạt hàng triệu héc-ta đất đai màu mỡ để lập đồn điền chuyên canh (cao su, cà phê, chè, mía, cây hương liệu) và mở hàng loạt hầm mỏ khai thác than đá, thiếc, dầu mỏ với chi phí nhân công rẻ mạt.',
          historicalEvidence: [
            'Các tập đoàn tư bản Pháp (Michelin, Đất Đỏ) mở rộng đồn điền cao su khắp Nam Kỳ và Campuchia; biến vùng mỏ Hòn Gai - Quảng Yên thành nguồn xuất khẩu than đá khổng lồ.',
            'Thực dân Anh biến Mã Lai thành trung tâm sản xuất thiếc và cao su lớn nhất thế giới đầu thế kỷ XX; khai thác gỗ tếch và dầu mỏ quy mô lớn ở Miến Điện.',
            'Hà Lan áp dụng "Chế độ cưỡng bức canh tác" (Cultuurstelsel) tại Java (Indonesia), buộc nông dân dành đất tốt nhất trồng cây công nghiệp xuất khẩu cho chính phủ Hà Lan.'
          ],
          dualImpact: {
            negative: 'Làm cạn kiệt nguồn tài nguyên thiên nhiên không tái tạo, tàn phá hệ sinh thái rừng nhiệt đới và làm giàu phi pháp cho các tập đoàn tư bản chính quốc.',
            positive: 'Đưa phương thức sản xuất đồn điền quy mô lớn và kỹ thuật canh tác, khai khoáng công nghiệp vào khu vực Đông Nam Á.'
          }
        },
        {
          id: 'eco-2',
          branchId: 'branch-eco',
          title: 'Kinh tế què quặt, lệ thuộc',
          impactType: 'negative',
          impactLabel: 'Tiêu cực chủ yếu',
          shortDesc: 'Kìm hãm công nghiệp nặng phát triển, biến các nước bản địa thành nơi cung cấp nguyên liệu thô và thị trường tiêu thụ độc chiếm của chính quốc.',
          caption: 'Ảnh minh họa: Bến cảng bốc dỡ hàng hóa xuất khẩu',
          imageUrl: 'assets/images/eco-2.png',
          x: 2740,
          y: 660,
          archiveCode: 'HỒ SƠ LƯU TRỮ: ECO-XIX/XX-02',
          deepAnalysis: 'Chính sách kinh tế thực dân tuyệt đối không nhằm phát triển cân đối nền kinh tế bản địa mà thiết lập cơ chế phân công lao động bất bình đẳng: Thuộc địa chỉ được phép sản xuất nguyên liệu thô, nông sản sơ chế và phải nhập khẩu hàng công nghiệp chế tạo với giá đắt đỏ từ chính quốc thông qua hàng rào thuế quan bảo hộ khắt khe.',
          historicalEvidence: [
            'Chính quyền thực dân hạn chế tối đa việc xây dựng các ngành công nghiệp nặng (luyện kim, chế tạo máy, hóa chất) tại Đông Dương, Indonesia và Philippines.',
            'Hàng hóa từ chính quốc nhập vào thuộc địa được miễn hoặc giảm thuế tối đa, trong khi hàng hóa nước ngoài và thủ công nghiệp bản địa bị đánh thuế nặng nề.',
            'Nền kinh tế các nước Đông Nam Á bị biến thành nền kinh tế độc canh (chỉ phụ thuộc vào 1-2 mặt hàng như lúa gạo, cao su, đường hoặc thiếc), cực kỳ dễ tổn thương trước khủng hoảng kinh tế thế giới (1929-1933).'
          ],
          dualImpact: {
            negative: 'Cơ cấu ngành kinh tế mất cân đối trầm trọng, thủ công nghiệp truyền thống phá sản, nền kinh tế bản địa hoàn toàn phụ thuộc vào thị trường tư bản phương Tây.',
            positive: 'Phá vỡ nền kinh tế tự cung tự cấp khép kín lâu đời của xã hội phong kiến, cuốn Đông Nam Á vào vòng lưu thông của thị trường thế giới.'
          }
        },
        {
          id: 'eco-3',
          branchId: 'branch-eco',
          title: 'Hạ tầng & Đô thị mới',
          impactType: 'positive',
          impactLabel: 'Tích cực khách quan',
          shortDesc: 'Xây dựng hệ thống đường sắt (như tuyến Sài Gòn - Mỹ Tho), cảng biển và đô thị thương mại lớn (Singapore, Batavia, Sài Gòn).',
          caption: 'Ảnh minh họa: Tàu hỏa hơi nước và nhà ga cổ',
          imageUrl: 'assets/images/eco-3.png',
          x: 2680,
          y: 960,
          archiveCode: 'HỒ SƠ LƯU TRỮ: ECO-XIX/XX-03',
          deepAnalysis: 'Để vận chuyển nhanh chóng nguyên khoáng sản từ nội địa ra cảng biển và điều động quân đội đàn áp khởi nghĩa, chính quyền thực dân đã đầu tư xây dựng mạng lưới giao thông vận tải, thông tin liên lạc và hệ thống đô thị cảng hiện đại. Dù mục đích ban đầu là phục vụ khai thác thực dân, các công trình này đã thay đổi diện mạo vật chất của Đông Nam Á.',
          historicalEvidence: [
            'Tuyến đường sắt Sài Gòn – Mỹ Tho (khánh thành năm 1885) là tuyến đường sắt đầu tiên ở Đông Dương, tiếp nối bởi tuyến đường sắt xuyên Đông Dương dài hơn 2.000 km.',
            'Sự trỗi dậy của mạng lưới thương cảng và đô thị sầm uất bậc nhất châu Á: Singapore, Penang (Mã Lai), Batavia/Jakarta (Indonesia), Manila (Philippines), Sài Gòn, Hải Phòng (Việt Nam), Rangoon (Miến Điện).',
            'Xây dựng hệ thống cầu sắt (như cầu Long Biên - Doumer), đường bộ rải nhựa, kênh đào thủy lợi, nhà máy điện, nhà máy nước và mạng lưới điện tín.'
          ],
          dualImpact: {
            negative: 'Được xây dựng bằng máu, mồ hôi, tính mạng của hàng vạn phu phen bản địa và nguồn ngân sách bóc lột từ chính tiền thuế của người dân thuộc địa.',
            positive: 'Khách quan tạo dựng kết cấu hạ tầng kỹ thuật hiện đại, kết nối giao thương liên vùng và hình thành các trung tâm đô thị - kinh tế năng động.'
          }
        }
      ]
    },

    /* ======================================================================
       3. NHÁNH XÃ HỘI (Góc dưới bên trái - Màu xanh ngọc lục bảo #22c55e)
       ====================================================================== */
    {
      id: 'branch-soc',
      index: 'NHÁNH 03 • GÓC DƯỚI TRÁI',
      name: 'XÃ HỘI',
      quadrant: 'bottom-left',
      color: '#52b788',
      colorSoft: '#def7ec',
      colorGlow: 'rgba(82, 183, 136, 0.25)',
      icon: 'users',
      summary: 'Đẩy đại đa số nông dân vào cảnh bần cùng, làm phân hóa giai cấp truyền thống và làm nảy sinh những lực lượng cách mạng mới.',
      x: 1090,
      y: 1530,
      children: [
        {
          id: 'soc-1',
          branchId: 'branch-soc',
          title: 'Bần cùng hóa nhân dân',
          impactType: 'negative',
          impactLabel: 'Tiêu cực chủ yếu',
          shortDesc: 'Cướp đoạt ruộng đất lập đồn điền, áp đặt sưu cao thuế nặng (thuế thân, thuế muối, thuế rượu...), đẩy nông dân vào cảnh bần cùng.',
          caption: 'Ảnh minh họa: Nông dân lao động khổ cực trên đồng ruộng',
          imageUrl: 'assets/images/soc-1.png',
          x: 520,
          y: 1240,
          archiveCode: 'HỒ SƠ LƯU TRỮ: SOC-XIX/XX-01',
          deepAnalysis: 'Người nông dân — lực lượng chiếm tới hơn 90% dân số Đông Nam Á — phải chịu cảnh "một cổ hai tròng" (vừa bị thực dân bóc lột, vừa bị địa chủ phong kiến chèn ép). Chính sách cướp đoạt ruộng đất để lập đồn điền cộng với hàng trăm thứ thuế vô lý và nạn phu phen tạp dịch đã đẩy hàng triệu gia đình nông dân vào cảnh phá sản, tha phương cầu thực.',
          historicalEvidence: [
            'Chế độ độc quyền và thuế khóa tàn bạo tại Đông Dương: Thuế thân (đánh vào từng suất đinh), cùng ba thứ độc quyền khét tiếng là muối, rượu cồn và thuốc phiện.',
            'Hàng vạn nông dân mất đất buộc phải bán mình làm phu đồn điền cao su với hợp đồng "nô lệ trắng" ("Cao su đi dễ khó về / Khi đi trai tráng, khi về bủng beo").',
            'Tại Philippines và Indonesia, hệ thống đại điền trang (Hacienda) và chế độ lao dịch cưỡng bức khiến nạn đói và dịch bệnh thường xuyên hoành hành ở nông thôn.'
          ],
          dualImpact: {
            negative: 'Đời sống nhân dân lao động cực khổ cùng cực, tỷ lệ tử vong cao ở các hầm mỏ và đồn điền, phá vỡ cấu trúc sinh kế làng xã truyền thống.',
            positive: 'Tinh thần phản kháng bị dồn nén cao độ đã biến giai cấp nông dân thành đội quân chủ lực hùng hậu nhất trong các cuộc khởi nghĩa giải phóng dân tộc.'
          }
        },
        {
          id: 'soc-2',
          branchId: 'branch-soc',
          title: 'Phân hóa giai cấp sâu sắc',
          impactType: 'negative',
          impactLabel: 'Tiêu cực chủ yếu',
          shortDesc: 'Giai cấp địa chủ phong kiến bị phân hóa (một bộ phận làm tay sai, một bộ phận yêu nước), các tầng lớp cũ bị chèn ép.',
          caption: 'Ảnh minh họa: Tầng lớp địa chủ phong kiến xưa',
          imageUrl: 'assets/images/soc-2.png',
          x: 460,
          y: 1540,
          archiveCode: 'HỒ SƠ LƯU TRỮ: SOC-XIX/XX-02',
          deepAnalysis: 'Sự xâm nhập của chủ nghĩa tư bản thực dân đã làm đảo lộn trật tự xã hội truyền thống ở Đông Nam Á. Giai cấp thống trị cũ (vua chúa, quan lại, địa chủ phong kiến) không còn giữ vai trò độc tôn mà bị phân hóa mạnh mẽ về cả địa vị kinh tế lẫn thái độ chính trị trước vận mệnh dân tộc.',
          historicalEvidence: [
            'Bộ phận đại địa chủ, quan lại cao cấp đầu hàng, câu kết chặt chẽ với đế quốc để bảo toàn đặc quyền và tích tụ ruộng đất, trở thành chỗ dựa xã hội cho chính quyền thực dân.',
            'Bộ phận trung, tiểu địa chủ và sĩ phu Nho học bị thực dân chèn ép, mất quyền lực nên vẫn giữ tinh thần dân tộc, tích cực tham gia hoặc ủng hộ các phong trào yêu nước (như phong trào Cần Vương, Duy Tân).',
            'Khoảng cách giàu nghèo giữa tầng lớp thượng lưu thân thực dân ở đô thị và quần chúng lao động ở nông thôn ngày càng mở rộng cực đoan.'
          ],
          dualImpact: {
            negative: 'Tạo ra tầng lớp tay sai bản địa phản động tiếp tay cho thực dân đàn áp đồng bào và duy trì quan hệ bóc lột địa tô phong kiến lạc hậu.',
            positive: 'Làm suy yếu tận gốc uy thế của chế độ phong kiến chuyên chế, tạo điều kiện thu hút bộ phận sĩ phu, tiểu địa chủ yêu nước vào mặt trận dân tộc.'
          }
        },
        {
          id: 'soc-3',
          branchId: 'branch-soc',
          title: 'Lực lượng xã hội mới',
          impactType: 'positive',
          impactLabel: 'Tích cực khách quan',
          shortDesc: 'Xuất hiện giai cấp công nhân, tư sản dân tộc và tiểu tư sản trí thức — lực lượng nòng cốt lãnh đạo phong trào đấu tranh giải phóng dân tộc.',
          caption: 'Ảnh minh họa: Tập thể công nhân và trí thức đầu thế kỷ XX',
          imageUrl: 'assets/images/soc-3.png',
          x: 520,
          y: 1850,
          archiveCode: 'HỒ SƠ LƯU TRỮ: SOC-XIX/XX-03',
          deepAnalysis: 'Hệ quả xã hội quan trọng nhất ngoài ý muốn của thực dân là sự ra đời của các giai cấp và tầng lớp xã hội mới gắn liền với phương thức sản xuất tư bản chủ nghĩa và giáo dục tân học. Chính những lực lượng mới này đã khắc phục sự bế tắc của ý thức hệ phong kiến để đưa phong trào giải phóng dân tộc Đông Nam Á sang quỹ đạo hiện đại.',
          historicalEvidence: [
            'Giai cấp công nhân (vô sản) ra đời sớm tại các hầm mỏ, đồn điền, nhà máy, bến cảng; chịu 3 tầng áp bức nên có tinh thần cách mạng triệt để nhất.',
            'Tầng lớp tiểu tư sản trí thức (sinh viên, nhà văn, nhà báo, giáo viên, công chức) nhạy bén với thời cuộc, đóng vai trò cầu nối truyền bá tư tưởng dân tộc chủ nghĩa và dân chủ.',
            'Giai cấp tư sản dân tộc hình thành (như Bạch Thái Bưởi, Nguyễn Sơn Hà ở Việt Nam), dù bị tư bản ngoại bang chèn ép nhưng có khuynh hướng dân tộc, lập các đảng phái yêu nước (như Đảng Dân tộc ở Indonesia, Việt Nam Quốc dân Đảng).'
          ],
          dualImpact: {
            negative: 'Các giai cấp mới đều bị chính quyền thực dân kìm hãm về kinh tế và đàn áp gắt gao về chính trị ngay từ khi mới phôi thai.',
            positive: 'Trở thành lực lượng tiên phong lãnh đạo các phong trào giải phóng dân tộc theo khuynh hướng dân chủ tư sản và vô sản trong thế kỷ XX.'
          }
        }
      ]
    },

    /* ======================================================================
       4. NHÁNH VĂN HÓA - GIÁO DỤC (Góc dưới bên phải - Màu tím violet #a855f7)
       ====================================================================== */
    {
      id: 'branch-cul',
      index: 'NHÁNH 04 • GÓC DƯỚI PHẢI',
      name: 'VĂN HÓA - GIÁO DỤC',
      quadrant: 'bottom-right',
      color: '#9d8df1',
      colorSoft: '#f0ebff',
      colorGlow: 'rgba(157, 141, 241, 0.25)',
      icon: 'book-open',
      summary: 'Thực thi chính sách ngu dân và văn hóa nô dịch, song vô tình mở đường cho sự tiếp biến văn hóa và luồng tư tưởng tiến bộ.',
      x: 2110,
      y: 1530,
      children: [
        {
          id: 'cul-1',
          branchId: 'branch-cul',
          title: 'Chính sách ngu dân, nô dịch',
          impactType: 'negative',
          impactLabel: 'Tiêu cực chủ yếu',
          shortDesc: 'Hạn chế mở trường học để duy trì tỷ lệ mù chữ cao, đầu độc người dân bằng rượu cồn và thuốc phiện.',
          caption: 'Ảnh minh họa: Tiệm hút thuốc phiện thời thuộc địa',
          imageUrl: 'assets/images/cul-1.png',
          x: 2680,
          y: 1240,
          archiveCode: 'HỒ SƠ LƯU TRỮ: CUL-XIX/XX-01',
          deepAnalysis: 'Để dễ bề thống trị và ngăn chặn sự thức tỉnh dân trí, các chính quyền thực dân thực thi chính sách "ngu dân" có hệ thống. Trường học được mở vô cùng nhỏ giọt (chủ yếu ở bậc tiểu học để đào tạo thông ngôn, ký lục cấp thấp), trong khi nhà tù, tiệm thuốc phiện và đại lý rượu cồn lại mọc lên khắp nơi.',
          historicalEvidence: [
            'Tại Việt Nam và Indonesia cho đến trước năm 1945, hơn 90% dân số vẫn trong tình trạng mù chữ; số lượng trường trung học và đại học đếm trên đầu ngón tay.',
            'Chính quyền thực dân công khai kinh doanh độc quyền thuốc phiện (Opium Régie) và cưỡng bức tiêu thụ rượu cồn theo đầu người ở các làng xã để vừa thu siêu lợi nhuận, vừa làm suy nhược nòi giống.',
            'Kiểm duyệt gắt gao sách báo, cấm đoán các tác phẩm lịch sử ca ngợi truyền thống yêu nước, đồng thời dung túng các hủ tục mê tín dị đoan.'
          ],
          dualImpact: {
            negative: 'Kìm hãm nghiêm trọng trình độ dân trí, hủy hoại sức khỏe thể chất và tinh thần của nhiều thế hệ người dân thuộc địa.',
            positive: 'Thúc đẩy các nhà yêu nước phát động các phong trào khai dân trí tự lực mạnh mẽ như Đông Kinh Nghĩa Thục, Hội Truyền bá Quốc ngữ.'
          }
        },
        {
          id: 'cul-2',
          branchId: 'branch-cul',
          title: 'Xói mòn bản sắc truyền thống',
          impactType: 'negative',
          impactLabel: 'Tiêu cực chủ yếu',
          shortDesc: 'Làm suy yếu các giá trị văn hóa bản địa, áp đặt văn hóa phương Tây một cách cưỡng ép.',
          caption: 'Ảnh minh họa: Kiến trúc phương Tây xen lẫn không gian truyền thống',
          imageUrl: 'assets/images/cul-2.png',
          x: 2740,
          y: 1540,
          archiveCode: 'HỒ SƠ LƯU TRỮ: CUL-XIX/XX-02',
          deepAnalysis: 'Với luận điệu "Khai hóa văn minh" (Mission civilisatrice / White Man\'s Burden), thực dân phương Tây tuyên truyền tâm lý tự ti dân tộc, coi văn hóa bản địa Đông Nam Á là "lạc hậu, dã man" và cưỡng bức áp đặt lối sống, ngôn ngữ, tôn giáo cùng giá trị quan của chính quốc lên tầng lớp đô thị.',
          historicalEvidence: [
            'Trong trường học thuộc địa, học sinh phải học lịch sử và địa lý của chính quốc (như câu mở đầu sách giáo khoa Pháp: "Tổ tiên chúng ta là người Gaulois...").',
            'Nhiều di sản kiến trúc cung đình, đền chùa cổ bị phá hủy hoặc cướp bóc cổ vật đưa về các bảo tàng châu Âu.',
            'Sự du nhập lối sống hưởng thụ thực dụng phương Tây ở các đô thị lớn tạo ra sự đứt gãy văn hóa giữa thành thị và nông thôn truyền thống.'
          ],
          dualImpact: {
            negative: 'Làm phai nhạt bản sắc văn hóa dân tộc ở một bộ phận cư dân đô thị, tạo ra tâm lý sùng ngoại và vong bản.',
            positive: 'Tạo ra sự giao thoa kiến trúc - nghệ thuật độc đáo (như phong cách kiến trúc Đông Dương - Indochine) và kích thích ý thức bảo tồn văn hóa dân tộc.'
          }
        },
        {
          id: 'cul-3',
          branchId: 'branch-cul',
          title: 'Tiếp biến & tư tưởng tiến bộ',
          impactType: 'positive',
          impactLabel: 'Tích cực khách quan',
          shortDesc: 'Du nhập chữ viết mới (chữ Quốc ngữ), báo chí, khoa học kỹ thuật và các trào lưu tư tưởng dân chủ, cách mạng tiến bộ.',
          caption: 'Ảnh minh họa: Trang báo chí chữ Quốc ngữ đầu thế kỷ XX',
          imageUrl: 'assets/images/cul-3.png',
          x: 2680,
          y: 1850,
          archiveCode: 'HỒ SƠ LƯU TRỮ: CUL-XIX/XX-03',
          deepAnalysis: 'Trái với ý đồ nô dịch của thực dân, các sĩ phu và trí thức Đông Nam Á đã chủ động tiếp thu có chọn lọc những thành tựu văn minh phương Tây (hệ thống chữ viết mẫu tự Latinh, công nghệ in ấn, báo chí hiện đại, y học, khoa học tự nhiên) và biến chúng thành vũ khí sắc bén để thức tỉnh đồng bào, đấu tranh chống lại chính ách thống trị thực dân.',
          historicalEvidence: [
            'Sự phổ biến của chữ Quốc ngữ ở Việt Nam, chữ Bahasa ở Indonesia và tiếng Anh/Tây Ban Nha ở Philippines giúp việc xóa mù chữ và truyền bá tri thức nhanh gấp nhiều lần hệ thống chữ viết cổ.',
            'Sự bùng nổ của báo chí công khai và bí mật, văn học hiện đại, kịch nói và các trường học tân tiến (như Đông Kinh Nghĩa Thục năm 1907 ở Hà Nội).',
            'Các luồng tư tưởng tiến bộ từ châu Âu và châu Á (tư tưởng Tự do - Bình đẳng - Bác ái của Cách mạng Pháp, tư tưởng Dân chủ tư sản và Chủ nghĩa Mác - Lênin) thâm nhập sâu rộng vào phong trào yêu nước.'
          ],
          dualImpact: {
            negative: 'Ban đầu chữ viết mới và hệ thống tân học được thực dân thiết kế nhằm cắt đứt mạch nguồn di sản chữ Hán/chữ cổ và đào tạo công chức phục vụ bộ máy cai trị.',
            positive: 'Trở thành công cụ khai phóng vĩ đại giúp hiện đại hóa nền văn hóa - học thuật dân tộc và soi đường cho thắng lợi của cách mạng giải phóng dân tộc.'
          }
        }
      ]
    }
  ],

  /* ========================================================================
     5 INTERACTIVE QUIZ QUESTIONS (CHẾ ĐỘ ÔN TẬP NHANH)
     ======================================================================== */
  quizQuestions: [
    {
      id: 1,
      category: 'NHÁNH CHÍNH TRỊ',
      branchColor: '#e05755',
      question: 'Trong bối cảnh hầu hết các nước Đông Nam Á đều biến thành thuộc địa hoặc nửa thuộc địa của phương Tây (thế kỷ XVI - XX), quốc gia nào duy nhất giữ được độc lập về danh nghĩa nhờ cải cách và ngoại giao khéo léo?',
      options: [
        'Vương quốc Xiêm (Thái Lan)',
        'Vương quốc Miến Điện (Myanmar)',
        'Liên bang Mã Lai (Malaysia)',
        'Quần đảo Philippines'
      ],
      correctIndex: 0,
      explanation: 'Dưới triều vua Rama IV (Mongkut) và đặc biệt là Rama V (Chulalongkorn), Vương quốc Xiêm đã tiến hành cải cách toàn diện đất nước theo hướng hiện đại hóa và thực thi đường lối ngoại giao mềm dẻo ("ngoại giao cây tre"), lợi dụng vị trí vùng đệm giữa hai đế quốc Anh và Pháp để giữ vững nền độc lập tương đối.'
    },
    {
      id: 2,
      category: 'NHÁNH CHÍNH TRỊ',
      branchColor: '#e05755',
      question: 'Biểu hiện điển hình nhất của chính sách "Chia để trị" (Divide et Impera) mà thực dân Pháp áp dụng tại Việt Nam và thực dân Anh áp dụng tại Mã Lai là gì?',
      options: [
        'Xóa bỏ hoàn toàn mọi ranh giới hành chính và hợp nhất tất cả các dân tộc vào một chế độ pháp lý duy nhất.',
        'Pháp chia Việt Nam thành 3 kỳ (Bắc Kỳ, Trung Kỳ, Nam Kỳ) với 3 chế độ cai trị khác nhau; Anh chia rẽ sắc tộc (Mã Lai, Hoa, Ấn) ở Mã Lai.',
        'Trao toàn bộ quyền tự trị lập pháp và quân sự cho các hội đồng bản địa ở từng địa phương.',
        'Chỉ cho phép cư dân bản địa sinh sống ở các đô thị cảng biển lớn và cấm canh tác ở nông thôn.'
      ],
      correctIndex: 1,
      explanation: 'Thực dân Pháp chia Việt Nam thành Nam Kỳ (thuộc địa), Bắc Kỳ (nửa bảo hộ), Trung Kỳ (bảo hộ) nhằm phá vỡ sự thống nhất dân tộc; trong khi thực dân Anh phân tách nghề nghiệp và nơi cư trú giữa người Mã Lai, người Hoa và người Ấn ở Mã Lai, để lại mâu thuẫn sắc tộc kéo dài.'
    },
    {
      id: 3,
      category: 'NHÁNH KINH TẾ',
      branchColor: '#d97724',
      question: 'Vì sao nền kinh tế các nước Đông Nam Á dưới thời thuộc địa bị đánh giá là "què quặt và lệ thuộc nặng nề" vào chính quốc?',
      options: [
        'Vì chính quyền thực dân chỉ tập trung phát triển công nghiệp nặng (luyện kim, chế tạo máy) mà bỏ bê nông nghiệp.',
        'Vì các nước Đông Nam Á từ chối xuất khẩu nguyên liệu thô và đóng cửa hoàn toàn các cảng biển quốc tế.',
        'Vì thực dân kìm hãm công nghiệp nặng, biến thuộc địa thành nơi cung cấp nguyên liệu thô (cao su, thiếc, than đá, lúa gạo) và thị trường độc chiếm tiêu thụ hàng hóa chính quốc.',
        'Vì toàn bộ hệ thống đường sắt và cảng biển đều do các vương triều phong kiến tự bỏ vốn xây dựng.'
      ],
      correctIndex: 2,
      explanation: 'Chính sách kinh tế thực dân kìm hãm sự phát triển của công nghiệp chế tạo bản địa, chỉ tập trung vơ vét tài nguyên (đồn điền cao su, mỏ thiếc, than đá) và cột chặt thị trường thuộc địa vào hàng hóa công nghiệp của chính quốc.'
    },
    {
      id: 4,
      category: 'NHÁNH XÃ HỘI',
      branchColor: '#2d8a5e',
      question: 'Tác động tích cực mang tính khách quan về mặt xã hội từ cuộc khai thác thuộc địa của thực dân phương Tây ở Đông Nam Á là gì?',
      options: [
        'Xóa bỏ hoàn toàn khoảng cách giàu nghèo và nạn sưu cao thuế nặng ở nông thôn.',
        'Giúp giai cấp địa chủ phong kiến củng cố vững chắc chế độ quân chủ chuyên chế độc tôn.',
        'Làm xuất hiện các lực lượng xã hội mới (giai cấp công nhân, tư sản dân tộc, tiểu tư sản trí thức) — lực lượng nòng cốt lãnh đạo phong trào giải phóng dân tộc.',
        'Đưa 100% nông dân Đông Nam Á trở thành chủ sở hữu các đồn điền cao su và hầm mỏ.'
      ],
      correctIndex: 2,
      explanation: 'Sự phát triển của các đồn điền, hầm mỏ, nhà máy và đô thị thuộc địa đã khách quan làm nảy sinh giai cấp công nhân, tư sản dân tộc và tiểu tư sản trí thức. Đây chính là những lực lượng xã hội mới tiếp thu tư tưởng tiến bộ và lãnh đạo cuộc đấu tranh giành độc lập trong thế kỷ XX.'
    },
    {
      id: 5,
      category: 'NHÁNH VĂN HÓA - GIÁO DỤC',
      branchColor: '#6d5bd0',
      question: 'Bên cạnh chính sách ngu dân thâm độc (hạn chế mở trường học, đầu độc bằng rượu cồn và thuốc phiện), sự tiếp biến văn hóa thời thuộc địa đã mang lại hệ quả tích cực khách quan nào?',
      options: [
        'Khôi phục hoàn toàn hệ thống khoa cử Nho học và chữ viết tượng hình cổ truyền.',
        'Du nhập chữ viết mới (như chữ Quốc ngữ), báo chí, khoa học kỹ thuật và các trào lưu tư tưởng dân chủ, cách mạng tiến bộ.',
        'Chính quyền thực dân miễn học phí đại học cho toàn bộ người dân thuộc địa.',
        'Xóa bỏ hoàn toàn sự kiểm duyệt báo chí và khuyến khích xuất bản sách lịch sử yêu nước.'
      ],
      correctIndex: 1,
      explanation: 'Các sĩ phu và trí thức yêu nước đã chủ động biến chữ viết mới (chữ Quốc ngữ mẫu tự Latinh), kỹ thuật in ấn, báo chí và các tư tưởng dân chủ, cách mạng tiếp thu từ bên ngoài thành vũ khí sắc bén để nâng cao dân trí và thức tỉnh tinh thần yêu nước.'
    }
  ]
};
