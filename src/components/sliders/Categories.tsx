import phones from "../../images/phones.png";
import smartWatches from "../../images/smartWatches.png";
import cameras from "../../images/cameras.png";
import headphones from "../../images/headphones.png";
import computers from "../../images/computers.png";
import gaming from "../../images/gaming.png";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

const Categories = () => {
  const cats = [
    {
      img: phones,
      title: "phones",
    },
    {
      img: smartWatches,
      title: "smart watches",
    },
    {
      img: cameras,
      title: "cameras",
    },
    {
      img: headphones,
      title: "headphones",
    },
    {
      img: computers,
      title: "computers",
    },
    {
      img: gaming,
      title: "gaming",
    },
  ];

  return (
    <section className="px-[5%] py-12 lg:py-20 bg-[#FAFAFA]">
      <h2 className="text-lg lg:text-2xl font-bold">Browse By Category</h2>
      <Swiper
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, A11y]}
        className="px-[5%]"
      >
        {cats.map((e, index) => (
          <SwiperSlide key={index}>
            <div className="w-40 h-32 flex flex-col justify-center items-center gap-3 rounded-lg bg-[#EDEDED] border">
              <img src={e.img} className="" />
              <span className="capitalize">{e.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Categories;
