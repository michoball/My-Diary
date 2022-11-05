import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

function Slider({ imgSource }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {imgSource.map((img, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={img} alt="slider-img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Slider;
