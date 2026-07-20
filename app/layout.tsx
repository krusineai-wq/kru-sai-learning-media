import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "คลังสื่อครูทรายปั้นสื่อ AI",
  description: "รวมผลงานโปสเตอร์ ใบงาน เกม AR และสื่อ Active Learning"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
