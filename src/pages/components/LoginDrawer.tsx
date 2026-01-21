import { LuX } from "react-icons/lu";
import {Link} from "react-router-dom";
import {twMerge} from "tailwind-merge"; // 닫기 아이콘

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const LoginDrawer = ({ isOpen, onClose }: Props) => {
    return (
        <>
            {/* 배경 어둡게 처리 (Overlay) */}
            <div
                className={`fixed inset-0 bg-black/30 z-[100] transition-opacity duration-300 ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={onClose}
            />

            {/* 사이드바 본체 */}
            <div className={`fixed top-0 right-0 h-full w-full md:w-[40%] bg-white z-[101] shadow-2xl transform transition-transform duration-1000 ease-in-out p-10 overflow-y-auto ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}>
                {/* 닫기 버튼 */}
                <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-black">
                    <LuX size={30} />
                </button>

                {/* 내용물 (이미지와 동일한 구성) */}
                <div className="mt-40 space-y-8">
                    <div>
                        <h2 className="text-[20px] font-bold mb-4">로그인 / 계정 생성</h2>
                        <p className="text-[14px] text-gray-500 mb-6 leading-relaxed">
                            이메일 주소를 입력하여 로그인합니다 <br />
                            만약, 회원가입을 안하셨다면 계정생성을 눌러주세요
                        </p>

                        <div className="space-y-4">
                            <label className="text-[10px] text-gray-400 block">*필수 입력 항목</label>
                            <input
                                type="email"
                                placeholder="이메일 주소*"
                                className="w-full border-b border-black py-2 outline-none text-[13px]"
                            />
                            <input
                                type="email"
                                placeholder="비밀번호*"
                                className="w-full border-b border-black py-2 outline-none text-[13px]"
                            />
                            <button className="w-full bg-gray-400 text-white py-4 text-[12px] font-bold mt-4">
                                계속하기
                            </button>
                            <Link to={"/"} className={twMerge("text-[12px]","w-full")}>계정 생성</Link>
                        </div>
                    </div>

                    <div className="space-y-3 pt-10 border-t border-gray-100">
                        <p className="text-[10px] text-center text-gray-400">다른 옵션 보기</p>
                        <button className="w-full bg-[#FEE500] py-3 text-[12px] flex items-center justify-center gap-2"
                        onClick={() => {
                            alert("지원하지 않는 기능입니다.")
                        }}
                        >
                            카카오 계정으로 계속하기
                        </button>
                        <button className="w-full border border-gray-200 py-3 text-[12px] flex items-center justify-center gap-2"
                        onClick={()=>{
                            alert("지원하지 않는 기능입니다.")
                        }}
                        >
                            애플 계정으로 계속하기
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default LoginDrawer;