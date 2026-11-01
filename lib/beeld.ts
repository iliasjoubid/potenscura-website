export const reeks = (naam: string, breedtes: number[], soort: 'avif' | 'webp') =>
  breedtes.map((b) => `/beeld/${naam}-${b}.${soort} ${b}w`).join(', ');

export type Bron = { alt: string; tekst: string; maker: string; bron: string; licentie: string; licentieLink: string };

export const RIJNKADE: Bron = {
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'De Rijnkade in Arnhem, niet de woonlocatie.',
  maker: 'AI-illustratie voor Potens Cura',
  bron: '',
  licentie: 'AI-gegenereerd',
  licentieLink: '',
};

export const BEDSTEE: Bron = {
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Park Mariëndaal in Arnhem, met de Groene Bedstee.',
  maker: 'AI-illustratie voor Potens Cura',
  bron: '',
  licentie: 'AI-gegenereerd',
  licentieLink: '',
};

export type Foto = Bron & { naam: string; f: number };
const UNSPLASH = { licentie: 'AI-gegenereerd', licentieLink: '' };
const CC_BY_SA_2 = { licentie: 'AI-gegenereerd', licentieLink: '' };
const CC_BY_SA_4 = { licentie: 'AI-gegenereerd', licentieLink: '' };

export const OCHTEND: Foto = {
  naam: 'ochtend', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...UNSPLASH,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Ochtendmist in een weiland.',
};
export const MIDDAG: Foto = {
  naam: 'middag', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...UNSPLASH,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Een polder bij Rotterdam.',
};
export const AVOND: Foto = {
  naam: 'avond', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...CC_BY_SA_2,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Heide in Overijssel in de schemering.',
};
export const NACHT: Foto = {
  naam: 'nacht', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...CC_BY_SA_4,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Het licht van de kassen bij Luttelgeest, gezien vanuit Bant.',
};
export const DAGFOTOS = [OCHTEND, MIDDAG, AVOND, NACHT];

export const DAG: Foto = {
  naam: 'dag', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...UNSPLASH,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Een weiland bij Wijhe.',
};
export const AVONDSTAD: Foto = {
  naam: 'avondstad', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...UNSPLASH,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Almere Poort in het blauwe uur.',
};
export const SLAAP: Foto = {
  naam: 'slaap', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...UNSPLASH,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Een sterrenhemel boven het land.',
};
export const WEEKEND: Foto = {
  naam: 'weekend', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...UNSPLASH,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Het strand van Scheveningen.',
};
export const DIENSTFOTOS = [DAG, AVONDSTAD, SLAAP, WEEKEND];

export const ROUTE: Foto = {
  naam: 'route', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...UNSPLASH,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Een fietspad op Texel.',
};
export const VRAGEN: Foto = {
  naam: 'vragen', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...UNSPLASH,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Een bank aan zee.',
};
export const PRIVACY: Foto = {
  naam: 'privacy', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...CC_BY_SA_4,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Het IJsselmeer bij het Mirnser Klif.',
};
export const KLACHTEN: Foto = {
  naam: 'klachten', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...UNSPLASH,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Vuurtoreneiland bij Durgerdam.',
};
export const CONTACT: Foto = {
  naam: 'contact', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...CC_BY_SA_4,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'De John Frostbrug in Arnhem.',
};

export const PAND = {
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
};
