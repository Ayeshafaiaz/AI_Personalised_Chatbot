import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, AudioLines, Plus, SendHorizontal } from "lucide-react";
import { JSX, useState } from "react";
import ChatBot from "@/assets/chatbot.svg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { useUserStore } from "@/stores/userStore";

export const Chat = (): JSX.Element => {
  const user = useUserStore((state => state.user));
  const moodCards = [
    {
      title: "Feeling Stressed?",
      suggestions: [
        "Take a deep breath! Try a quick 3-minute breathing exercise",
        "Stretch for 2 minutes to relax your muscles",
      ],
    },
    {
      title: "Feeling Sad?",
      suggestions: [
        "Let's focus on something positive! Write down one good thing about today",
        "Listen to a calming music track",
      ],
    },
    {
      title: "Feeling Anxious?",
      suggestions: [
        "Try a 5-minute deep breathing exercise",
        "Take a short walk outside",
      ],
    },
  ];


  const [inputValue, setInputValue] = useState<string>("");

  const [chats, setChats] = useState<
    { sender: "user" | "bot"; content: string; id: number }[]
  >([]);

  const akQuesion = async (question: string) => {
    setInputValue("");

    const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/ask?name=${user?.name}`, {
      text: question,
    })
    if (response?.data && response?.data?.response?.message) {
      setChats((prev) => [
        ...prev,
        {
          id: prev.length + 2,
          content: response?.data.response.message,
          sender: "bot",
        },
      ]);
    }
  }

  return (
    <div className="bg-[#a1a0c2] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#a1a0c2] w-full h-screen relative">
        {/* Sidebar navigation */}
      
          <aside className="w-[289px] h-full relative">
            <div className="absolute w-[108px] h-[41px] top-[39px] left-[34px] flex items-center gap-4" >
              <Button
                variant="default"
                className="bg-[#3f3d56] rounded-[34px] flex items-center justify-center gap-2 w-[100px]"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-[26px] h-[26px]" />
                <span className="font-normal text-white text-lg">Back</span>
              </Button>
              <Button variant="default" onClick={() => setChats([])} className="bg-primary rounded-[34px] p-3 curor-pointer"
              >
                <Plus className="w-6 h-6 text-[#efeff8]" />
              </Button>
            </div>


          </aside>


        {/* Main content area */}
        <div
          className={`absolute h-screen top-0 left-[250px] bg-[#efeff8] overflow-hidden`}
          style={{
            width:"calc(100% - 250px)"
          }}
        >
          {/* Background decorative elements */}
          <div className="top-[-159px] left-[-121px] absolute w-[367px] h-[368px] bg-[#a1a0c2] rounded-[183.46px/184.09px] rotate-[-13.87deg] blur-[7.75px]" />
          <div className="top-[786px] left-[1013px] absolute w-[367px] h-[368px] bg-[#a1a0c2] rounded-[183.46px/184.09px] rotate-[-13.87deg] blur-[7.75px]" />

          <div className="relative text-center flex flex-col items-center h-full justify-center">
            {!chats.length ? (
              <>
                <div className="flex flex-row items-center gap-6 justify-center">
                  <div>
                    <div className=" [font-family:'Inter-Bold',Helvetica] font-bold text-[#3e3a63] text-[34px]">
                      Hi There, {user?.name}
                    </div>
                    <div className=" [font-family:'Inter-Bold',Helvetica] font-bold text-[#3e3a63] text-[22px]">
                      How was your day?
                    </div>
                  </div>
                  <img
                    className="w-[87px] h-[191px]"
                    alt="Character illustration"
                    src={ChatBot}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {moodCards.map((card, index) => (
                    <Card
                      key={index}
                      className={`border border-[#9D9CB5] max-w-[265px] rounded-[26px] text-left
                    ${index === 1 ? "row-span-2 self-center" : ""}
                      `}
                    >
                      <CardContent className="p-[10px]">
                        <h3 className="font-normal text-sm mb-2">
                          {card.title}
                        </h3>
                        <ul className="space-y-3">
                          {card.suggestions.map((suggestion, idx) => (
                            <li key={idx} className="text-xs">
                              {idx + 1}. {suggestion}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex-grow space-y-6  p-10 max-h-[70vh] w-[80%] overflow-auto">
                {chats.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user"
                        ? "justify-end text-right"
                        : "justify-start text-left"
                      }`}
                  >
                    <Card
                      className={`border-none shadow-none ${message.sender === "user"
                          ? "bg-white"
                          : "bg-transparent"
                        }`}
                    >
                      <CardContent
                        className={`p-[20px] rounded-xl ${message.sender === "bot"
                            ? "border border-[#3e3a63]"
                            : ""
                          }`}
                      >
                        <p>{message.content}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            )}
            <div className="w-[75%] mt-14 h-[76px] rounded-[34px] overflow-hidden border border-solid border-[#3e3a63] flex items-center justify-center">
              <Input
                className="w-full h-full border-none bg-transparent text-center text-lg max-w-[95%]"
                placeholder="Lets Chat"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && inputValue.trim()) {
                    setChats((prev) => [
                      ...prev,
                      {
                        id: prev.length + 1,
                        content: inputValue,
                        sender: "user",
                      },
                    ]);
                    akQuesion(inputValue);
                  }
                }}
              />
              <div
                className="bg-[#A1A0C2] p-5 rounded-full ml-[-30px] cursor-pointer"
                onClick={() => {

                  setChats((prev) => [
                    ...prev,
                    {
                      id: prev.length + 1,
                      content: inputValue,
                      sender: "user",
                    },
                  ]);
                  akQuesion(inputValue)

                }}
              >
                {chats.length ? <SendHorizontal /> : <AudioLines />}
              </div>
            </div>
          </div>

          {/* Chat input */}
        </div>
      </div>
    </div>
  );
};
