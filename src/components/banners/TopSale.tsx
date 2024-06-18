const TopSale = () => {
  return (
    <section className="h-96 top flex flex-col justify-center items-center gap-5">
      <p className="text-3xl lg:text-5xl text-white">
        Big Summer <span className="font-bold">Sale</span>
      </p>
      <button className="bg-transparent rounded text-white py-2 px-4 border border-white">Buy Now</button>
    </section>
  );
};

export default TopSale;
