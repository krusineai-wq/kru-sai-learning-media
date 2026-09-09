import type {Metadata} from 'next';
import './globals.css';
import './ar.css';
import SiteShell from './ar-shell';
import {getChatGPTUser} from './chatgpt-auth';
export const metadata:Metadata={title:{default:'KruSine Smart Games | เกมสื่อการสอนสำหรับคุณครู',template:'%s | KruSine Smart Games'},description:'เกมสื่อการสอนและคลังเนื้อหาสำหรับคุณครู ผู้ปกครอง และนักเรียน สร้างชุดคำถาม ดาวน์โหลด และนำไปใช้ในห้องเรียน'};
export const dynamic='force-dynamic';
export default async function RootLayout({children}:Readonly<{children:React.ReactNode}>){const user=await getChatGPTUser();return <html lang="th"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600;700;800&display=swap" rel="stylesheet"/><link rel="icon" href="/favicon.svg"/></head><body><SiteShell user={user}>{children}</SiteShell></body></html>}

