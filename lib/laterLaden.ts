import { useEffect, useState } from 'react';

export function useLaterLaden() {
  const [alle, zetAlle] = useState(false);
  useEffect(() => {
    if (alle) return;
    let wacht: number | undefined;
    const klaar = () => { wacht = window.setTimeout(() => zetAlle(true), 1000); };
    if (document.readyState === 'complete') klaar();
    else window.addEventListener('load', klaar, { once: true });
    return () => {
      window.removeEventListener('load', klaar);
      if (wacht) window.clearTimeout(wacht);
    };
  }, [alle]);
  return [alle, () => zetAlle(true)] as const;
}
