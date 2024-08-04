import { submitaction } from "@/actions/form";
export default function Home() {


  return (
    <div className="w-2/3 mx-auto my-12">
   <form action={submitaction}>
    <div>
      <label htmlFor="name">Name</label>
    <input type="text" className="text-black mx-4" name="name"/>
    </div>
    <div>
    <label htmlFor="add">address</label>
    <input type="text" className="text-black mx-4" name="add"/>
    </div>
    <div>
      <button className="border border-white">submit</button>
    </div>
   </form>
   </div>
  );
}
