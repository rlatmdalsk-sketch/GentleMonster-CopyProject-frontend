import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from "swiper/modules";
import { twMerge } from "tailwind-merge";

const LookSLIDES = Array.from({ length: 31 }, (_, i) => ({
    id: i + 1,
    src: `/images/Home/Slide1/LOOK_BOOK_FIRST (${i + 1}).jpg`,
    title: `알마 01(V)`,
    price: `₩279,000`,
    buyLink: "/category/view-all",
}));

function LookBookSlider() {
    return (
        <section className={twMerge("w-full", "h-[960px]")}>
            <Swiper
                modules={[FreeMode]}
                slidesPerView={"2.8"}
                centeredSlides={false}
                spaceBetween={10}
                grabCursor={true}
                freeMode={{
                    enabled: true,
                    sticky: true,
                    momentum: false,
                }}
                speed={800}
                touchRatio={1.2}
                className={twMerge("w-full", "h-[800px]")}
            >
                {LookSLIDES.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative">
                        <div className="w-full h-full flex flex-col justify-between">
                            <div className="w-[85%] h-[960px] overflow-hidden relative">
                                <img
                                    src={slide.src}
                                    alt={slide.title}
                                    className="absolute w-full h-[140%] object-cover"
                                    style={{
                                        top: '0',
                                        transform: 'translateY(-130px)'
                                    }}
                                />
                            </div>

                            <div className="p-6 text-[11px] leading-relaxed w-[85%] mr-auto">
                                <p className="font-bold">{slide.title}</p>
                                <p>{slide.price}</p>
                                <button className="mt-2 underline underline-offset-4 opacity-60 hover:opacity-100">
                                    위시리스트에 추가하기
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default LookBookSlider;