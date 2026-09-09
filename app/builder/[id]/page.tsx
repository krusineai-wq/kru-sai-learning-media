import {notFound} from 'next/navigation';
import {arGames} from '../../ar-data';
import ARBuilder from '../../ar-builder';
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;if(!arGames.some(g=>g.id===id))notFound();return <ARBuilder id={id}/>}

