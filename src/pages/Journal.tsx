import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronRight, Plus } from "lucide-react";
import { SideBar } from "./SideBar";
import { useNavigate } from "react-router-dom";

// Journal entry data for mapping
const journalEntries = [
  {
    id: 1,
    title: "Norem ipsum dolor",
    content:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.Morem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Norem ipsum dolor",
    content:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.Morem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Norem ipsum dolor",
    content:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.Morem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "Norem ipsum dolor",
    content:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.Morem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    title: "Norem ipsum dolor",
    content:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.Morem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    title: "Norem ipsum dolor",
    content:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.Morem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    title: "Norem ipsum dolor",
    content:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.Morem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    title: "Norem ipsum dolor",
    content:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.Morem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    title: "Norem ipsum dolor",
    content:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.Morem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    title: "Norem ipsum dolor",
    content:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.Morem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const Journal = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#efeff8] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#efeff8] w-full min-h-screen relative overflow-hidden">
        {/* Purple blur effects */}
        <div className="absolute w-[367px] h-[368px] top-[-131px] right-[-150px] bg-[#a1a0c2] rounded-[183.46px/184.09px] rotate-[-13.87deg] blur-[7.75px]" />
        <div className="absolute w-[367px] h-[368px] bottom-[-131px] left-[-118px] bg-[#a1a0c2] rounded-[183.46px/184.09px] rotate-[-13.87deg] blur-[7.75px]" />

        {/* Header section */}
        <header className="relative pt-[52px] pl-[199px] mb-8">
          <div
            className="absolute top-[61px] left-[141px] cursor-pointer"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-6 w-6" />
          </div>
          <h1 className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#3e3a63] text-[32px]">
            My Journal
          </h1>
        </header>

        <SideBar />

        {/* Main content - Journal entries grid */}
        <main className="pl-[253px] pr-[253px] flex flex-col gap-11 overflow-auto pb-10">
          {/* Grid of journal entries - 3 rows of 2 columns */}
          {Array.from({ length: Math.ceil(journalEntries.length / 2) }).map(
            (_, rowIndex) => (
              <div key={rowIndex} className="flex items-center gap-11">
                {journalEntries
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((entry) => (
                    <Card
                      key={entry.id}
                      className="w-[492px] rounded-[26px] border-[#9d9cb5] overflow-hidden"
                    >
                      <CardContent className="p-0">
                        <div className="flex flex-col items-start gap-2.5 px-[27px] py-3.5">
                          <div className="flex flex-wrap items-center justify-between w-full">
                            <h2 className="w-[300px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl">
                              {entry.title}
                            </h2>
                            <ChevronRight className="w-6 h-6" />
                          </div>
                          <p className="h-[141px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-base">
                            {entry.content}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            )
          )}
        </main>

        {/* Floating action button */}
        <div
          className="fixed cursor-pointer flex w-[113px] h-[113px] bottom-[22px] right-[33px] bg-white hover:bg-white text-black rounded-full border border-solid border-[#9d9cb5] items-center justify-center hover:bg-accent hover:text-accent-foreground"
          onClick={() => navigate("create")}
        >
          <Plus width={50} height={50} />
        </div>
      </div>
    </div>
  );
};
