const documents = [
  {
    documentNumber: "8769/VPCP-CN",
    publishedDate: "08/11/2023",
    name: "V/v kiểm tra, xử lý nội dung Báo Tiền Phong phản ánh",
  },
  {
    documentNumber: "460/TB-VPCP",
    publishedDate: "08/11/2023",
    name: "Kết luận của Thủ tướng Chính phủ Phạm Minh Chính tại buổi làm việc với lãnh đạo tỉnh Trà Vinh",
  },
  {
    documentNumber: "27/2023/QĐ-TTg",
    publishedDate: "08/11/2023",
    name: "Quy định tổ chức lễ động thổ, lễ khởi công và lễ khánh thành công trình",
  },
  {
    documentNumber: "1311/QĐ-TTg",
    publishedDate: "08/11/2023",
    name: "Điều chỉnh, bổ sung một số nội dung tại Quyết định số 1256/QĐ-TTg ngày 07 tháng 10 năm 2020 của Thủ tướng Chính phủ về việc thành lập Hội đồng thẩm định quy hoạch vùng thời kỳ 2021 - 2030, tầm nhìn đến năm 2050",
  },
  {
    documentNumber: "8751/VPCP-CN",
    publishedDate: "07/11/2023",
    name: "V/v phê duyệt chủ trương đầu tư Dự án tuyến đường bộ cao tốc Ninh Bình - Hải Phòng, đoạn qua Nam Định và Thái Bình theo phương thức PPP",
  },
  {
    documentNumber: "8721/VPCP-CN",
    publishedDate: "07/11/2023",
    name: "V/v xử lý kiến nghị về thực hiện giải phóng mặt bằng Dự án xây dựng công trình đường bộ cao tốc Bắc - Nam phía Đông giai đoạn 2021 - 2025, đoạn qua địa phận tỉnh Phú Yên",
  },
  {
    documentNumber: "78/2023/NĐ-CP",
    publishedDate: "07/11/2023",
    name: "Sửa đổi, bổ sung một số điều của Nghị định số 32/2017/NĐ-CP ngày 31 tháng 3 năm 2017 của Chính phủ về tín dụng đầu tư của Nhà nước",
  },
  {
    documentNumber: "56/VBHN-BGTVT",
    publishedDate: "07/11/2023",
    name: "Nghị định quy định về nhập khẩu, phá dỡ tàu biển đã qua sử dụng",
  },
  {
    documentNumber: "23/2023/QĐ-UBND",
    publishedDate: "07/11/2023",
    name: "Về việc bãi bỏ Quyết định số 03/2014/QĐ-UBND ngày 25/02/2014 của UBND tỉnh về việc ban hành quy định trách nhiệm các ngành, các cấp, các cấp, các tổ chức, cá nhân trong hoạt động khoáng sản trên địa bàn tỉnh Phú Thọ",
  },
  {
    documentNumber: "1304/QĐ-TTg",
    publishedDate: "07/11/2023",
    name: "Về việc xuất cấp hóa chất khử khuẩn từ nguồn dự trữ quốc gia hỗ trợ các tỉnh: Hà Tĩnh, Hòa Bình phòng, chống thiên tai, dịch bệnh",
  },
  {
    documentNumber: "1303/QĐ-TTg",
    publishedDate: "07/11/2023",
    name: "Về việc thay đổi nhân sự Chủ nhiệm Ủy ban Công tác về các tổ chức phi chính phủ nước ngoài",
  },
  {
    documentNumber: "1300/QĐ-TTg",
    publishedDate: "06/11/2023",
    name: "Kiện toàn nhân sự Ủy ban An toàn giao thông Quốc gia",
  },
  {
    documentNumber: "8686/VPCP-CN",
    publishedDate: "05/11/2023",
    name: "V/v xây dựng Tờ trình đề xuất nguồn vốn trung hạn và bố trí dự toán hằng năm cho Dự án thu hồi đất, bồi thường, hỗ trợ, tái định cư CHKQT Long Thành",
  },
  {
    documentNumber: "184/NQ-CP",
    publishedDate: "04/11/2023",
    name: "Về việc giao kế hoạch vốn Chương trình phục hồi và phát triển kinh tế - xã hội; điều chỉnh, bổ sung kế hoạch đầu tư công trung hạn vốn ngân sách trung ương giai đoạn 2021 - 2025 của các bộ, cơ quan trung ương và địa phương",
  },
  {
    documentNumber: "1298/QĐ-TTg",
    publishedDate: "04/11/2023",
    name: "Về việc công nhận xã An toàn khu thuộc tỉnh Đắk Lắk",
  },
  {
    documentNumber: "1297/QĐ-TTg",
    publishedDate: "04/11/2023",
    name: "Phê chuẩn kết quả bầu chức vụ Phó Chủ tịch Ủy ban nhân dân tỉnh Đồng Tháp nhiệm kỳ 2021 - 2026",
  },
  {
    documentNumber: "1058/CĐ-TTg",
    publishedDate: "04/11/2023",
    name: 'Về việc tập trung thực hiện các nhiệm vụ, giải pháp cấp bách, trọng tâm chống khai thác hải sản bất hợp pháp, không báo cáo và không theo quy định, gỡ cảnh báo "Thẻ vàng" của Ủy ban châu Âu',
  },
  {
    documentNumber: "8662/VPCP-KGVX",
    publishedDate: "03/11/2023",
    name: "V/v nghỉ Tết Âm lịch và nghỉ lễ Quốc khánh năm 2024",
  },
  {
    documentNumber: "82/2023/TT-BQP",
    publishedDate: "03/11/2023",
    name: "Quy định điều chỉnh trợ cấp hằng tháng đối với quân nhân, người làm công tác cơ yếu hưởng lương như đối với quân nhân đã phục viên, xuất ngũ, thôi việc",
  },
  {
    documentNumber: "55/VBHN-BGTVT",
    publishedDate: "03/11/2023",
    name: "Thông tư quy định về việc vận chuyển hàng không và hoạt động hàng không chung",
  },
  {
    documentNumber: "54/VBHN-BGTVT",
    publishedDate: "03/11/2023",
    name: "Thông tư ban hành Bộ quy chế An toàn hàng không dân dụng lĩnh vực tàu bay và khai thác tàu bay",
  },
  {
    documentNumber: "53/VBHN-BGTVT",
    publishedDate: "03/11/2023",
    name: "Thông tư quy định về quản lý và bảo đảm hoạt động bay",
  },
  {
    documentNumber: "52/VBHN-BGTVT",
    publishedDate: "03/11/2023",
    name: "Thông tư hướng dẫn về lập, phê duyệt, công bố danh mục dự án; phương pháp, tiêu chuẩn đánh giá hồ sơ dự thầu và đấu thầu lựa chọn nhà đầu tư các công trình dịch vụ chuyên ngành hàng không tại cảng hàng không, sân bay",
  },
  {
    documentNumber: "30/2023/TT-BGTVT",
    publishedDate: "03/11/2023",
    name: "Ban hành 03 Quy chuẩn kỹ thuật quốc gia về phương tiện giao thông đường sắt",
  },
  {
    documentNumber: "16/VBHN-BTC",
    publishedDate: "03/11/2023",
    name: "Nghị định về chức năng, nhiệm vụ và cơ chế hoạt động của Tổng công ty Đầu tư và Kinh doanh vốn nhà nước",
  },
  {
    documentNumber: "1289/QĐ-TTg",
    publishedDate: "03/11/2023",
    name: "Về việc phê duyệt Quy hoạch tỉnh Kiên Giang thời kỳ 2021 - 2030, tầm nhìn đến năm 2050",
  },
  {
    documentNumber: "1288/QĐ-TTg",
    publishedDate: "03/11/2023",
    name: "Phê duyệt Quy hoạch tỉnh Bắc Kạn thời kỳ 2021 - 2030, tầm nhìn đến năm 2050",
  },
  {
    documentNumber: "77/2023/NĐ-CP",
    publishedDate: "02/11/2023",
    name: "Về quản lý nhập khẩu hàng hóa tân trang theo Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương",
  },
  {
    documentNumber: "181/NQ-CP",
    publishedDate: "02/11/2023",
    name: "Về việc điều chỉnh nhiệm vụ chỉ thực hiện các chính sách cho vay ưu đãi thông qua Ngân hàng Chính sách xã hội theo Nghị quyết số 11/NQ-CP",
  },
  {
    documentNumber: "13/VBHN-BYT",
    publishedDate: "02/11/2023",
    name: "Thông tư hướng dẫn thực hành sản xuất tốt (GMP) trong sản xuất, kinh doanh thực phẩm bảo vệ sức khỏe",
  },
  {
    documentNumber: "1287/QĐ-TTg",
    publishedDate: "02/11/2023",
    name: "Phê duyệt Quy hoạch thành phố Đà Nẵng thời kỳ 2021 - 2030, tầm nhìn đến năm 2050",
  },
  {
    documentNumber: "1280/QĐ-TTg",
    publishedDate: "02/11/2023",
    name: "Về việc sửa đổi Quyết định số 203/QĐ-TTg ngày 06 tháng 02 năm 2020 của Thủ tướng Chính phủ về việc thành lập Ủy ban chỉ đạo quốc gia về thực hiện Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045",
  },
  {
    documentNumber: "12/VBHN-BYT",
    publishedDate: "02/11/2023",
    name: "Thông tư quy định về công bố hợp quy và công bố phù hợp quy định đối với thuốc lá",
  },
  {
    documentNumber: "11/VBHN-BYT",
    publishedDate: "02/11/2023",
    name: "Thông tư quy định về quản lý thực phẩm chức năng",
  },
  {
    documentNumber: "1043/TTg-NN",
    publishedDate: "02/11/2023",
    name: "V/v thực hiện một số nội dung Chỉ thị số 29/CT-TTg ngày 23/7/2020",
  },
];

export default function DocumentList() {
  return (
    <div className="">
      <table className="w-full ">
        <tr className="bg-primary text-white">
          <th className="w-1/5 rounded-tl border-r border-white p-1 last:border-none">Document Number</th>
          <th className="w-1/5 border-r border-white p-1 last:border-none">Published Date</th>
          <th className=" last:border-r-none rounded-tr border-r border-white p-1">Name</th>
        </tr>
        {documents.map((doc) => (
          <tr key={doc.documentNumber} className="even:bg-slate-50">
            <td>
              <div className="flex min-h-[100px] items-center justify-center p-2">
                <span>{doc.documentNumber}</span>
              </div>
            </td>
            <td>
              <div className="flex min-h-[100px] items-center justify-center p-2">
                <span>{doc.publishedDate}</span>
              </div>
            </td>
            <td>
              <div className="flex min-h-[100px] items-center p-2">
                <span>{doc.name}</span>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
