import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { JSX, useState } from "react";
import SittingIllustration from "@/assets/sittingIllustration.svg";
import HappyEmoji from "@/assets/happy.svg";
import HappiestEmoji from "@/assets/happiest.svg";
import NeutralEmoji from "@/assets/neutral.svg";
import SadEmoji from "@/assets/sad.svg";
import SaddestEoji from "@/assets/saddest.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/stores/userStore";

export const JournalCreate = (): JSX.Element => {
  const user = useUserStore((state) => state.user);
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [journalContent,setJournalContent] = useState<string>("");
  const navigate = useNavigate()

  const moodOptions = [
    { id: 1, emoji: SaddestEoji, alt: "Sad face", type: "SADDEST" },
    { id: 2, emoji: SadEmoji, alt: "Neutral face", type: "SAD" },
    { id: 3, emoji: NeutralEmoji, alt: "Slightly happy face", type: "NEUTRAL" },
    { id: 4, emoji: HappyEmoji, alt: "Happy face", type: "HAPPY" },
    { id: 5, emoji: HappiestEmoji, alt: "Very happy face", type: "HAPPIEST" },
  ];

    const createJournal = async () => {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/journal`,{
        title: new Date().toLocaleDateString(),
        content: journalContent,
        mood: moodOptions.find((mood) => mood.id === selectedMood)?.type,
        user_id: user?.id,
        date: new Date().toISOString().split("T")[0],
      });
      if(response.status === 200)
        navigate("/journal")
    };

  const today = new Date()
  const day = today.toLocaleDateString("en-US", { weekday: "long" });
  const date = today.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  return (
    <div className="bg-[#efeff8] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#efeff8] w-full max-w-[1440px] h-[1024px] relative">
        <div className="relative w-full max-w-[1223px] h-[933px] mx-auto mt-[66px]">
          {/* Back button */}
          <div
            className="absolute top-[21px] left-0 p-0 h-auto cursor-pointer"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-6 w-6" />
          </div>

          {/* Header */}
          <div className="flex flex-col w-[142px] items-center gap-2 absolute top-0 left-12">
            <h1 className="relative self-stretch mt-[-1.00px] font-bold text-black text-[32px] tracking-[0] leading-normal">
              {day }
            </h1>
            <p className="relative self-stretch font-normal text-black text-base text-center tracking-[0] leading-normal">
              {date}
            </p>
          </div>

          {/* Illustration */}
          <div className="absolute w-48 h-[165px] top-0 right-0 z-10">
            <img
              src={SittingIllustration}
              alt="Person with laptop illustration"
              width={192}
              height={165}
            />
          </div>

          {/* Main content area */}
          <div className="absolute w-full h-[888px] top-[45px] left-0">
            {/* Journal card */}
            <Card className="absolute bg-white w-full h-[645px] top-[100px] left-0 rounded-[26px] overflow-hidden border-none">
              <CardContent className="p-0">
                {/* Journal text area */}
                <div className="p-[45px] pb-0">
                  <Textarea
                    defaultValue={journalContent}
                    onChange={(e) => setJournalContent(e.target.value)}
                    className="w-full h-[350px] resize-none border-none p-0 focus-visible:ring-0 text-base font-normal"
                  />

                  {/* Save button */}
                  <div className="flex justify-end mt-6">
                    <Button className="w-[157px] h-[50px] bg-[#3f3d56] text-white rounded-[26px] hover:bg-[#2e2c40]"
                      onClick={createJournal}
                    >
                      Save
                    </Button>
                  </div>
                </div>

                {/* Mood selector */}
                <div className="mx-[57px] mt-[20px] p-4 rounded-[26px] border-2 border-solid border-[#efeff8] flex items-center">
                  <span className="font-bold text-black text-base mr-auto">
                    Mood
                  </span>

                  <div className="flex gap-8">
                    {moodOptions.map((mood) => (
                      <div
                        className={
                          selectedMood === mood.id
                            ? "bg-accent rounded-full"
                            : "opacity-50"
                        }
                      >
                        <img
                          key={mood.id}
                          src={mood.emoji}
                          alt={mood.alt}
                          width={40}
                          height={40}
                          className={`w-12 h-12 cursor-pointer`}
                          onClick={() => setSelectedMood(mood.id)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
