

const Footer = () =>{
    return(
        <div className="bg-[#065fad] mt-14 h-80">
            <div className="max-w-screen-xl flex text-white mx-auto items-center h-full justify-between">
                <div className="w-[30%]">
                    <img src="https://ebacsi.com.vn/assets/img/logofooter.png"/>
                    <h4 className="text-[16px] font-bold pb-3 pt-4">TỔNG CÔNG TY TRUYỀN THÔNG (VNPT-MEDIA)</h4>
                    <span className="text-[14px]">GIẤY CHỨNG NHẬN ĐĂNG KÝ DOANH NGHIỆP SỐ 0106873188 DO SỞ KH&ĐT HÀ NỘI CẤP NGÀY 12/06/2015</span>
                </div>
                <div className="w-[65%]">
                    <div className="flex">
                        <div className="w-[25%] text-[14px]">GIỚI THIỆU</div>
                        <div className="w-[25%] text-[14px]">CÁC GÓI DỊCH VỤ Y TẾ</div>
                        <div className="w-[25%] text-[14px]">TIN TỨC</div>
                        <div className="w-[25%] text-[14px]">ĐĂNG KÝ NHẬN TƯ VẤN</div>
                    </div>
                    <div className="flex pt-7">
                        <div className="w-[50%]">
                            <h4 className="text-[16px] font-bold">ĐIỀU KHOẢN VÀ CHÍNH SÁCH BẢO MẬT</h4>
                            <ul>
                                {/* <li className="py-2.5 text-gray-300"> <span className="text-[#0084cb]">></span> Điều khoản hoạt động</li>
                                <li className="py-2.5 text-gray-300"> <span className="text-[#0084cb]">></span> Quy định thanh toán</li>
                                <li className="py-2.5 text-gray-300"> <span className="text-[#0084cb]">></span> Chính sách bảo mật thông tin</li> */}
                                <li className="py-2.5 text-gray-300"> <span className="text-[#0084cb]">-</span> Điều khoản hoạt động</li>
                                <li className="py-2.5 text-gray-300"> <span className="text-[#0084cb]">-</span> Quy định thanh toán</li>
                                <li className="py-2.5 text-gray-300"> <span className="text-[#0084cb]">-</span> Chính sách bảo mật thông tin</li>
                            </ul>
                            <img src="https://ebacsi.com.vn/assets/img/dathongbao.png"/>
                        </div>
                        <div className="w-[50%]">
                            <h4 className="text-[16px] font-bold">KẾT NỐI VỚI CHÚNG TÔI</h4>
                            <div className="flex pt-4">
                                <img src="https://ebacsi.com.vn/assets/img/Website---eBacsi---final---cut_86.png"/>
                                <img src="https://ebacsi.com.vn/assets/img/Website---eBacsi---final---cut_88.png" className="pl-6"/>
                                <img src="https://ebacsi.com.vn/assets/img/Website---eBacsi---final---cut_90.png" className="pl-6"/>
                            </div>
                            <img src="https://ebacsi.com.vn/assets/img/vnpt.png" className="pt-8"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer