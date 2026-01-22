import { twMerge } from "tailwind-merge"

function BestSunglasses() {
    return <>
        <div className={twMerge(
            "flex flex-col items-center pt-25 pb-10 gap-5 w-full",
            "fixed top-22 left-0 z-40 "
        )}>
            <h2 className={twMerge("text-[23px]","font-[550]")}>선글라스 베스트셀러</h2>
            <p className={twMerge("text-[13px]","font-bold")}>고글 쉐입부터 캣아이 선글라스까지 가장 사랑받는 선글라스 컬렉션을 확인해 보세요.</p>
        </div>
    </>
}

export default BestSunglasses