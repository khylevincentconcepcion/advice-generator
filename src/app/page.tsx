import Advice from "./advice";
import { IAdvice } from "./types";

const getAdvice = async (): Promise<IAdvice> => {
  const res = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const HomePage = async () => {
  const initialData = await getAdvice();

  return <Advice advice={initialData} />;
};

export default HomePage;
