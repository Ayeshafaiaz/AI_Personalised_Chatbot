import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, AudioLines, Plus, SendHorizontal } from "lucide-react";
import { JSX, useState } from "react";
import { SideBar } from "./SideBar";
import ChatBot from "@/assets/chatbot.svg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Chat = (): JSX.Element => {
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

  const previousChats = [
    "Norem ipsum dolor",
    "Norem ipsum dolor",
    "Norem ipsum dolor",
    "Norem ipsum dolor",
    "Norem ipsum dolor",
    "Norem ipsum dolor",
  ];

  const [question, setQuestion] = useState<string>("");

  const [chats, setChats] = useState<
    { sender: "user" | "bot"; content: string; id: number }[]
  >([
    {
      id: 1,
      content: "I feel very axious today",
      sender: "user",
    },
    {
      id: 2,
      content:
        "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      sender: "bot",
    },
  ]);

  const addNewQuestion = () => {
    setChats((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: question,
        sender: "user",
      },
      {
        id: prev.length + 2,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        sender: "bot",
      },
    ]);
    setQuestion("");
  };

  return (
    <div className="bg-[#a1a0c2] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#a1a0c2] w-full h-screen relative">
        {/* Sidebar navigation */}
        {!previousChats.length ? (
          <SideBar />
        ) : (
          <aside className="w-[289px] h-full relative">
            <Button
              variant="default"
              className="absolute w-[108px] h-[41px] top-[39px] left-[34px] bg-[#3f3d56] rounded-[34px] flex items-center justify-center gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-[26px] h-[26px]" />
              <span className="font-normal text-white text-lg">Back</span>
            </Button>

            <div
              className="absolute w-[172px] h-[41px] top-[122px] left-[45px] flex items-center"
              onClick={() => setChats([])}
            >
              <div className="p-0 bg-transparent flex items-center gap-2 cursor-pointer">
                <Plus className="w-6 h-6 text-[#efeff8]" />
                <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#efeff8] text-[22px]">
                  New Chat
                </span>
              </div>
            </div>

            <div className="absolute top-[185px] left-[26px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#efeff8] text-[22px]">
              Previous Chats
            </div>

            <Separator className="absolute w-[234px] h-0.5 top-[167px] left-[25px] bg-[#efeff8]" />

            <div className="absolute top-[235px] left-[26px] flex flex-col gap-3">
              {previousChats.map((chat, index) => (
                <div
                  key={index}
                  className="h-auto p-0 justify-start [font-family:'Inter-Regular',Helvetica] font-normal text-[#efeff8] text-sm cursor-pointer"
                >
                  {chat}
                </div>
              ))}
            </div>
          </aside>
        )}

        {/* Main content area */}
        <div
          className={`absolute h-screen top-0 ${
            previousChats.length ? "left-[250px]" : "left-[159px]"
          } bg-[#efeff8] overflow-hidden`}
          style={{
            width: previousChats.length
              ? "calc(100% - 250px)"
              : "calc(100% - 159px)",
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
                      Hi There , &lt;name&gt;
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
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end text-right"
                        : "justify-start text-left"
                    }`}
                  >
                    <Card
                      className={`border-none shadow-none ${
                        message.sender === "user"
                          ? "bg-white"
                          : "bg-transparent"
                      }`}
                    >
                      <CardContent
                        className={`p-[20px] rounded-xl ${
                          message.sender === "bot"
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
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              />
              <div
                className="bg-[#A1A0C2] p-5 rounded-full ml-[-30px] cursor-pointer"
                onClick={() => {
                  if (question) {
                    addNewQuestion();
                  }
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
