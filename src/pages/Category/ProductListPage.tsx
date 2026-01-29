import { useParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { CATEGORY_DATA } from "../components/CATEGORY_DATA.tsx";

const ProductListPage = () => {
    const { category, id } = useParams<{ category: string; id: string }>();

    const categoryKey = category === "sunglass" ? "sunglasses" :
        category === "glass" ? "glasses" : category;

    const categoryGroup = categoryKey ? CATEGORY_DATA[categoryKey] : null;
    const cleanId = id?.replace(/^\//, "");
    const currentCategory = categoryGroup && cleanId ? categoryGroup[cleanId] : null;

    if (!currentCategory) {
        return <div className="pt-40 text-center text-[13px]">데이터를 찾을 수 없습니다.</div>;
    }

    const isCollection = "image" in currentCategory;

    return (
        <main className="relative w-full min-h-screen ">
            {isCollection ? (
                <section className="relative w-full h-screen overflow-hidden">
                    <img
                        src={(currentCategory as any).image}
                        className="w-full h-full object-cover"
                        alt="collection hero"
                    />
                    <div className="absolute inset-0 bg-black/10 flex flex-col justify-end pb-24 px-10">
                        <div className="text-white max-w-[700px]">
                            <h2 className="text-[24px] font-bold mb-4 uppercase tracking-tighter">
                                {currentCategory.title}
                            </h2>
                            <p className="text-[12px] leading-relaxed whitespace-pre-line font-light opacity-90">
                                {currentCategory.description}
                            </p>
                        </div>
                    </div>
                </section>
            ) : (
                <section className=" top-22 left-0 z-40 w-full  flex flex-col items-center pt-24 pb-12 gap-6">
                    <h2 className="text-[18px] font-bold uppercase tracking-[0.15em]">
                        {currentCategory.title}
                    </h2>
                    <p className="text-[11px] text-center max-w-[800px] px-6 text-gray-500 leading-relaxed whitespace-pre-line">
                        {currentCategory.description}
                    </p>
                </section>
            )}

            <div className={isCollection ? "pt-20" : "pt-[320px]"}>
                {/* 상품 리스트 컴포넌트 */}
            </div>
        </main>
    );
};

export default ProductListPage;