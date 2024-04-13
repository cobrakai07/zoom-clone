"use client";
import Image from "next/image";
import { useRouter } from "next/router";

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  className: string;
  handleClick?: () => void;
}
const HomeCard = ({
  img,
  title,
  description,
  className,
  handleClick 
}: HomeCardProps) => {
   
  return (
    <div
      className={`${className} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image
          src={`${img}`}
          alt="meeting"
          width={27}
          height={27}
          onClick={handleClick}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
