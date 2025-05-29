import { Card, CardBody, CardFooter, Image } from "@heroui/react";


export default function CardBase() {
  const list = [
    {
      title: "Math Game",
      img: "/images/fruit-1.jpeg",
      desc: "xzx",
      url: "https://github.com/NathanJenner/CSharp-Academy_Math_Game",
    },
    {
      title: "Calculator",
      img: "/images/fruit-2.jpeg",
      desc: "xzx",
      url: "https://github.com/NathanJenner/Calculator_Console_App",
    },
    {
      title: "Habit Logger",
      img: "/images/fruit-3.jpeg",
      desc: "xzx",
      url: "",
    },
    {
      title: "Coding Tracker",
      img: "/images/fruit-4.jpeg",
      desc: "xzx",
      url: "",
    },
    {
      title: "Flashcards",
      img: "/images/fruit-5.jpeg",
      desc: "xzx",
      url: "",
    },
    {
      title: "Drinks Info API",
      img: "/images/fruit-6.jpeg",
      desc: "xzx",
      url: "",
    },
    {
      title: "Phone Book App",
      img: "/images/fruit-7.jpeg",
      desc: "xzx",
      url: "",
    },
    {
      title: "Shifts Logger",
      img: "/images/fruit-8.jpeg",
      desc: "xzx",
      url: "",
    },
    {
      title: "Exercise Tracker",
      img: "/images/fruit-5.jpeg",
      desc: "xzx",
      url: "",
    },
    {
      title: "Sports Notifier",
      img: "/images/fruit-6.jpeg",
      desc: "xzx",
      url: "",
    },
    {
      title: "Excel Reader",
      img: "/images/fruit-7.jpeg",
      desc: "xzx",
      url: "",
    },
    {
      title: "Unit Testing",
      img: "/images/fruit-8.jpeg",
      desc: "xzx",
      url: "",
    },
    {
      title: "Drink Tracker",
      img: "/images/fruit-7.jpeg",
      desc: "xzx",
      url: "",
    },
    {
      title: "Movie Catalog",
      img: "/images/fruit-8.jpeg",
      desc: "xzx",
      url: "",
    },
  ];

  return (
    <div className="gap-8 grid grid-cols-2 sm:grid-cols-4 max-w-[900px]">
      {list.map((item, index) => (
        /* eslint-disable no-console */
        <Card
          key={index}
          isPressable
          shadow="sm"
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-medium justify-center">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
