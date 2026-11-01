export const SITE = 'https://potenscura.nl';
export const volledig = (pad: string) => new URL(pad, SITE).toString();

export const telefoon = { tekst: '06 43 53 42 42', link: 'tel:+31643534242', schema: '+31 6 43 53 42 42', voorbeeld: false };
export const email = { tekst: 'info@potenscura.nl', link: 'mailto:info@potenscura.nl', voorbeeld: false };

const MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
export const datum = (iso: string) => {
  const [j, m, d] = iso.split('-').map(Number);
  return `${d} ${MAANDEN[m - 1]} ${j}`;
};
export const hoofdletter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const opsomming = (lijst: string[]) => (lijst.length < 2 ? lijst.join('') : `${lijst.slice(0, -1).join(', ')} en ${lijst[lijst.length - 1]}`);
