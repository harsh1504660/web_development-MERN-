import Image from "next/image";

export default function Home() {
  return (
  <div className="container my-5 size-80 bg-red-400">
    <Image width={700} height={700} className="mx-auto" src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" />
  </div>
  );
}
