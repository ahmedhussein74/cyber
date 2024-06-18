import HeroHome from "../components/heros/HeroHome";
import TopSale from "../components/banners/TopSale";
import Discounts from "../components/banners/Discounts";
import Categories from "../components/sliders/Categories";
import BestSaller from "../components/banners/BestSaller";
import SmallerBanner from "../components/banners/SmallerBanner";

const Home = () => {
  return (
    <>
      <HeroHome />
      <SmallerBanner />
      <Categories />
      <BestSaller />
      <Discounts />
      <TopSale />
    </>
  );
};

export default Home;
