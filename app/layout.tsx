"use client";

import "@/app/ui/globals.css";
import { Sidebar } from "@/app/ui/sidebar/sidebar";
import { useState } from "react";
import clsx from "clsx";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleCollapseButton(collapse: boolean) {
    setIsCollapsed(collapse);
  }

  return (
    <html lang="fr">
      <body className="bg-gray-600">
        <SpeedInsights />
        <div
          className={clsx(
            "grid",
            { "grid-cols-sidebar": !isCollapsed },
            { "grid-cols-sidebar-collapsed": isCollapsed }
          )}
        >
          <Sidebar isOpen={isCollapsed} toggleCollapse={handleCollapseButton} />
          {children}
        </div>
      </body>
    </html>
  );
}
