import { data } from "../../api/home";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSlide from "../sliders/HeroSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

const HeroHome = () => {
  return (
    <section className="h-[calc(100vh-64px)] px-[5%] bg-[#211C24] flex items-center">
      <Swiper
        navigation
        slidesPerView={1}
        autoplay
        loop
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, A11y, Autoplay]}
      >
        {data.map((e, index) => (
          <SwiperSlide key={index}>
            <HeroSlide
              image={e.image}
              title={e.title}
              description={e.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroHome;
