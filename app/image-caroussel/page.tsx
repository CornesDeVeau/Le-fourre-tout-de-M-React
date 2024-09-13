"use server";

import ImageCaroussel from "../ui/caroussel/imageCarousserl";
import { promises as fs } from "fs";

export default async function Page() {
  const fileContent = await fs.readFile(
    process.cwd() + "/public/caroussel-imgs/index.json",
    "utf8"
  );

  return (
    <main>
      <ImageCaroussel imgsData={fileContent} />
    </main>
  );
}
