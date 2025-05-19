import { Card, CardBody, CardFooter, Image } from "@heroui/react";

export default function CardBase() {
  const list = [
    {
      title: "Math Game",
      img: "/images/fruit-1.jpeg",
      desc: "xzx",
    },
    {
      title: "Calculator",
      img: "/images/fruit-2.jpeg",
      desc: "xzx",
    },
    {
      title: "Habit Logger",
      img: "/images/fruit-3.jpeg",
      desc: "xzx",
    },
    {
      title: "Coding Tracker",
      img: "/images/fruit-4.jpeg",
      desc: "xzx",
    },
    {
      title: "Flashcards",
      img: "/images/fruit-5.jpeg",
      desc: "xzx",
    },
    {
      title: "Drinks Info API",
      img: "/images/fruit-6.jpeg",
      desc: "xzx",
    },
    {
      title: "Phone Book App",
      img: "/images/fruit-7.jpeg",
      desc: "xzx",
    },
    {
      title: "Shifts Logger",
      img: "/images/fruit-8.jpeg",
      desc: "xzx",
    },
    {
      title: "Exercise Tracker",
      img: "/images/fruit-5.jpeg",
      desc: "xzx",
    },
    {
      title: "Sports Notifier",
      img: "/images/fruit-6.jpeg",
      desc: "xzx",
    },
    {
      title: "Excel Reader",
      img: "/images/fruit-7.jpeg",
      desc: "xzx",
    },
    {
      title: "Unit Testing",
      img: "/images/fruit-8.jpeg",
      desc: "xzx",
    },
    {
      title: "Drink Tracker",
      img: "/images/fruit-7.jpeg",
      desc: "xzx",
    },
    {
      title: "Movie Catalog",
      img: "/images/fruit-8.jpeg",
      desc: "xzx",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
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
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.desc}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
