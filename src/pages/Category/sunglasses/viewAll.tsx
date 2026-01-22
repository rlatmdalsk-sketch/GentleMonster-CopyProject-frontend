import { twMerge } from "tailwind-merge"

function ViewAllSunglasses() {
    return <>
        <div className={twMerge(
            "flex flex-col items-center pt-25 pb-10 gap-5 w-full",
            "fixed top-22 left-0 z-40 "
        )}>
            <h2 className={twMerge("text-[23px]","font-[550]")}>선글라스 전체보기</h2>
            <p className={twMerge("text-[13px]","font-bold")}>독창적인 창의성을 담은 다양한 컬러와 쉐입의 선글라스를 만나보세요.</p>
        </div>
    </>
}

export default ViewAllSunglasses