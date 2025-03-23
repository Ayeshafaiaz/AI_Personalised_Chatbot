import { JSX } from "react";
import LoginBanner from "../assets/loginBanner.png";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../components/FormInput";
import { FormSelect } from "../components/FormSelect";
import { GENDER } from "../constants";
import { FormCalendar } from "../components/FormCalendar";
import { Button } from "../components/ui/button";

export const Signup = (): JSX.Element => {
  const form = useForm({
    mode: "onBlur",
  });
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
          <FormProvider {...form}>
            <div className="w-[65vw] grid grid-cols-12 gap-[40px] p-[38px] rounded-[26px] border border-solid border-[#9D9CB5] bg-transparent">
              <div className="col-span-6">
                <FormInput name="name" label="Name" placeholder="Enter Name" />
              </div>
              <div className="col-span-6">
                <FormInput
                  name="password"
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                />
              </div>
              <div className="col-span-6">
                <FormInput
                  name="email"
                  label="Email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="col-span-6">
                <FormInput
                  name="phone"
                  label="Mobile Number"
                  placeholder="Enter Mobile Number"
                  type="tel"
                />
              </div>
              <div className="col-span-6">
                <FormSelect
                  name="gender"
                  label="Gender"
                  placeholder="Select Gender"
                  options={GENDER}
                />
              </div>
              <div className="col-span-6">
                <FormCalendar
                  name="dob"
                  label="Date of Birth"
                  placeholder="Select Date of Birth"
                />
              </div>
              <div className="col-span-12 flex items-center justify-center">
                <div className="w-[50%]">
                  <Button
                    className="w-full bg-transparent text-black !rounded-full !h-14 !font-normal !text-[24px] border border-solid !border-[#2f2e41] "
                    variant="outline"
                  >
                    Signup
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
