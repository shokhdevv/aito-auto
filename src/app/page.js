import { AnimationBtn } from "@/components";

export default function Home() {
  return (
    <div className=" ">
      <div className="h-screen bg-black py-32 flex flex-col items-center">
        <AnimationBtn text={'Узнать больше'} href={'/'}/>
      </div>
      <div className="h-screen bg-black"></div>
    </div>
  );
}
