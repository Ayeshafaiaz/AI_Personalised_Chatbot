import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle } from "lucide-react";
import { JSX, useState } from "react";
import MenIllustration from "@/assets/menIllustration.svg";
import FemaleIllustration from "@/assets/womenIllustration.svg";
import SittingIllustration from "@/assets/sittingIllustration.svg";
import MeditationIllustration from "@/assets/medidationIllustration.svg";
import WalkingIllustration from "@/assets/walkingIllustration.svg";
import { SideBar } from "./SideBar";

export const Dashboard = (): JSX.Element => {
  // Data for goals
  const [goals, setGoals] = useState([
    { id: 1, text: "Try a 5-minute guided meditation", completed: true },
    { id: 2, text: "Do a 3-minute deep breathing session", completed: true },
    {
      id: 3,
      text: "Identify 1 positive thing that happened today",
      completed: false,
    },
    {
      id: 4,
      text: "Close your eyes & take 10 slow, mindful breaths",
      completed: false,
    },
    {
      id: 5,
      text: "Do the 4-7-8 breathing technique (Inhale 4s, hold 7s, exhale 8s)",
      completed: false,
    },
  ]);

  // Data for mood board
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const moodTypes = [
    { name: "Neutral", color: "#8979ff" },
    { name: "Calm", color: "#ff928a" },
    { name: "Stressed", color: "#3bc3de" },
    { name: "Anxious", color: "#ffae4c" },
  ];

  // Data for daily exercises
  const exercises = [
    { name: "Meditation", image: MeditationIllustration },
    { name: "Journalling", image: MeditationIllustration },
    { name: "Walking", image: WalkingIllustration },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] h-[1024px] relative">
        {/* Sidebar Navigation */}
        <SideBar />

        {/* Dashboard Title */}
        <h1 className="absolute top-[52px] left-[199px] font-bold text-[#3e3a63] text-[32px] tracking-[0] leading-normal font-sans">
          DASHBOARD
        </h1>

        {/* Welcome Banner */}
        <div className="absolute w-[1056px] h-[228px] top-[114px] left-[222px] bg-[#efeff8] rounded-[27px] overflow-hidden">
          <div className="flex flex-col w-[300px] items-center justify-center gap-[13px] absolute top-[68px] left-[370px]">
            <div className="relative self-stretch mt-[-1.00px] font-normal text-black text-2xl text-center tracking-[0] leading-normal">
              Welcome &lt;name&gt;
            </div>
            <div className="relative self-stretch font-normal text-black text-base text-center tracking-[0] leading-normal">
              Hi&nbsp;&nbsp;this is your personalized AI therapist
            </div>
            <div className="relative self-stretch font-normal text-black text-base text-center tracking-[0] leading-normal">
              How can I help you today!!
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute w-24 h-24 top-[-13px] left-[-26px] bg-[#a1a0c2] rounded-[47.91px/47.75px] rotate-[-13.87deg] blur-[2px]" />
          <div className="absolute w-[106px] h-[106px] top-[100px] left-[976px] bg-[#a1a0c2] rounded-[52.83px/53.01px] rotate-[-13.87deg] blur-[2px]" />

          {/* Illustration placeholders */}
          <div className="absolute w-[104px] h-[158px] top-[35px] left-[822px]">
            <img
              src={FemaleIllustration}
              alt="Illustration"
              className="w-full h-full"
            />
          </div>
          <div className="absolute w-[104px] h-[158px] top-9 left-[150px]">
            <img
              src={MenIllustration}
              alt="Illustration"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Goals Card */}
        <div className="absolute w-[424px] h-[454px] top-[342px] left-[220px]">
          <div className="absolute w-[105px] h-[90px] top-0 left-[319px]">
            <img
              src={SittingIllustration}
              alt="Decoration"
              className="w-full h-full"
            />
          </div>

          <Card className="absolute w-[424px] h-[385px] top-[69px] left-0 bg-[#f8f7fc] rounded-[28px] border-[#9d9cb5]">
            <CardHeader className="pt-10 pb-0 px-[30px]">
              <CardTitle className="text-2xl font-normal text-black">
                Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 px-[30px] overflow-auto pb-3">
              <ul className="space-y-4">
                {goals.map((goal, i) => (
                  <li
                    key={goal.id}
                    className="flex justify-between items-center"
                  >
                    <span className="font-normal text-black text-base max-w-[300px]">
                      {i + 1}. {goal.text}
                    </span>
                    {goal.completed ? (
                      <CheckCircle
                        className="w-7 h-[23px] text-green-500 cursor-pointer"
                        onClick={() => {
                          setGoals((prevGoals) =>
                            prevGoals.map((goal, index) =>
                              index === i
                                ? { ...goal, completed: !goal.completed }
                                : goal
                            )
                          );
                        }}
                      />
                    ) : (
                      <Circle
                        className="w-7 h-[25px] text-gray-300 cursor-pointer"
                        onClick={() => {
                          setGoals((prevGoals) =>
                            prevGoals.map((goal, index) =>
                              index === i
                                ? { ...goal, completed: !goal.completed }
                                : goal
                            )
                          );
                        }}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Mood Board Card */}
        <Card className="absolute w-[607px] h-64 top-[378px] left-[671px] bg-[#f8f7fc] rounded-[26px] border-[#9d9cb5]">
          <CardHeader className="pt-7 pb-0 px-[33px]">
            <CardTitle className="text-2xl font-normal text-black">
              Mood Board
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-2 px-[33px]">
            <div className="relative w-full h-[162px]">
              {/* Chart container */}
              <div className="flex w-full h-[116px]">
                {/* Y-axis labels */}
                <div className="flex flex-col items-end justify-between px-1 py-0">
                  {[100, 80, 60, 40, 20, 0].map((value) => (
                    <div key={value} className="text-[#000000b2] text-xs">
                      {value}
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="flex-1 relative border border-gray-200 border-opacity-20 rounded">
                  {/* Chart grid lines would be here */}
                  {/* Chart lines would be here */}
                </div>
              </div>

              {/* X-axis labels */}
              <div className="flex justify-between mt-2 px-[29px]">
                {days.map((day) => (
                  <div
                    key={day}
                    className="text-[#000000b2] text-xs text-center"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
                {moodTypes.map((mood) => (
                  <div
                    key={mood.name}
                    className="inline-flex items-center gap-1 p-1"
                  >
                    <div className="relative w-4 h-4">
                      <div
                        className="relative h-0.5 top-[7px]"
                        style={{ backgroundColor: mood.color }}
                      >
                        <div className="relative top-px left-2 w-px h-px">
                          <div
                            className="relative w-2 h-2 -top-1 -left-1 bg-white rounded border border-solid"
                            style={{ borderColor: mood.color }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-[#000000b2] text-xs">{mood.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Exercises Card */}
        <Card className="absolute w-[583px] h-72 top-[670px] left-[695px] bg-[#f8f7fc] rounded-[26px] border-[#9d9cb5]">
          <CardHeader className="pt-[31px] pb-0 px-[41px]">
            <CardTitle className="text-2xl font-normal text-black">
              Daily Exercises
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 px-[41px]">
            <div className="flex justify-between">
              {exercises.map((exercise, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-[154px] h-[145px] rounded-[26px] border border-solid border-[#6c63ffcc] flex items-center justify-center">
                    <img
                      src={exercise.image}
                      alt={exercise.name}
                      className="w-[70%] h-[70%] object-contain"
                    />
                  </div>
                  <div className="mt-2 text-base font-normal text-black text-center">
                    {exercise.name}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mood Tracker Card */}
        <Card className="absolute w-[466px] h-[135px] top-[823px] left-[199px] bg-[#f8f7fc] rounded-[26px] border-[#9d9cb5]">
          <CardHeader className="pt-4 pb-0 px-[34px]">
            <CardTitle className="text-2xl font-normal text-black">
              Mood tracker
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 px-[34px]">
            <Progress value={60} className="h-4 bg-[#efeff8]" />
            <div className="mt-4 text-base font-normal text-[#5f5c8b]">
              Todays mood : Sad
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
