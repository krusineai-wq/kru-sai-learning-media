import type {CSSProperties} from 'react';
export default function Icon3D({index,className=''}:{index:number;className?:string}){return <span aria-hidden="true" className={'ks-icon-3d '+className} style={{backgroundPosition:`${(index%3)*50}% ${Math.floor(index/3)*50}%`} as CSSProperties}/>}
