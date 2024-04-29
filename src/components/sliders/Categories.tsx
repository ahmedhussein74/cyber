import phones from "../../images/phones.png";
import smartWatches from "../../images/smartWatches.png";
import cameras from "../../images/cameras.png";
import headphones from "../../images/headphones.png";
import computers from "../../images/computers.png";
import gaming from "../../images/gaming.png";

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
    <section className="px-[5%] py-12 lg:py-20">
      <h2 className="text-lg lg:text-2xl font-bold">Browse By Category</h2>
      <div className="scroll-hidden overflow-x-auto pt-5">
        <div className="flex justify-between gap-8 w-max">
          {cats.map((e, index) => (
            <div
              key={index}
              className="w-40 h-32 flex flex-col justify-center items-center gap-3 rounded-lg bg-[#EDEDED] border"
            >
              <img src={e.img} className="" />
              <span className="capitalize">{e.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
