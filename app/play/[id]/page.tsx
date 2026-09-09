import ARPlayer from '../../ar-player';
import {notFound} from 'next/navigation';
import {arGames,type PlayMode} from '../../ar-data';
export default async function Page({params,searchParams}:{params:Promise<{id:string}>;searchParams:Promise<{mode?:string}>}){const {id}=await params;const {mode}=await searchParams;if(!arGames.some(g=>g.id===id))notFound();return <ARPlayer id={id} initialMode={(['camera','touch','audio'].includes(mode||'')?mode:'touch') as PlayMode}/>}
