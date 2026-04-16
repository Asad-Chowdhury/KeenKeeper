import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Friends from "./components/Friends/Friends";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Friends></Friends>
    </div>
  );
}
