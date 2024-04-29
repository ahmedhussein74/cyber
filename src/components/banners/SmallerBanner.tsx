import playstation from '../../images/playstation.svg'
import headphone from '../../images/headphone.svg'
import camerVar from '../../images/var.svg'
import macbook from '../../images/macbook.png'

const SmallerBanner = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden">
          <img src={playstation} className="" />
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <h2 className="text-4xl">Playstation 5</h2>
            <p className="text-center md:text-start">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-3 grid grid-cols-1 md:grid-cols-2 items-center bg-[#EDEDED]">
            <img src={headphone} className="mx-auto md:mx-0" />
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <h2 className="text-3xl">Apple AirPods Max</h2>
              <p className="text-center md:text-start">
                Computational audio. Listen, it's powerful
              </p>
            </div>
          </div>
          <div className="p-3 grid grid-cols-1 md:grid-cols-2 items-center text-white bg-[#353535]">
            <img src={camerVar} className="mx-auto md:mx-0" />
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <h2 className="text-3xl">Apple Vision Pro</h2>
              <p className="text-center md:text-start">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 flex flex-col items-center justify-around bg-[#D2D2DA] overflow-hidden">
        <img src={macbook} className="" />
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl lg:text-5xl">
            Macbook <span className="font-bold">Air</span>
          </h1>
          <p className="max-w-[450px] text-center">
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <button className="w-48 h-14 bg-transparent border border-[#383838] text-[#383838] rounded-lg hover:text-white hover:bg-[#383838]">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default SmallerBanner