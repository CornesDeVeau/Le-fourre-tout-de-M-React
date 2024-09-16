import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TODO list",
  description: "TODO list, progression of the website.",
};

export default function Sidebar() {
  return (
    <main className="border-8 rounded-2xl border-blue-500 bg-gray-200">
      <div className="m-5">
        <h1 className="text-6xl font-bold">
          <u>TODO</u> 🛠️
        </h1>
        <div className="ml-5 mt-5">
          <ul className="text-lg list-disc">
            <li>
              Améliorer l&apos;aspect visuel du menu <i>Naviguer</i> : ✅
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
