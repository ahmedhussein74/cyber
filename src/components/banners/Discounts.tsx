import watch from "../../images/appleWatch.png";
import headphone from "../../images/headphone.svg";
import iphoneGold from "../../images/iphone14gold.png";
import iphoneSilver from "../../images/iphone14silver.png";

const Discounts = () => {
  const offers = [
    {
      name: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: 1437,
      img: iphoneGold,
    },
    {
      name: "Airpods Max Silver",
      price: 549,
      img: headphone,
    },
    {
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
      price: 399,
      img: watch,
    },
    {
      name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
      price: 1499,
      img: iphoneSilver,
    },
  ];

  return (
    <section className="px-[5%] py-12 lg:py-20">
      <h2 className="text-lg lg:text-2xl font-bold">Discounts up to -50%</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {offers.map((e, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center gap-4 px-3 py-5 rounded bg-[#F6F6F6]"
          >
            <p className="w-full text-end text-xl">
              <i className="fa-regular fa-heart text-[#909090]"></i>
            </p>
            <img src={e.img} className="h-52" />
            <h2 className="text-center font-bold text-xl">{e.name}</h2>
            <span className="text-lg">{e.price} $</span>
            <button className="bg-black rounded text-white py-2 px-4">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discounts;
