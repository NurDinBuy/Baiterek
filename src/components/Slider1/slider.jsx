// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';

const SliderSwiper = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div>
                   1
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    2
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    3
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    4
                </div>
            </SwiperSlide>
            ...
        </Swiper>
    );
};

export default SliderSwiper;
