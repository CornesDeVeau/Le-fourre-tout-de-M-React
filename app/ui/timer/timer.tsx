"use client";

import { useEffect, useState } from "react";

// website started 2024y 09m 12d 10h 42m 42s !

export default function Timer() {
  const started = new Date("2024-09-12 10:42:42");
  const now = new Date();
  const [elapsed, setElapsed] = useState(
    Math.floor(now.getTime() / 1000) - Math.floor(started.getTime() / 1000)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed((e) => e + 1);
    }, 1000);
    return () => clearInterval(id);
  });

  function formateTime(seconds: number): string {
    const d = Math.floor(seconds / (60 * 60 * 24));
    seconds -= d * 24 * 60 * 60;
    const h = Math.floor(seconds / (60 * 60));
    seconds -= h * 60 * 60;
    const m = Math.floor(seconds / 60);
    seconds -= m * 60;

    return d + "d " + h + "h " + m + "m " + seconds + "s";
  }

  return (
    <main>
      <h1 className="text-sm xl:text-xl 2xl:text-2xl font-semibold md:font-extrabold">
        {formateTime(elapsed)}
      </h1>
    </main>
  );
}
