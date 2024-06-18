import sell1 from "../../images/sell1.png";
import sell2 from "../../images/sell2.png";
import sell3 from "../../images/sell3.png";
import sell4 from "../../images/sell4.png";
import sell5 from "../../images/sell5.png";
import sell6 from "../../images/sell6.png";
import sell7 from "../../images/sell7.png";
import sell8 from "../../images/sell8.png";

const BestSaller = () => {
  const offers = [
    {
      name: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: 1437,
      img: sell1,
    },
    {
      name: "Airpods Max Silver",
      price: 549,
      img: sell2,
    },
    {
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
      price: 399,
      img: sell3,
    },
    {
      name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
      price: 1499,
      img: sell4,
    },
    {
      name: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: 1437,
      img: sell5,
    },
    {
      name: "Airpods Max Silver",
      price: 549,
      img: sell6,
    },
    {
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
      price: 399,
      img: sell7,
    },
    {
      name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
      price: 1499,
      img: sell8,
    },
  ];
  return (
    <section className="px-[5%] py-12 lg:py-20">
      <h2 className="text-lg lg:text-2xl font-bold">Best seller</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {offers.map((e, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center gap-4 px-3 py-5 rounded bg-[#F6F6F6]"
          >
            <p className="w-full text-end text-xl">
              <i className="fa-regular fa-heart text-[#909090] hover:text-red-600"></i>
            </p>
            <img src={e.img} className="h-52" />
            <h2 className="text-center font-bold text-xl">{e.name}</h2>
            <span className="text-lg">{e.price} $</span>
            <button className="w-1/2 block bg-black rounded text-white py-2 px-4">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSaller;
