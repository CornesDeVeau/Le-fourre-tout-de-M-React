"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function ImageCaroussel({ imgsData }: { imgsData: string }) {
  const [actualImage, setActualImage] = useState(0);
  const data = JSON.parse(imgsData);

  return (
    <div className="bg-black">
      <div className="grid grid-rows-1 grid-cols-10 items-center max-h-[80%]">
        <button
          onClick={() =>
            actualImage <= 0
              ? setActualImage(14)
              : setActualImage(actualImage - 1)
          }
        >
          <ChevronLeftIcon className="text-gray-300 scale-50" />
        </button>
        {
          <Image
            src={data.imgs[actualImage].path}
            width={data.imgs[actualImage].x}
            height={data.imgs[actualImage].y}
            alt={data.imgs[actualImage].alt}
            className="col-span-8"
          ></Image>
        }
        <button
          onClick={() =>
            actualImage >= 14
              ? setActualImage(0)
              : setActualImage(actualImage + 1)
          }
        >
          <ChevronRightIcon className="text-gray-300 scale-50" />
        </button>
      </div>
      <div className="overflow-hidden">
        <ul className="flex flex-row gap-x-4 w-[500%] mt-10 mb-2 max-h-[20%]">
          {data.imgs.map(
            (
              img: { path: string; x: number; y: number; alt: string },
              index: number
            ) => {
              return (
                <li key={img.path}>
                  <Image
                    src={img.path}
                    width={img.x}
                    height={img.y}
                    alt={img.alt}
                    style={
                      {
                        "--image-offset":
                          (actualImage * window.screenX * 1.4).toString() +
                          "px",
                      } as React.CSSProperties
                    }
                    className={clsx(
                      "scale-75 -translate-x-[var(--image-offset)]",
                      {
                        "border-2 border-gray-300 scale-100":
                          index === actualImage,
                      }
                    )}
                    onClick={() => setActualImage(index)}
                  ></Image>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}
