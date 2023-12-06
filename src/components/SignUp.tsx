import Link from "next/link";
import { Icons } from "./Icons";
import UserAuthForm from "./UserAuthForm";
import Image from 'next/image';

const SignUp = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
      <Image alt='login logo' src={"/Phoenix_logo.jpg"} className="mx-auto h-6 w-6" height={66} width={66}/>
        <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
        <p className="text-sm max-w-xs mx-auto">
          本平台嚴格執行保密和個資保護
        </p>

        {/* Sign In Form */}
        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          已經註冊了嗎?{" "}
          <Link
            href="/sign-in"
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
