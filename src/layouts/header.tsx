import {twMerge} from "tailwind-merge";


function Header() {
    return <>
        <header
            className={twMerge(["left-0", "right-0", "z-60"], ["transition-all", "duration-300", "border-b"],["bg-[#f2f3f5]"])}>
            <div
                className={twMerge("grid", "grid-cols-3", "items-center", "h-[90px]", "px-[60px]",
                    ["mobile:grid-cols-6", "mobile:h-[56px]", "mobile:px-[12px]"])}>
                <div className={twMerge("flex","gap-5")}>
                    {/* 왼쪽*/}
                    <button className={twMerge("text-black", "text-[14px]")}>
                        선글라스
                    </button>
                    <button className={twMerge("text-black", "text-[14px]")}>
                        안경
                    </button>
                    <button className={twMerge("text-black", "text-[14px]")}>
                        컬렉션
                    </button>
                    <button className={twMerge("text-black", "text-[14px]")}>
                        스토어
                    </button>
                    <button className={twMerge("text-black", "text-[14px]")}>
                        더 알아보기
                    </button>
                </div>
                <div className={twMerge("text-4xl","text-center")}>
                    {/* 로고 */}
                    GENTLE MONSTER
                </div>
                <div className={twMerge("flex", "gap-3","justify-end")}>
                    {/*오른쪽*/}
                    <div>
                        <span>슬라이드|</span>돋보기
                    </div>
                    <div>
                        로그인
                    </div>
                    <div>
                        장바구니
                    </div>
                </div>
                {/**/}
            </div>
        </header>
    </>
}

export default Header;