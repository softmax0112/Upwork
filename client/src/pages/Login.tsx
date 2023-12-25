import { BiUser } from "react-icons/bi";
import { BiLogoApple } from "react-icons/bi";

const Login = () => {
  return (
    <div className="flex justify-center my-12">
      <div className="text-center border w-[500px] rounded-2xl">
        <div className="m-7">
          <h1 className="text-3xl font-medium">Log in to Upwork</h1>
        </div>
        <div className="flex justify-center mb-6">
          <div className="flex w-[350px] items-center border rounded-lg">
            <BiUser className="mx-4 text-xl" />
            <input placeholder="Username or Email" className="outline-none py-2 text-sm w-full rounded-lg" />
          </div>
        </div>
        <div>
          <button className="bg-[#108A00] text-white py-2 w-[350px] rounded-full font-semibold">Continue with Email</button>
        </div>
        <div className="flex justify-center my-4">
          <div className="divider w-[350px]">or</div>
        </div>
        <div>
          <button className="bg-[#4285f4] text-white py-2 w-[350px] rounded-full font-semibold">Continue with Google</button>
        </div>
        <div className="flex justify-center mt-6">
          <button className="flex justify-center items-center border-black border-[1px] py-2 w-[350px] rounded-full font-semibold">
            <BiLogoApple className="mr-1" />
            Continue with Apple
          </button>
        </div>
        <div className="flex justify-center">
          <div className="divider mt-24 mb-6 w-[350px]">
            Don't have an Upwork account?
          </div>
        </div>
        <div className="mt-6 mb-6">
          <button className="border-2 border-green-600 text-green-600 pt-1 pb-2 w-[200px] rounded-full font-semibold">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Login;