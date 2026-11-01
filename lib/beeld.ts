export const reeks = (naam: string, breedtes: number[], soort: 'avif' | 'webp') =>
  breedtes.map((b) => `/beeld/${naam}-${b}.${soort} ${b}w`).join(', ');

export type Bron = { alt: string; tekst: string; maker: string; bron: string; licentie: string; licentieLink: string };

export const RIJNKADE: Bron = {
  alt: 'De Rijnkade in Arnhem in avondlicht, met de Eusebiustoren links en de John Frostbrug in de verte',
  tekst: 'De Rijnkade in Arnhem.',
  maker: 'Michielverbeek',
  bron: 'https://commons.wikimedia.org/wiki/File:Arnhem,_stadszicht_vanaf_de_Mandelabrug_in_de_avond_IMG_5002_2020-04-23_20.05.jpg',
  licentie: 'CC BY-SA 4.0',
  licentieLink: 'https://creativecommons.org/licenses/by-sa/4.0/deed.nl',
};

export const BEDSTEE: Bron = {
  alt: 'Een zandpad door de weilanden van Park Mariëndaal in Arnhem naar de bomen aan de horizon, met rechts de Groene Bedstee, een lange gang van geleide bomen',
  tekst: 'Park Mariëndaal in Arnhem, met de Groene Bedstee.',
  maker: 'MartinD',
  bron: 'https://commons.wikimedia.org/wiki/File:Arnhem_Groene_Bedstee_panorama.jpg',
  licentie: 'CC BY-SA 3.0',
  licentieLink: 'https://creativecommons.org/licenses/by-sa/3.0/deed.nl',
};

export type Foto = Bron & { naam: string; f: number };
const CC_BY_SA_4 = { licentie: 'CC BY-SA 4.0', licentieLink: 'https://creativecommons.org/licenses/by-sa/4.0/deed.nl' };

const commons = (bestand: string) => `https://commons.wikimedia.org/wiki/File:${bestand.replace(/ /g, '_')}`;
const CC_BY_3 = { licentie: 'CC BY 3.0', licentieLink: 'https://creativecommons.org/licenses/by/3.0/deed.nl' };
const CC_BY_4 = { licentie: 'CC BY 4.0', licentieLink: 'https://creativecommons.org/licenses/by/4.0/deed.nl' };
const CC_BY_SA_3 = { licentie: 'CC BY-SA 3.0', licentieLink: 'https://creativecommons.org/licenses/by-sa/3.0/deed.nl' };

export const OCHTEND: Foto = {
  naam: 'dag-ochtend', f: 0.45, maker: 'Arnhemcity12', bron: commons('Nieuwstraat - Sint-Jansbeek.jpg'), ...CC_BY_SA_4,
  alt: 'De Nieuwstraat in Arnhem, met de Sint-Jansbeek als open water tussen lage bakstenen trappen en huizen aan beide kanten',
  tekst: 'De Sint-Jansbeek in de Nieuwstraat, Arnhem.',
};
export const MIDDAG: Foto = {
  naam: 'dag-middag', f: 0.45, maker: 'Michielverbeek', bron: commons('Arnhem-Transvaalbuurt, brug over de Sint Jansbeek bij de Cronjéstraat IMG 3959 2024-07-15 16.12.jpg'), ...CC_BY_4,
  alt: 'Een oude brug met lantaarns over de Sint-Jansbeek in de Transvaalbuurt in Arnhem, met woonhuizen en bomen erachter',
  tekst: 'De Transvaalbuurt in Arnhem.',
};
export const AVOND: Foto = {
  naam: 'dag-avond', f: 0.45, maker: 'Michielverbeek', bron: commons('Arnhem-Meinerswijk, de plas aan de zuidwestkant vlak voor zonsondergang IMG 8042 2021-02-12 17.42.jpg'), ...CC_BY_SA_4,
  alt: 'Meinerswijk in Arnhem vlak voor zonsondergang: een oranje lucht boven het water, kale bomen en in de verte de spoorbrug',
  tekst: 'Meinerswijk in Arnhem, vlak voor zonsondergang.',
};
export const NACHT: Foto = {
  naam: 'dag-nacht', f: 0.45, maker: 'Robert221', bron: commons('Rijnkade, Arnhem at night.jpg'), ...CC_BY_SA_3,
  alt: 'De Rijnkade in Arnhem bij nacht, met de verlichte Eusebiustoren en de lichtjes van de kade in het water',
  tekst: 'De Rijnkade in Arnhem bij nacht.',
};
export const DAGFOTOS = [OCHTEND, MIDDAG, AVOND, NACHT];

