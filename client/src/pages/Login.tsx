import { Link } from "react-router-dom";
import { Button, TextInput } from "flowbite-react";
import { BiUser, BiLogoApple } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex justify-center my-12">
      <div className="text-center border w-[500px] rounded-2xl">
        <h1 className="text-3xl font-medium m-7">Log in to Upwork</h1>
        <div className="flex justify-center mb-6">
          <TextInput id="email4" type="email" icon={BiUser} className="w-[350px]" placeholder="Username or Email" required />
        </div>
        <div className="flex justify-center">
          <Button className="w-[350px]" pill>Continue with Email</Button>
        </div>
        <div className="flex justify-center my-4">
          <div className="divider w-[350px]">or</div>
        </div>
        <div className="flex justify-center my-4">
          <Button color="blue" className="w-[350px]" pill>
            <FcGoogle className="absolute left-0 bg-white rounded-full w-10 h-10 p-2" />
            Continue with Google
          </Button>
        </div>
        <div className="flex justify-center my-4">
          <Button color="light" className="w-[350px]" pill>
            <BiLogoApple className="mr-1" />
            Continue with Apple
          </Button>
        </div>
        <div className="flex justify-center">
          <div className="divider mt-24 mb-6 w-[350px]">
            Don't have an Upwork account?
          </div>
        </div>
        <div className="flex justify-center my-6">
          <Button as={Link} to={"/signup"} color="light" pill className="w-[200px] border-2 border-green-600 text-green-600">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login;