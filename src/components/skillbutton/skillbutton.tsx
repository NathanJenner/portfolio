import { Button } from "@heroui/react";

export default function SkillButton() {
  const list = [
    { label: "C#" },
    { label: "TypeScript" },
    { label: ".NET" },
    { label: "JavaScript" },
    { label: "React" },
    { label: "GitHub" },
    { label: "SDLC" },
    { label: "SQL" },
    { label: "Node.js" },
  ];

  return (
    <div className="flex gap-4 items-center">
      {list.map((item, index) => (
        <Button key={index} disabled>{item.label}</Button>
      ))}
    </div>
  );
}
