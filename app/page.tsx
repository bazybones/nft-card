import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="p-2 md:p-0 min-h-screen flex items-center justify-center bg-[hsl(217,54%,11%)]">
      <div className="hover:cursor-pointer hover:scale-105 transition-all bg-[hsl(216,50%,16%)] p-5 rounded-md shadow-md md:w-[25vw]">
        <div className={`${styles.imageContainer} relative`}>
          <Image
            src="/images/image-equilibrium.jpg"
            alt="Card Image"
            width={700}
            height={700}
            className={`${styles.image_hover} transition-all rounded-md`}
          />
          <div
            className={`${styles.overlay} top-0 absolute flex items-center justify-center w-full h-full transition-all`}
          >
            <Image
              src="/images/icon-view.svg"
              alt="Preview Image"
              width={35}
              height={35}
              className={`transition-all`}
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-white hover:text-[#00fff7] transition-all hover:scale-[1.02] text-xl">
            Equilibrium #3429
          </p>
        </div>
        <div className="mt-4 text-[rgba(255,255,255,0.4)] font-extralight text-md">
          Our Equilibrium collection promotes balance and calm.
        </div>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="flex items-center">
            <span>
              <Image
                src="/images/icon-ethereum.svg"
                width={10}
                height={10}
                alt="eth-icon"
              />
            </span>
            <span className="ml-1 text-[#00fff7] text-md">0.041ETH</span>
          </div>
          <div className="flex ml-auto items-center mt-2 md:mt-0">
            <span>
              <Image
                src="/images/icon-clock.svg"
                width={20}
                height={20}
                alt="eth-icon"
              />
            </span>
            <span className="ml-1 text-[#8bacda] text-md">3 days left</span>
          </div>
        </div>
        <hr className="mt-3 mb-3 border-t border-[#2f415b]" />
        <div className="flex items-center ml-auto">
          <span>
            <Image
              src="/images/image-avatar.png"
              width={40}
              height={40}
              alt="eth-icon"
              className="flex items-center justify-center border rounded-full mb-2 md:mb-0 "
            />
          </span>
          <span className="ml-4 flex items-center">
            <p className="text-[#8bacda] text-md">Creation of</p>{" "}
            <p className="ml-1 hover:ml-[0.375rem] text-white text-md hover:text-[#00fff7] hover:scale-[1.05] transition-all">
              Basil Maben
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
