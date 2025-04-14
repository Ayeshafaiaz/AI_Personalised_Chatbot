import { JSX, useState } from "react";
import LoginBanner from "../assets/loginBanner.png";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../components/FormInput";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserStore } from "@/stores/userStore";

export const Login = (): JSX.Element => {
  const userStore = useUserStore((state) => state);
  const [error, setError] = useState<string|null>(null);
  const navigate = useNavigate();
  const form = useForm({
    mode: "onBlur",
  });
    const {getValues} = form
  
    const signin = async () => {
      const values = getValues()
        const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/users/login`,{
         username: values.name,
          password: values.password,
          phone: values.phone,
        });
        if(response.status === 200){
          userStore.setUser(response.data.user)
          userStore.setAccessToken(response.data.access_token)
          setTimeout(() => {
            navigate("/dashboard")
          },500)
        } else {
          setError("Invalid credentials")
        }

    };

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
          <h1 className="font-bold text-[#3e3a63] text-[34px]">Welcome back</h1>
          <FormProvider {...form}>
            <div className="w-[65vw] grid grid-cols-12 gap-[40px] p-[38px] rounded-[26px] border border-solid border-[#9D9CB5] bg-transparent">
              <div className="col-span-12">
                <FormInput name="name" label="Name" placeholder="Enter Name" />
              </div>
              <div className="col-span-12">
                <FormInput
                  name="password"
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                />
              </div>
              <div className="col-span-12">
                <FormInput
                  name="phone"
                  label="Mobile Number"
                  placeholder="Enter Mobile Number"
                  type="tel"
                />
              </div>
              {error && (
                <div className="col-span-12 text-red-500 text-center">
                  {error}
                </div>
              )}
              <div className="col-span-12 flex items-center justify-center">
                <div className="w-[50%]">
                  <Button
                    className="w-full bg-transparent text-black !rounded-full !h-14 !font-normal !text-[24px] border border-solid !border-[#2f2e41] "
                    variant="outline"
                    onClick={signin}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};
