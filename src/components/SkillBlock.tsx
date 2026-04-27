"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillIcons } from "@/constants/skillIcons";

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="bg-white/50 backdrop-blur-xl border border-white/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {items.map((item) => {
            const Icon = skillIcons[item];

            return (
              <div
                key={item}
                className="group flex items-center gap-2 px-3 py-2 rounded-lg 
                bg-white/70 border border-white/40 text-sm 
                hover:bg-white hover:shadow-md hover:-translate-y-[2px] 
                transition-all duration-200 cursor-default"
              >
                {Icon && (
                  <Icon
                    size={20}
                    className="text-blue-600 group-hover:scale-110 transition"
                  />
                )}

                <span className="text-gray-700">{item}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default SkillBlock;
