import Analytics from "@/components/Analytics";
import Hero from "@/components/Hero";
import Supported from "@/components/Supported";
import Filler from "@/components/Filler";
import TryAi from "@/components/TryAi";


export default function Home() {
  return (
    <>
      <Hero />
      <Supported />
      <Analytics />
      <Filler /> 
      <TryAi />
    </>
  );
}
