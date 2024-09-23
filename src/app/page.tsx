import Hero from "./components/hero";
import HotMerch from "./components/Home/hotMerch";
import NextEvent from "./components/nextEvent";

export default function Home() {
  return (
    <div>
      <Hero/>
      <NextEvent/>
      <HotMerch/>
    </div>
  );
}
