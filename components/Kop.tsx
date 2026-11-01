'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu } from './Iconen';
import { telefoon } from '@/lib/site';

export const hoofdmenu = [
  { pad: '/', naam: 'Home' },
  { pad: '/over-ons', naam: 'Over Potens Cura' },
  { pad: '/wonen', naam: 'Wonen' },
  { pad: '/begeleiding', naam: 'Begeleiding' },
  { pad: '/traject', naam: 'Het traject' },
  { pad: '/ouders', naam: 'Voor ouders' },
  { pad: '/verwijzers', naam: 'Voor verwijzers' },
  { pad: '/kwaliteit', naam: 'Kwaliteit & veiligheid' },
  { pad: '/vragen', naam: 'FAQ' },
  { pad: '/contact', naam: 'Contact' },
];

export default function Kop() {
  const pad = usePathname();
  const [open, zetOpen] = useState(false);
  useEffect(() => zetOpen(false), [pad]);
  return (
    <header className="kop">
      <div className="kop__binnen">
        <Link className="kop__logo" href="/" aria-label="Potens Cura, naar de home">
          <img src="/beeld/logo-400.png" alt="Potens Cura" width={400} height={135} />
        </Link>
        <nav className={`kop__nav${open ? ' open' : ''}`} id="menu" aria-label="Hoofdmenu">
          <ul>
            {hoofdmenu.map((l) => (
              <li key={l.pad}>
                <Link href={l.pad} aria-current={pad === l.pad ? 'page' : undefined}>{l.naam}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className="knop kop__knop" href={telefoon.link}>
          <span className="kop__knop-kort">Bel ons</span>
          <span className="kop__knop-lang">Bel {telefoon.tekst}</span>
        </a>
        <button className="kop__menu" type="button" aria-expanded={open} aria-controls="menu" onClick={() => zetOpen(!open)}>
          <Menu />
          <span>Menu</span>
        </button>
      </div>
    </header>
  );
}
