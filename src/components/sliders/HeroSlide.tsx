interface SlideProps {
  title: string;
  description: string;
  image: string;
}

const HeroSlide: React.FC<SlideProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:justify-around">
      <div className="text-white flex items-center lg:items-start flex-col gap-3 lg:max-w-[500px]">
        <h1 className="font-bold text-4xl lg:text-7xl">{title}</h1>
        <p className="text-center lg:text-start">{description}</p>
        <button className="w-48 h-14 bg-transparent border border-white text-white rounded-lg hover:text-[#211C24] hover:bg-white">
          Shop Now
        </button>
      </div>
      <img src={image} className="h-60 lg:h-96" />
    </div>
  );
};

export default HeroSlide;
