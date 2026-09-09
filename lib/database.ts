import {env} from 'cloudflare:workers';
export function database(){const db=(env as unknown as {DB?:D1Database}).DB;if(!db)throw new Error('ระบบบันทึกกำลังเตรียมพร้อม กรุณาลองอีกครั้งภายหลัง');return db}
