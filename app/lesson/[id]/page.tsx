import {notFound} from 'next/navigation';
import {arGames} from '../../ar-data';
import ARStudy from '../../ar-study';
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;if(!arGames.some(g=>g.id===id))notFound();return <ARStudy id={id}/>}

