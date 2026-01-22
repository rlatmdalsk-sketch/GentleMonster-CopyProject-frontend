import { twMerge } from "tailwind-merge"

function TintedSunglasses() {
    return <>
        <div className={twMerge(
            "flex flex-col items-center pt-25 pb-10 gap-5 w-full",
            "fixed top-22 left-0 z-40 "
        )}>
            <h2 className={twMerge("text-[23px]","font-[550]")}>틴트 렌즈 선글라스</h2>
            <p className={twMerge("text-[13px]","font-bold")}>라이트 블루, 올리브 그린, 글로시 핑크 등 다양한 틴트 선글라스로 유니크한 룩을 완성해 보세요.</p>
        </div>
    </>
}

export default TintedSunglasses