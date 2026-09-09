import {database} from '@/lib/database';
import {getChatGPTUser} from '../../chatgpt-auth';
import {cleanText} from '@/lib/lesson-format';
export async function POST(req:Request){if(req.headers.get('origin')!==new URL(req.url).origin)return Response.json({error:'คำขอไม่ถูกต้อง'},{status:403});const user=await getChatGPTUser();if(!user)return Response.json({error:'กรุณาเข้าสู่ระบบ'},{status:401});try{const body=await req.json() as {displayName?:unknown},name=cleanText(body.displayName,60);await database().prepare('INSERT INTO profiles (id,display_name) VALUES (?,?) ON CONFLICT(id) DO UPDATE SET display_name = excluded.display_name').bind(user.userId,name).run();return Response.json({ok:true})}catch{return Response.json({error:'บันทึกชื่อไม่สำเร็จ'},{status:400})}}

export async function GET(){const user=await getChatGPTUser();if(!user)return Response.json({error:'กรุณาเข้าสู่ระบบ'},{status:401});const row=await database().prepare('SELECT display_name FROM profiles WHERE id = ?').bind(user.userId).first<{display_name:string}>();return Response.json({displayName:row?.display_name||user.fullName||''},{headers:{'Cache-Control':'no-store'}})}

