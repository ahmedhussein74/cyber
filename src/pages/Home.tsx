import HeroHome from "../components/heros/HeroHome";
import Discounts from "../components/banners/Discounts";
import Categories from "../components/sliders/Categories";
import SmallerBanner from "../components/banners/SmallerBanner";

const Home = () => {
  return (
    <>
      <HeroHome />
      <SmallerBanner />
      <Categories />
      <Discounts />
    </>
  );
};

export default Home;
