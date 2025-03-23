import { JSX } from "react";
import LoginBanner from "../assets/loginBanner.png";
import LoginVector from "../assets/loginVector.png";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export const LoginSignUp = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={LoginBanner}
        alt="Login Banner"
        draggable="false"
      />

      <div className="absolute w-full h-full">
        <div className="flex flex-col h-full items-center justify-center gap-[70px]">
          <h1 className="font-bold text-[#3e3a63] text-[34px]">Hi There,</h1>

          <div className="max-h-[450px] max-w-[700px]">
            <img alt="Login illustration" src={LoginVector} />
          </div>

          <div className="w-full flex flex-row items-center gap-[60px] px-[15%] justify-between">
            <Button
              className="flex-1 bg-[#2F2E41] text-[#efeff8] rounded-full h-16 text-[28px] font-normal"
              onClick={() => navigate("/login")}
            >
              LOGIN
            </Button>

            <div className="font-normal text-black text-2xl">OR</div>

            <Button
              className="flex-1 bg-transparent text-black rounded-full h-16 font-normal text-[28px] border border-solid border-[#2f2e41] "
              variant="outline"
              onClick={() => navigate("/signup")}
            >
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
