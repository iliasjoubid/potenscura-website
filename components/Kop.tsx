'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu } from './Iconen';
import { telefoon } from '@/lib/site';

const groepen = [
  { naam: 'Ons aanbod', links: [{pad:'/wonen',naam:'Wonen'},{pad:'/begeleiding',naam:'Begeleiding'},{pad:'/traject',naam:'Het traject'}] },
  { naam: 'Informatie', links: [{pad:'/ouders',naam:'Voor ouders'},{pad:'/verwijzers',naam:'Voor verwijzers'},{pad:'/criteria',naam:'In- en exclusiecriteria'},{pad:'/kwaliteit',naam:'Kwaliteit & veiligheid'}] },
];
export default function Kop() {
  const pad = usePathname();
  const [open, zetOpen] = useState(false);
  useEffect(() => zetOpen(false), [pad]);
  return <header className="kop"><div className="kop__binnen">
    <Link className="kop__logo" href="/" aria-label="Potens Cura, naar de homepage"><img src="/beeld/logo-400.png" alt="Potens Cura" width={400} height={135}/></Link>
    <nav className={`kop__nav${open ? ' open' : ''}`} id="menu" aria-label="Hoofdmenu"><ul>
      <li><Link href="/" aria-current={pad==='/'?'page':undefined}>Home</Link></li>
      <li><Link href="/over-ons" aria-current={pad==='/over-ons'?'page':undefined}>Over ons</Link></li>
      {groepen.map(g=><li className="kop__groep" key={g.naam}><details><summary data-huidig={g.links.some(l=>l.pad===pad)}>{g.naam}</summary><ul className="kop__submenu">{g.links.map(l=><li key={l.pad}><Link href={l.pad} aria-current={pad===l.pad?'page':undefined}>{l.naam}</Link></li>)}</ul></details></li>)}
      <li><Link href="/contact" aria-current={pad==='/contact'?'page':undefined}>Contact</Link></li>
    </ul></nav>
    <a className="knop kop__knop" href={telefoon.link}><span className="kop__knop-kort">Bel ons</span><span className="kop__knop-lang">Bel {telefoon.tekst}</span></a>
    <button className="kop__menu" type="button" aria-expanded={open} aria-controls="menu" onClick={()=>zetOpen(!open)}><Menu/><span>Menu</span></button>
  </div></header>;
}
