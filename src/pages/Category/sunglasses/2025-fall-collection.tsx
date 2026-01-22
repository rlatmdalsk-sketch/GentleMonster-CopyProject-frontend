import {twMerge} from "tailwind-merge"

function CF2025Sunglasses() {
    return <>
        <div className={twMerge(
            "flex flex-col items-center pt-25 pb-10 gap-5 w-full",
            "fixed top-22 left-0 z-40 "
        )}>
            <h2 className={twMerge("text-[23px]", "font-[550]")}>2025 FALL 컬렉션 선글라스</h2>
            <p className={twMerge("text-[13px]", "font-bold")}>2025 FALL 컬렉션 제품은 더욱 가볍고 섬세해진 실루엣을 강조해 새로운 고급스러움을 제안합니다.
                얇아진 프레임에 과하지 않은 디테일을 더하여 세련되고 절제된 미학을 표현한 선글라스 컬렉션을 만나보세요.</p>
        </div>
    </>
}

export default CF2025Sunglasses;