export const DAG: Foto = {
  naam: 'werk-dag', f: 0.65, maker: 'Michielverbeek', bron: commons('Arnhem, station Arnhem centraal positie1 foto4 2016-01-17 11.24.jpg'), ...CC_BY_SA_4,
  alt: 'De weg naar station Arnhem Centraal op een heldere ochtend, met de draden van de trolleybus en de kantoortorens',
  tekst: 'Bij station Arnhem Centraal, overdag.',
};
export const AVONDSTAD: Foto = {
  naam: 'werk-avond', f: 0.65, maker: 'Michielverbeek', bron: commons('Arnhem, kraan op de Rijnkade IMG 4986 2020-04-23 19.44.jpg'), ...CC_BY_SA_4,
  alt: 'De oude kraan op de Rijnkade in Arnhem in het licht van de avondzon, met de huizen van de kade',
  tekst: 'De kraan op de Rijnkade in Arnhem, in de avondzon.',
};
export const SLAAP: Foto = {
  naam: 'werk-nacht', f: 0.65, maker: 'Jaap Mechielsen', bron: commons('John Frost Brug Arnhem (143853475).jpeg'), ...CC_BY_3,
  alt: 'De John Frostbrug in Arnhem bij nacht, verlicht boven de Rijn onder een donkerblauwe lucht',
  tekst: 'De John Frostbrug in Arnhem bij nacht.',
};
export const WEEKEND: Foto = {
  naam: 'werk-weekend', f: 0.65, maker: 'Wouter Hagens', bron: commons('Arnhem Sonsbeek A.jpg'), ...CC_BY_SA_3,
  alt: 'Park Sonsbeek in Arnhem: een gazon met een beek en een bruggetje, oude bomen en het Sonsbeek Paviljoen',
  tekst: 'Park Sonsbeek in Arnhem.',
};
export const DIENSTFOTOS = [DAG, AVONDSTAD, SLAAP, WEEKEND];

export const VRAGEN: Foto = {
  naam: 'vragen-rozet', f: 0, maker: 'Simon Legner', bron: commons('Rozet Arnhem (IMG 20260313 140741).jpg'), ...CC_BY_SA_4,
  alt: 'De bibliotheek in Rozet in Arnhem: lange tafels met boeken in een lichte zaal met ramen over de hele lengte',
  tekst: 'De bibliotheek in Rozet, Arnhem.',
};
export const STADHUIS: Foto = {
  naam: 'stadhuis', f: 0, maker: 'Raimond Spekking', bron: commons('Arnhem, Stadhuis-9331.jpg'), ...CC_BY_SA_4,
  alt: 'Het stadhuis van Arnhem: een lange gevel van glas en wit staal met rode zonneschermen, aan een plein',
  tekst: 'Het stadhuis van Arnhem.',
};
export const PRIVACY: Foto = {
  naam: 'privacy-zicht', f: 0.6, maker: 'Atsje', bron: commons('Arnhem vanuit belvedère Sonsbeek 36.JPG'), ...CC_BY_SA_4,
  alt: 'Uitzicht over de bomen van Park Sonsbeek op Arnhem in de verte, onder een bewolkte lucht',
  tekst: 'Arnhem gezien vanaf de belvedère in Sonsbeek.',
};
export const KLACHTEN: Foto = {
  naam: 'klacht-park', f: 0.65, maker: 'Gouwenaar', bron: commons('20140822 Beuken bij Huis Zypendaal Arnhem.jpg'), licentie: 'CC0', licentieLink: 'https://creativecommons.org/publicdomain/zero/1.0/deed.nl',
  alt: 'Grote beuken op een zonnig gazon in het park van Huis Zypendaal in Arnhem',
  tekst: 'Beuken bij Huis Zypendaal, Arnhem.',
};
export const CONTACT: Foto = {
  naam: 'contact', f: 0.65, maker: 'Jan van Galen (RCE)', bron: 'https://commons.wikimedia.org/wiki/File:Overzicht_van_de_John_Frostbrug_over_de_Nederrijn_-_Arnhem_-_20420290_-_RCE.jpg', ...CC_BY_SA_4,
  alt: 'De John Frostbrug, een stalen boogbrug over de Nederrijn in Arnhem, gezien vanaf de overkant van de rivier',
  tekst: 'De John Frostbrug in Arnhem.',
};

export const PAND = {
  alt: 'Het pand van Potens Cura in Arnhem: drie woonlagen in gele baksteen met witte erkers en een overdekte voordeur onder een boog.',
};
