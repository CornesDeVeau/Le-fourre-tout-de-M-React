import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { Sidebar } from "@/app/ui/sidebar/sidebar";

export const metadata: Metadata = {
  title: "Le fourre tout de M. React",
  description: "Compilation de projets React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-gray-600">
        <div className="flex flex-row">
          <div className="w-[400px] min-w-[400px]">
            <Sidebar />
          </div>
          <div className="h-[1000px] m-3">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
