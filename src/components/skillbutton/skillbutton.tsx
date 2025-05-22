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
  ];
  return (
    <div className="flex gap-4 items-center">
      {list.map((item, index) => (
        <Button key={index} />
      ))}
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}
