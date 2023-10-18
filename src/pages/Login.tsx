import { BiUser } from "react-icons/bi";

const Login = () => {
  return (
    <div className="flex justify-center">
      <div className="text-center border w-[500px]">
        <div className="m-2">
          <h1>Log in to Upwork</h1>
        </div>
        <div className="flex justify-center m-2">
          <div className="flex justify-center w-[300px] items-center border rounded-full">
            <BiUser className="mr-5" />
            <input placeholder="Username or Email" className="outline-none py-2" />
          </div>
        </div>
        <div className="m-2">
          <button className="bg-[#108A00] text-white py-2 w-[300px] rounded-full font-semibold">Continue with Email</button>
        </div>
        <div className="m-2">
          <button className="bg-[#4285f4] text-white py-2 w-[300px] rounded-full font-semibold">Continue with Google</button>
        </div>
        <div className="m-2">
          <button className="border-black border-[1px] py-2 w-[300px] rounded-full font-semibold">Continue with Apple</button>
        </div>
        <div className="m-2">
          <button className="border-2 border-green-600 text-green-600 pt-1 pb-2 w-[100px] rounded-full font-semibold">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Login;