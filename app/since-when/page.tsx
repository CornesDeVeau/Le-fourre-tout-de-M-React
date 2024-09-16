import Timer from "../ui/timer/timer";
import Image from "next/image";

const imgs = [
  {
    src: "/shutterstock/handsome-young-man-looking-at-his-watch-running-late.jpg",
    width: 1500,
    height: 1101,
    alt: "Shutterstock guy is flabbergasted by the time displayed on his watch !",
  },
  {
    src: "/shutterstock/handsome-young-man-running.jpg",
    width: 1296,
    height: 1600,
    alt: "Shutterstock guy is now desperatly running !",
  },
  {
    src: "/shutterstock/stock-photo-closeup-portrait-of-young-handsome-man-knocking-on-the-wooden-closed-door-male-visitor-standing-in.jpg",
    width: 1500,
    height: 1101,
    alt: "Shuttestock guy is now knocking on a wooden door.",
  },
  {
    src: "/shutterstock/handsome-young-man-behind-open-door-getting-out-looking-camera-friendly-expression.webp",
    width: 800,
    height: 532,
    alt: "Another Shutterstock guy opens the door and smiles at the other guy.",
  },
  {
    src: "/shutterstock/mobile-app-advertisement-handsome-excited.webp",
    width: 600,
    height: 466,
    alt: "The first Shutterstock guy shows something on his phone while smiling. It's a timer ! And it's going up !",
  },
];

export default function Page() {
  return (
    <main className="flex flex-col justify-center align-middle">
      {imgs.map((img, index) => {
        return (
          <div key={img.src} className="relative">
            <Image
              src={img.src}
              width={img.width}
              height={img.height}
              alt={img.alt}
              className="w-[300px] md:w-[400px] xl:w-[950px] 2xl:w-[1200px]"
            ></Image>
            {index === 4 ? (
              <div className="absolute top-10 left-16 w-16 -rotate-12 md:top-16 md:left-24 xl:w-60 xl:top-36 xl:left-44 2xl:left-64 2xl:top-52 text-center">
                <Timer />
                <h2>Since launch !</h2>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </main>
  );
}
