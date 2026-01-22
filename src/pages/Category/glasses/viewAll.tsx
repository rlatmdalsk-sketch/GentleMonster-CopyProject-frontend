import { twMerge } from "tailwind-merge"

function ViewAll() {
    return <>
        <div className={twMerge("flex","flex-col","items-center","pt-25","gap-5")}>
            <h2 className={twMerge("text-[20px]","font-[550]")}>선글라스 전체보기</h2>
            <p className={twMerge("text-[12px]","font-bold")}>독창적인 창의성을 담은 다양한 컬러와 쉐입의 선글라스를 만나보세요.</p>
        </div>
    </>
}

export default ViewAll