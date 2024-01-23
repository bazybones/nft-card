import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="p-2 md:p-0 min-h-screen flex items-center justify-center bg-[hsl(217,54%,11%)]">
      <div className="bg-[hsl(216,50%,16%)] p-5 rounded-md shadow-md md:w-[25vw]">
        <Image
          src="/images/image-equilibrium.jpg"
          alt="Card Image"
          width={700}
          height={700}
          className="rounded-md"
        />
        <div className="mt-4 text-white">Equilibrium #3429</div>
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
            <span className="ml-1 text-[#00fff7] text-xs">0.041ETH</span>
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
            <span className="ml-1 text-[#8bacda] text-xs">3 days left</span>
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
              className="border rounded-full mb-2 md:mb-0 "
            />
          </span>
          <span className="ml-4 flex items-center">
            <p className="text-[#8bacda] text-xs">Creation of</p>{" "}
            <p className="ml-1 text-white text-xs">Basil Maben</p>
          </span>
        </div>
      </div>
    </div>
  );
}
