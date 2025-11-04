import { About } from "./src/components/about/about";
import { Advices } from "./src/components/advices/advices";
import { Hero } from "./src/components/hero/hero";
import { Menu } from "./src/components/menu/menu";

export default function Home() {
  return (
    <div>
      <Menu/>
      <Hero/>
      <About/>
      <h1 className="text-6xl text-center m-20">Conselhos</h1>
      <Advices/>
    </div>
  );
}
