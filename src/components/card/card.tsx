import { Card, CardBody, CardFooter, Image } from "@heroui/react";


export default function CardBase() {
  const list = [
    {
      title: "Math Game",
      img: "01.png",
      desc: "xzx",
      url: "https://github.com/NathanJenner/CSharp-Academy_Math_Game",
    },
    {
      title: "Calculator",
      img: "02.png",
      desc: "xzx",
      url: "https://github.com/NathanJenner/Calculator_Console_App",
    },
    {
      title: "Habit Logger",
      img: "03.png",
      desc: "xzx",
      url: "https://github.com/NathanJenner/Habit_Logger_Application",
    },
    {
      title: "Coding Tracker",
      img: "04.png",
      desc: "xzx",
      url: "https://github.com/NathanJenner/Coding_Tracking_App",
    },
    {
      title: "Flashcards",
      img: "05.png",
      desc: "xzx",
      url: "https://github.com/NathanJenner/Flashcard_Application",
    },
    {
      title: "Drinks Info API",
      img: "06.png",
      desc: "xzx",
      url: "https://github.com/NathanJenner/Drinks_Info_Application",
    },
    {
      title: "Phone Book App",
      img: "07.png",
      desc: "xzx",
      url: "https://github.com/NathanJenner/Console.Phonebook.App",
    },
    {
      title: "Shifts Logger",
      img: "08.png",
      desc: "xzx",
      url: "https://github.com/NathanJenner/ShiftsLogger.NathanJenner",
    },
    {
      title: "Exercise Tracker",
      img: "09.png",
      desc: "xzx",
      url: "https://github.com/NathanJenner/ExerciseTracker.NathanJenner",
    },
    {
      title: "Sports Notifier",
      img: "10.png",
      desc: "xzx",
      url: "https://github.com/NathanJenner/Sports.Results.Notifier.NathanJenner",
    },
    {
      title: "Excel Reader",
      img: "11.png",
      desc: "xzx",
      url: "https://github.com/NathanJenner/ExcelReader.NathanJenner",
    },
    {
      title: "Unit Testing",
      img: "12.png",
      desc: "xzx",
      url: "https://github.com/NathanJenner/UnitTests.NathanJenner",
    },
    {
      title: "Drink Tracker",
      img: "13.png",
      desc: "xzx",
      url: "https://github.com/NathanJenner/WaterLogger.NathanJenner",
    },
    {
      title: "Movie Catalogue",
      img: "14.png",
      desc: "xzx",
      url: "https://github.com/NathanJenner/MVC.Movies.NathanJenner",
    },
  ];

  return (
    <div className="gap-8 grid grid-cols-2 sm:grid-cols-4 max-w-[900px]">
      {list.map((item, index) => (
        /* eslint-disable no-console */
        <Card key={index} isPressable shadow="sm" onPress={() => console.log("sasa")}>
          <a href={item.url}>
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
          </a>
        </Card>
      ))}
    </div>
  );
}
