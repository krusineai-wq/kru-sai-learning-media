import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'KruSine Smart Games | เรียนสนุก เล่นได้ความรู้',description:'เกมการเรียนรู้สำหรับคุณครูและนักเรียน เล่นคณิต ภาษาอังกฤษ ภาษาไทย และวิทยาศาสตร์ พร้อมคู่มือการใช้ในห้องเรียน'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="th"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600;700;800&display=swap" rel="stylesheet"/></head><body>{children}</body></html>;}
