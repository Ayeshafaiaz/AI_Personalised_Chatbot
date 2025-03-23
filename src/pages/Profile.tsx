import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";
import { SideBar } from "./SideBar";
import { FormInput } from "@/components/FormInput";
import { FormProvider, useForm } from "react-hook-form";
import { FormCalendar } from "@/components/FormCalendar";
import { FormSelect } from "@/components/FormSelect";
import { GENDER } from "@/constants";
import FemaleAvatar from "@/assets/femaleAvatar.png";
import FormSwitch from "@/components/FormSwitch";

export const Profile = (): JSX.Element => {
  const form = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "Kierra05@gmail.com",
      mobile: "1234567890",
      gender: "FEMALE",
      dob: "2000-01-01",
      panicButton: true,
    },
  });
  // User information data
  const userInfo = [
    {
      label: "Email Address",
      name: "email",
      value: "Kierra05@gmail.com",
      type: "text",
    },
    { label: "Mobile Number", name: "mobile", type: "text" },
    { label: "Gender", name: "gander", type: "select" },
    { label: "Date of Birth", name: "dob", type: "date" },
  ];

  // Features data
  const featuresData = {
    quote:
      "You are stronger than you think, braver than you feel, and capable of more than you know. Keep going!",
    helplines: [
      "Vandrevala Foundation – Call 1860 266 2345",
      "Snehi – Call +91 9582208181",
    ],
  };

  return (
    <div className="bg-[#efeff8] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#efeff8] w-full max-w-[1340px] relative py-[117px] h-fit">
        {/* Side Navigation */}
        <SideBar />
        <FormProvider {...form}>
          {/* Profile Section */}
          <div
            className="relative w-full h-[1250px] left-[159px]"
            style={{
              width: "calc(100% - 200px)",
            }}
          >
            {/* Profile Avatar */}
            <div className="relative flex justify-center z-10">
              <div className="w-[241px] h-[241px] bg-white rounded-[120.5px] flex items-center justify-center">
                <div className="w-[204px] h-[204px] bg-[#a1a0c2] rounded-[102px] flex items-center justify-center">
                  <Avatar className="w-[204px] h-[204px] p-10">
                    <AvatarImage
                      src={FemaleAvatar}
                      alt="Profile"
                      width={100}
                      height={120}
                    />
                    <AvatarFallback className="bg-[#a1a0c2] text-white text-4xl">
                      K
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>

            {/* Main Content Card */}
            <Card className="w-full rounded-[26px] overflow-hidden absolute top-[120px] h-fit">
              <CardContent className="p-0 bg-white">
                {/* Language Selector */}

                {/* User Name */}
                <div className="flex flex-col items-center mt-[106px] mb-12">
                  <h1 className="font-bold text-[32px] text-black [font-family:'Inter-Bold',Helvetica]">
                    Kierra
                  </h1>
                </div>

                {/* Your Info Section */}
                <div className="px-[93px] mb-8">
                  <h2 className="text-lg font-normal text-black mb-3.5 [font-family:'Inter-Regular',Helvetica]">
                    Your Info
                  </h2>
                  <Card className="bg-[#f8f7fc] border border-solid border-[#9d9cb5] rounded-[26px]">
                    <CardContent className="px-[40px] py-[39px]">
                      <div className="grid grid-cols-2 gap-6">
                        {userInfo.map((item, index) =>
                          item.type === "text" ? (
                            <FormInput
                              key={index}
                              name={item.name}
                              label={item.label}
                              disabled
                            />
                          ) : item.type === "date" ? (
                            <FormCalendar
                              key={index}
                              name={item.name}
                              label={item.label}
                              disabled
                            />
                          ) : (
                            <FormSelect
                              name={item.name}
                              options={GENDER}
                              label={item.label}
                              disabled
                            />
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Our Features Section */}
                <div className="px-[93px] mb-8">
                  <h2 className="text-lg font-normal text-black mb-3.5 [font-family:'Inter-Regular',Helvetica]">
                    Our Features
                  </h2>
                  <Card className="bg-[#f8f7fc] border border-solid border-[#9d9cb5] rounded-[26px]">
                    <CardContent className="px-[40px] py-[39px] flex flex-col gap-6">
                      {/* Quote */}
                      <div className="flex flex-col gap-[7px] w-full">
                        <label className="text-base font-normal text-black [font-family:'Inter-Regular',Helvetica]">
                          Quote for Today
                        </label>
                        <div className="flex items-center px-[26px] py-[21px] bg-white border-2 border-solid border-[#efeff8] rounded-full">
                          <p className="text-base font-normal text-black [font-family:'Inter-Regular',Helvetica]">
                            {featuresData.quote}
                          </p>
                        </div>
                      </div>

                      {/* Helpline and Panic Button */}
                      <div className="grid grid-cols-2 gap-11">
                        {/* Helpline Numbers */}
                        <div className="flex flex-col gap-[7px]">
                          <label className="text-base font-normal text-black [font-family:'Inter-Regular',Helvetica]">
                            Helpline Numbers
                          </label>
                          <div className="h-24 px-[26px] py-[21px] bg-white border-2 border-solid border-[#efeff8] rounded-[26px] flex flex-col justify-center gap-2">
                            {featuresData.helplines.map((helpline, index) => (
                              <p
                                key={index}
                                className="text-base font-normal text-black [font-family:'Inter-Regular',Helvetica]"
                              >
                                {helpline}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Panic Button */}
                        <div className="flex flex-col gap-[7px]">
                          <label className="text-base font-normal text-black [font-family:'Inter-Regular',Helvetica]">
                            Panic Button
                          </label>
                          <div className="px-[28px] py-[21px] bg-white border-2 border-solid border-[#efeff8] rounded-[26px]">
                            <div className="flex items-center justify-between">
                              <span className="text-base font-normal text-black [font-family:'Inter-Regular',Helvetica]">
                                Instant Support for Urgent Moments
                              </span>
                              <FormSwitch name="panicButton" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Account Information Section */}
                <div className="px-[89px] mb-8">
                  <h2 className="text-lg font-normal text-black mb-3.5 [font-family:'Inter-Regular',Helvetica]">
                    Account Information
                  </h2>
                  <Card className="bg-[#f8f7fc] border border-solid border-[#9d9cb5] rounded-[26px] h-[187px] flex items-center justify-center">
                    <CardContent className="flex gap-[44px] items-center justify-center w-full">
                      <Button
                        variant="outline"
                        className="w-[296px] h-[60px] px-[26px] py-[21px] bg-white rounded-[26px] border-2 border-solid border-[#efeff8] text-base font-normal text-black"
                      >
                        Sign Out
                      </Button>
                      <Button
                        variant="outline"
                        className="w-[296px] h-[60px] px-[26px] py-[21px] bg-white rounded-[26px] border-2 border-solid border-[#efeff8] text-base font-normal text-black"
                      >
                        Delete Account
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};
