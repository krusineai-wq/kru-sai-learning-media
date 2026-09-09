import ARRoom from '../../ar-room';
export default async function Page({params}:{params:Promise<{code:string}>}){const {code}=await params;return <ARRoom code={code}/>}
