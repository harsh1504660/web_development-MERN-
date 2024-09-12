import Image from "next/image";

export default function Home() {
  return (
    <>
   <div className="flex justify-center items-center gap-4 flex-col text-white h-[44vh]">
<div className="font-bold text-5xl flex gap-2 justify-center item-center">
  Buy me a chai <span><img src="/images/tea.gif" width={70} alt="" /></span>
  </div>
    <p>
      A crowdfunding pltaform for creators. Get funding by your fans and followers
    </p>
    <div>
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
  </div>
</div>
<div className="bg-white h-1 opacity-10">
  sd
</div>


<div className="text-white container mx-auto">
  <h1 className="text-3xl font-bold text-center my-10">
    Your fans can buy you a chai
    </h1>
    <div className="flex gap-5 justify-around">
 <div className="item space-y-3 flex flex-col items-center justify-center">
        <img className=" bg-slate-400 rounded-full p-4" width={130} src="/images/man.png" alt="" />
        <p className="font-bold">Fund Yourself</p>
        <p className=" text-center">Your fans are available for you to help</p>
      </div>
      <div className="item space-y-3 flex flex-col items-center justify-center">
        <img className=" bg-slate-400 rounded-full p-4" width={110} src="/images/coin.jpg" alt="" />
        <p className="font-bold">Fund Yourself</p>
        <p className=" text-center">Your fans are available for you to help</p>
      </div>
      <div className="item space-y-3 flex flex-col items-center justify-center">
        <img className=" bg-slate-400 rounded-full p-4" width={110} src="/images/group.gif" alt="" />
        <p className="font-bold">Fund Yourself</p>
      <p className=" text-center">Your fans are available for you to help</p>
      </div>
    </div>
</div>

<br />
<div className="bg-white h-1 opacity-10">
  sd
</div>


<div className="text-white container mx-auto pb-32 pt-34 flex flex-col items-center justify-center">
  <h1 className="text-3xl font-bold text-center my-10">
    Learn more about us 
    </h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Tb1CLQuJOsE?si=KACkBjjvAsQTSK-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</>
  );
}
