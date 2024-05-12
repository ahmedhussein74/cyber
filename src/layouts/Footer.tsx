const Footer = () => {
  return (
    <footer className="px-[5%] py-8 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-5">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-2xl">cyber</span>
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-2xl">Services</span>
          <a href="" className="text-gray-500">
            Bonus Program
          </a>
          <a href="" className="text-gray-500">
            Gift Cards
          </a>
          <a href="" className="text-gray-500">
            Credit and payment
          </a>
          <a href="" className="text-gray-500">
            Service contracts
          </a>
          <a href="" className="text-gray-500">
            Non-cash accounts
          </a>
          <a href="" className="text-gray-500">
            Payment
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-2xl">Assistance to the buyer</span>
          <a href="" className="text-gray-500">
            Find an order
          </a>
          <a href="" className="text-gray-500">
            Terms of delivery
          </a>
          <a href="" className="text-gray-500">
            Exchange and return of goods
          </a>
          <a href="" className="text-gray-500">
            Guarantee
          </a>
          <a href="" className="text-gray-500">
            Frequently asked questions
          </a>
          <a href="" className="text-gray-500">
            Terms of use of the site
          </a>
        </div>
      </div>
      <div className="flex items-center gap-5 text-2xl mt-5">
        <a href="">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-facebook-f"></i>{" "}
        </a>
        <a href="">
          <i className="fa-brands fa-tiktok"></i>{" "}
        </a>
        <a href="">
          <i className="fa-brands fa-instagram"></i>{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
