'use client';
import {useEffect,useState} from 'react';
export default function ShareQR({path}:{path:string}){const [src,setSrc]=useState('');useEffect(()=>{let active=true;import('qrcode').then(q=>q.toDataURL(new URL(path,location.origin).href,{width:220,margin:2,errorCorrectionLevel:'M'})).then(value=>{if(active)setSrc(value)}).catch(()=>{});return()=>{active=false}},[path]);return src?<figure className="share-qr"><img src={src} width={220} height={220} alt="QR สำหรับเปิดลิงก์นี้"/><figcaption>สแกนเพื่อเปิด · ผู้รับต้องมีสิทธิ์เข้าเว็บไซต์</figcaption></figure>:null}
