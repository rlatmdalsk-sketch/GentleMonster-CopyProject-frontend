import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import { twMerge } from "tailwind-merge";

// 1. BestSeller 이미지 데이터 생성 (1~20번)
const BEST_SELLER_SLIDES = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `/images/Home/Slide2/BestSeller (${i + 1}).jpg`, // 파일 경로 확인 필요
    title: `베스트셀러 아이템 ${i + 1}`,
    price: `₩279,000`,
}));



function BestSellerSlider() {
    return (
        <div className="w-full">
            <section className="w-full flex flex-col items-center">

                <Swiper
                    modules={[FreeMode]}
                    slidesPerView={"5.5"} // 한 화면에 보일 개수
                    centeredSlides={false}
                    spaceBetween={25}
                    grabCursor={true}
                    freeMode={{
                        enabled: true,
                        sticky: true,
                        momentum: false,
                    }}
                    speed={800}
                    touchRatio={1.2}
                    className="w-full h-[663px]"
                >
                    {BEST_SELLER_SLIDES.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="w-full h-full flex flex-col justify-between">
                                {/* 이미지 영역 */}
                                <div className="w-full h-full overflow-hidden relative">
                                    <img
                                        src={slide.src}
                                        alt={slide.title}
                                        className="w-full h-[150%] object-cover"
                                        style={{transform: 'translateY(-160px)'}}
                                    />
                                </div>

                                {/* 텍스트 정보 */}
                                <div className="p-6 text-[11px] leading-relaxed w-[85%] ml-auto">
                                    <p className="font-bold">{slide.title}</p>
                                    <p>{slide.price}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>
        </div>
    );
}

export default BestSellerSlider;