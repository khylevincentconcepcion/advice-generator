"use client";

import { useQuery } from "@tanstack/react-query";
import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import dice from "../assets/images/icon-dice.svg";
import Image from "next/image";
import { NextPage } from "next";
import { IAdvice, IProps } from "./types";

const getAdvice = async (): Promise<IAdvice> => {
  const res = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Advice: NextPage<IProps> = ({ advice }) => {
  const { data, refetch } = useQuery({
    queryKey: ["advice"],
    queryFn: getAdvice,
    initialData: advice,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutralDarkBlue">
      <div className="rounded-lg bg-neutralDarkGrayishBlue flex flex-col justify-center items-center p-8 pb-16 space-y-6 min-w-[95%] max-w-[95%] relative sm:min-w-[500px] sm:max-w-[500px] ">
        <h1 className="text-primaryNeonGreen text-sm">
          ADVICE #{data.slip.id}
        </h1>
        <p className="text-primaryLightCyan text-center text-[1.75rem]">
          {data.slip.advice}
        </p>
        <div className="hidden sm:block">
          <Image src={dividerDesktop} alt="pattern divider" />
        </div>
        <div className="sm:hidden">
          <Image src={dividerMobile} alt="pattern divider" />
        </div>
        <button
          className="p-4 bg-primaryNeonGreen border-primaryNeonGreen rounded-full absolute bottom-[-28px] left-[50%] translate-x-[-50%] transition-shadow hover:shadow-fullShadow hover:shadow-primaryNeonGreen"
          onClick={() => refetch()}
        >
          <Image src={dice} alt="dice" />
        </button>
      </div>
    </div>
  );
};

export default Advice;
