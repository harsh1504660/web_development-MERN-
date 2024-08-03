import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState:{errors,isSubmitting},
  } = useForm();

  const delay = (d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }


  const onSubmit =async (data)=>{
    await delay(4)    // simulating delay
    console.log(data)
    if (data.username !== "harsh"){
      setError("myform",{message:"only harsh expected"})
      return 0;
    }
    if (data.username === "allah"){
      setError("block",{message:"sorry this username is blocked"})
    }
    else{
    let r = await fetch("http://localhost:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json", }, body: JSON.stringify(data)})
      let res = await r.text()
      console.log(data, res)
    }
  }
  return (

    <>
    {isSubmitting && <div>Loading...</div>}
     <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='username' {...register("username",{required:{value:true,message:"requierd"},minLength:{value:3,message:"Minimum lenght is 3"},maxLength:{value:8,message:"maximum lenght is 8"}})} type="text"  />
        {errors.username && <div className='red'>{errors.username.message}</div>}
        <br />
        <input placeholder='password' {...register("password" , {minLength:{value:8,message:"Minimum lenght"}} )} type="password"/>
        {errors.password && <div className='red'>{errors.password.message}</div>}
        <br />
        <input disabled={isSubmitting}  type="submit" value="submit" />
        {errors.myform && <div className='red'>{errors.myform.message}</div>}
        {errors.block && <div className='red'>{errors.block.message}</div>}
      </form>
     </div>
    </>
  )
}

export default App

