"use server";

import Metadata from "@/Metadata";
import ImageCaroussel from "../ui/caroussel/imageCarousserl";
import { promises as fs } from "fs";

export default async function Page() {
  const fileContent = await fs.readFile(
    process.cwd() + "/public/caroussel-imgs/index.json",
    "utf8"
  );

  return (
    <main>
      <Metadata
        seoTitle="Carroussel"
        seoDescription="An image caroussel app."
      />
      <ImageCaroussel imgsData={fileContent} />
    </main>
  );
}
