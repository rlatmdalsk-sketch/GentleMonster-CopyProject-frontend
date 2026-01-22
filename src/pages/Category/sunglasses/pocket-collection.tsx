import {twMerge} from "tailwind-merge"

function PocketSunglasses() {
    return <>
        <div className={twMerge(
            "flex flex-col items-center pt-25 pb-10 gap-5 w-full",
            "fixed top-22 left-0 z-40 "
        )}>
            <h2 className={twMerge("text-[23px]", "font-[550]")}>포켓 컬렉션 선글라스</h2>
            <p className={twMerge("text-[13px]", "font-bold")}>젠틀몬스터 포켓 컬렉션 선글라스는 휴대성을 높인 컴팩트한 디자인의 폴딩 선글라스 라인입니다. 젠틀몬스터
                특유의 대담하고 현대적인 미학을 담아, 실용성과 스타일을 모두 갖춘 새로운 아이웨어 컬렉션으로 선보입니다.</p>
        </div>
    </>
}

export default PocketSunglasses