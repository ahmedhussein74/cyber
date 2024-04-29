import iphone from "../../images/iphone.svg";

const HeroHome = () => {
  return (
    <section className="h-[calc(100vh-64px)] px-[5%] py-4 bg-[#211C24] grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8 overflow-hidden">
      <div className="text-white flex flex-col gap-3">
        <p>Pro.Beyond.</p>
        <h1 className="text-4xl lg:text-8xl">
          Iphone 14 <span className="font-bold">Pro</span>
        </h1>
        <p>Created to change everything to the better for evryone</p>
        <button className="w-48 h-14 bg-transparent border border-white text-white rounded-lg hover:text-[#211C24] hover:bg-white">
          Shop Now
        </button>
      </div>
      <img src={iphone} className="text-center" />
    </section>
  );
};

export default HeroHome;
