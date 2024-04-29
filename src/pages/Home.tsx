import SmallerBanner from "../components/banners/SmallerBanner";
import HeroHome from "../components/heros/HeroHome";
import Categories from "../components/sliders/Categories";

const Home = () => {
  return (
    <>
      <HeroHome />
      <SmallerBanner />
      <Categories />
    </>
  );
};

export default Home;
