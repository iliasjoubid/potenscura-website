'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { telefoon } from '@/lib/site';

export default function ZwevendeKnop() {
  const pad = usePathname();
  const [zichtbaar, zetZichtbaar] = useState(false);

  useEffect(() => {
    const inBeeld = new Set<Element>();
    const kijker = new IntersectionObserver((items) => {
      for (const i of items) {
        if (i.isIntersecting) inBeeld.add(i.target);
        else inBeeld.delete(i.target);
      }
      zetZichtbaar(inBeeld.size === 0);
    });
    document.querySelectorAll('.knop:not(.zweef), .slot, .voet, .formulier').forEach((el) => kijker.observe(el));
    return () => kijker.disconnect();
  }, [pad]);

  return (
    <a className="knop zweef" href={telefoon.link} data-zichtbaar={zichtbaar}>
      Bel ons
    </a>
  );
}
