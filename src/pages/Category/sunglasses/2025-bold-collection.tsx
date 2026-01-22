import {twMerge} from "tailwind-merge"

function CB2025Sunglasses() {
    return <>
        <div className={twMerge(
            "flex flex-col items-center pt-25 pb-10 gap-5 w-full",
            "fixed top-22 left-0 z-40 "
        )}>
            <h2 className={twMerge("text-[23px]", "font-[550]")}>2025 볼드 컬렉션 선글라스</h2>
            <p className={twMerge("text-[13px]", "font-bold","text-center")}>볼드 컬렉션 제품의 브릿지 디테일은 현대적으로 재해석한 방패의 구조를 형상화했으며, 노즈패드를 삭제하는
                구조의 혁신을 통해 뉴 퓨처리즘을 제안합니다.<br /> 속도감이 강조된 시그니처 심볼과 과장된 볼륨의 프론트와 밸런스를 형성하며 미래적 감각을 강화한 선글라스 컬렉션을 만나보세요.</p>
        </div>
    </>
}

export default CB2025Sunglasses;