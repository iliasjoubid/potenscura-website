
export type Status = 'bevestigd' | 'voorbeeld' | 'te-bevestigen' | 'open';
export type Lezer = 'jongere' | 'ouder' | 'verwijzer' | 'collega';

export interface Feit<T = string> {
  waarde: T | null;
  status: Status;
  bron: string;
}

const BEVESTIGD = 'Potens Cura, 29-10-2026';
const PC = 'Potens Cura, 30-10-2026';
const PC2 = 'Potens Cura, 30-10-2026, tweede ronde';

export const bijgewerkt = '2026-11-02';
// true: concept, niet in Google. false: live. Zie LEESMIJ.md.
export const concept = false;

export const organisatie = {
  naam: 'Potens Cura',
  motto: '',
  domein: { waarde: 'potenscura.nl', status: 'bevestigd', bron: 'Domein van Potens Cura.' } as Feit,
  telefoon: { waarde: '06 43 53 42 42', status: 'bevestigd', bron: `${BEVESTIGD} ("0643534242")` } as Feit,
  email: { waarde: 'info@potenscura.nl', status: 'bevestigd', bron: BEVESTIGD } as Feit,
  adres: { waarde: 'Johan de Wittlaan 75, 6828 XD Arnhem', status: 'bevestigd', bron: `${BEVESTIGD}; postcode uit de BAG (PDOK), buurt Statenkwartier` } as Feit,
  adresOpenbaar: { waarde: true, status: 'bevestigd', bron: 'Mag het woonadres op de site en in Google, of alleen de plaats?' } as Feit<boolean>,
  kvk: { waarde: '96742933', status: 'bevestigd', bron: 'Potens Cura' } as Feit,
  contactpersoon: { waarde: null, status: 'open', bron: 'Naam, functie en foto voor Voor verwijzers.' } as Feit,
  beveiligdeMail: { waarde: null, status: 'open', bron: 'Bijvoorbeeld Zivver of ZorgMail.' } as Feit,
  gestart: { waarde: null, status: 'open', bron: 'Draait de locatie al, of wanneer opent hij?' } as Feit,
};

export const plaats: Feit = { waarde: 'Arnhem', status: 'bevestigd', bron: BEVESTIGD };

export const doelgroep = {
  leeftijdVan: 16,
  leeftijdTot: 23,
  tekst: 'jongeren van 16 tot 23 jaar',
  situatie: 'die vanwege hun omstandigheden niet thuis of in hun eigen netwerk kunnen wonen',
  problematiek: 'en behoefte hebben aan een stabiele woonomgeving, nabijheid en persoonlijke begeleiding',
  waarom: 'Iedere jongere heeft een eigen studio. Begeleiding is dag en nacht aanwezig op de woonlocatie. Tijdens de intake bekijken we of de ondersteuning aansluit bij wat de jongere nodig heeft.',
  status: 'bevestigd' as Status,
  bron: `${BEVESTIGD}; vanaf 16 jaar, de situatie en de problematiek: ${PC2}`,
};

export const dagbesteding = {
  zin: 'Een passende dagbesteding is nodig, zoals school of werk.',
  kort: 'Passende dagbesteding, zoals school of werk',
  status: 'bevestigd' as Status,
  uitlegStatus: 'te-bevestigen' as Status,
  bron: PC2,
};

export const woonvorm: Feit = {
  waarde: 'kleinschalig wonen in een eigen studio, met 24/7 begeleiding op locatie',
  status: 'bevestigd',
  bron: BEVESTIGD,
};

const WJ = String.fromCharCode(0x2060);
const naam24 = `24-${WJ}uursbegeleiding`;
export const zonderWj = (s: string) => s.split(WJ).join('');
export const begeleiding = {
  naam: naam24,
  waarde: '24 uur per dag, zeven dagen per week',
  zin: 'Jongeren stellen samen met hun persoonlijk begeleider doelen op en werken stap voor stap aan zelfstandigheid.',
  status: 'bevestigd' as Status,
  bron: `${BEVESTIGD} ("24/7"); de zin: ${PC2}`,
};

export const studios = {
  aantal: 4,
  keuken: 'Elke studio heeft een eigen keuken.',
  gedeeld: 'Badkamer en toiletten zijn gedeeld.',
  status: 'bevestigd' as Status,
  bron: `${BEVESTIGD}; badkamer en toiletten: ${PC}`,
};

export const financiering = {
  antwoord: 'De begeleiding en het verblijf bij Potens Cura kunnen worden gefinancierd vanuit de Jeugdwet. De mogelijkheden zijn afhankelijk van de leeftijd, ondersteuningsbehoefte en persoonlijke situatie van de jongere. De betrokken gemeente beoordeelt of financiering mogelijk is.',
  vergoed: 'De gemeente beoordeelt of ondersteuning vanuit de Jeugdwet mogelijk is.',
  gemeente: 'Potens Cura heeft op dit moment geen contract met een gemeente. Per jongere kan met de gemeente worden besproken of een afzonderlijke maatwerkafspraak mogelijk is. De gemeente beoordeelt en beslist hierover.',
  kort: 'Financiering vanuit de Jeugdwet wordt per jongere met de betrokken gemeente afgestemd.',
  status: 'bevestigd' as Status,
  bron: PC2,
};

export const werkwijzen = [
  { sleutel: 'vertrouwen', naam: 'Vertrouwen', kort: 'Eerst bouwen we een band op.', uitleg: 'We nemen de tijd om de jongere te leren kennen, zodat er vertrouwen groeit. Daarop bouwt de begeleiding.' },
  { sleutel: 'op-maat', naam: 'Op maat', kort: 'Wat een jongere nodig heeft, bepaalt wat we doen.', uitleg: 'Geen twee jongeren krijgen dezelfde begeleiding. Wat een jongere nodig heeft, bepaalt wat we doen.' },
  { sleutel: 'perspectiefplan', naam: 'Perspectiefplan', kort: 'Doelen samen met de persoonlijk begeleider.', uitleg: 'De jongere stelt samen met de persoonlijk begeleider doelen op. Waar passend denken ouders, het netwerk en betrokken professionals mee.' },
  { sleutel: 'evalueren', naam: 'Evalueren', kort: 'Op vaste momenten kijken we hoe het gaat.', uitleg: 'Op vaste momenten bekijken we hoe het gaat met de doelen. Zo blijft het plan bij de jongere passen.' },
].map((w) => ({ ...w, status: 'bevestigd' as Status, bron: PC, uitlegStatus: 'te-bevestigen' as Status }));

export const methodieken = {
  namen: ['presentiebenadering', 'systeemgericht werken', 'cultuursensitief werken'],
  zin: 'We werken met de presentiebenadering, systeemgericht en cultuursensitief.',
  status: 'bevestigd' as Status,
  bron: `${BEVESTIGD}; zonder traumasensitief: ${PC2}`,
};

export const intake = {
  zin: 'Voor een jongere bij ons komt wonen, kijken we in een intakegesprek of Potens Cura past.',
  status: 'bevestigd' as Status,
  bron: PC,
};

export const doel = {
  kort: 'Jongeren ondersteunen bij zelfstandigheid, persoonlijke vaardigheden en een passende vervolgstap.',
  jongere: 'Samen werken we aan jouw ontwikkeling en een passende volgende stap, zoals terugkeer naar huis, zelfstandig wonen of een andere woonvorm.',
  status: 'bevestigd' as Status,
  bron: 'Door Potens Cura goedgekeurde tekst, 2 november 2026',
};

export const koers = [
  { sleutel: 'missie', naam: 'Missie', tekst: 'Potens Cura biedt jongeren die niet in hun huidige thuissituatie kunnen wonen een veilige en stabiele woonomgeving, met persoonlijke begeleiding die aansluit bij hun behoeften. Vanuit vertrouwen, betrokkenheid en duidelijke structuur helpen we jongeren om zich te ontwikkelen en stappen te zetten richting hun toekomst.', status: 'bevestigd' as Status },
  { sleutel: 'visie', naam: 'Visie', tekst: 'Wij geloven dat iedere jongere de kans verdient om zich te ontwikkelen in een omgeving waar veiligheid, vertrouwen en persoonlijke aandacht centraal staan. Door jongeren ruimte te geven om te groeien, zonder de noodzakelijke begeleiding en nabijheid los te laten, werken we aan duurzame ontwikkeling en een passend toekomstperspectief.', status: 'bevestigd' as Status },
  { sleutel: 'doel', naam: 'Doel', tekst: 'Jongeren ondersteunen bij het ontwikkelen van zelfstandigheid, het versterken van hun persoonlijke vaardigheden en het creëren van een stabiel toekomstperspectief. Daarbij werken we toe naar een passende vervolgstap, zoals zelfstandig wonen, terugkeer naar huis of een andere geschikte woonvorm.', status: 'bevestigd' as Status },
];

export const partijen = {
  skj: { tekst: 'Bij Potens Cura werken SKJ-geregistreerde jeugdprofessionals.', link: 'https://skjeugd.nl', status: 'bevestigd' as Status, bron: `${PC}: "aangeven dat er begeleiders skj geregistreerd zijn".` },
  klachten: { naam: 'Klachtenportaal Zorg', link: 'https://klachtenportaalzorg.nl', logo: '/partijen/klachtenportaal-zorg.svg', breed: 1080, hoog: 120, status: 'bevestigd' as Status, bron: `${BEVESTIGD}. Niet in de openbare lijst van KPZ, maar die toont alleen aanbieders die erom vragen.` },
  vertrouwen: [
    { naam: 'Jeugdstem', link: 'https://jeugdstem.nl', logo: '/partijen/jeugdstem.svg', breed: 317, hoog: 63 },
    { naam: 'Adviespunt Zorgbelang', link: 'https://www.adviespuntzorgbelang.nl', logo: '/partijen/adviespunt-zorgbelang.png', breed: 240, hoog: 78 },
  ],
  vertrouwenBron: `${BEVESTIGD}: "Jeugdstem/Adviespunt Zorgbelang is de organisatie van vertrouwenspersonen in de jeugdzorg". Nagelopen op jeugdstem.nl en adviespuntzorgbelang.nl: Zorgbelang voert een deel van het vertrouwenswerk jeugd uit, beide met 088 555 1000.`,
};

export const openbaar = {
  tot23: {
    tekst: 'Na je 18e kan jeugdhulp doorlopen tot je 23e: als de hulp voor je 18e begon, of als voor je 18e is besloten dat je hem nodig hebt.',
    bron: 'Jeugdwet, artikel 1.1',
    link: 'https://wetten.overheid.nl/BWBR0034925',
    nagelezen: '2026-10-30',
  },
  skj: {
    tekst: 'Wie bij SKJ is geregistreerd, voldoet aan de eisen voor vakbekwaamheid en schoolt zich regelmatig bij. Het register is openbaar: je kunt zelf nakijken wie erin staat.',
    bron: 'skjeugd.nl',
    link: 'https://skjeugd.nl/ouders-verzorgers/',
    nagelezen: '2026-10-30',
  },
  verwijzing: {
    tekst: 'Voor jeugdhulp is een verwijzing nodig, bijvoorbeeld van het wijkteam of de huisarts.',
    bron: 'nji.nl',
    link: 'https://www.nji.nl/kennis/beslissen-over-hulp/jeugdwet-beslissen-over-hulp',
    nagelezen: '2026-10-30',
  },
};

export const feiten = [
  { label: 'Voor wie', waarde: '16 tot 23 jaar', toelichting: 'jongeren die een stabiele woonplek met begeleiding nodig hebben' },
  { label: 'Wonen', waarde: 'Vier studio\'s', toelichting: 'elk met een eigen keuken' },
  { label: 'Begeleiding', waarde: '24 uur per dag', toelichting: 'zeven dagen per week' },
  { label: 'Plaats', waarde: 'Arnhem', toelichting: 'eigen studio met begeleiding op locatie' },
].map((f) => ({ ...f, status: 'bevestigd' as Status, bron: 'Potens Cura, oktober 2026' }));

export const haltes = [
  {
    sleutel: 'aankomen', naam: 'Aankomen', foto: 'de sleutel van een studio',
    wonen: 'Je krijgt een eigen studio met keukenblok, waar je je kunt terugtrekken en tot rust kunt komen.',
    begeleiding: 'Eerst leren we elkaar kennen. Je begeleider vraagt wat jij belangrijk vindt.',
    jij: 'Rustig landen: slapen, eten en de buurt leren kennen.',
    ouders: 'Ze leren de begeleiders kennen.',
  },
  {
    sleutel: 'wennen', naam: 'Wennen', foto: 'een gesprek aan de keukentafel',
    wonen: 'Je vindt je eigen ritme: opstaan, eten, school of werk.',
    begeleiding: 'Jullie bouwen een band op. Samen kijk je wat lukt en wat nog lastig is.',
    jij: 'Een vast dagritme en afspraken nakomen.',
    ouders: 'Ze horen bij je netwerk, en de begeleiding werkt met hen samen.',
  },
  {
    sleutel: 'bouwen', naam: 'Bouwen', foto: 'een bureau met agenda en post',
    wonen: 'Je doet steeds meer zelf: boodschappen, koken en de was.',
    begeleiding: 'Samen met jou en je netwerk stellen we de doelen op voor je perspectiefplan.',
    jij: 'School, werk of dagbesteding, en omgaan met geld.',
    ouders: 'Ze denken mee over de doelen in je perspectiefplan.',
  },
  {
    sleutel: 'oefenen', naam: 'Oefenen', foto: 'boodschappen op het aanrecht',
    wonen: 'Je oefent met steeds meer zelfstandigheid in je eigen studio. Begeleiding blijft dag en nacht op de locatie aanwezig.',
    begeleiding: 'Samen met je persoonlijk begeleider bespreek je je voortgang en oefen je met nieuwe verantwoordelijkheden. Er is altijd 24/7 begeleiding aanwezig op de locatie.',
    jij: 'Zelf plannen, rekeningen betalen en een woning zoeken.',
    ouders: 'Ze zien je steeds meer zelf regelen.',
  },
  {
    sleutel: 'eigen-benen', naam: 'Op eigen benen', foto: 'een verhuisdoos bij een nieuwe voordeur',
    wonen: 'Je werkt toe naar een passende volgende woonplek, wanneer je daar klaar voor bent.',
    begeleiding: 'We bereiden samen de vervolgstap voor. Dat kan zelfstandig wonen zijn, terugkeer naar huis of een andere passende woonvorm.',
    jij: 'Een passende vervolgstap zetten met steun van belangrijke mensen om je heen.',
    ouders: 'Waar passend denken zij mee over een goede overgang naar de volgende plek.',
  },
].map((h) => ({ ...h, status: 'voorbeeld' as Status, bron: 'Voorbeeld, uitgewerkt op 29-10-2026; begeleiding en ouders op 30-10-2026 gelijkgetrokken met de werkwijze van Potens Cura. Potens Cura vult de haltes in.' }));

export const haltesLabels = { wonen: 'Wonen', begeleiding: 'Begeleiding', jij: 'Jij werkt aan', ouders: 'Ouders merken' };

export const werktijden = {
  zin: `Er is ${naam24}, dus je werkt vaak op wisselende tijden.`,
  kort: 'Je werkt vaak op wisselende tijden.',
  status: 'bevestigd' as Status,
  bron: `${PC}: "Medewerkers werken vaak onregelmatig."`,
};
export const diensten = [
  { sleutel: 'dag', naam: 'Dag', kop: 'Overdag', watJeDoet: 'Je begeleidt jongeren bij school, werk en afspraken, en je overlegt met ouders en verwijzers.' },
  { sleutel: 'avond', naam: 'Avond', kop: '\'s Avonds', watJeDoet: 'Je bent er voor een gesprek en je zorgt dat het rustig wordt in huis.' },
  { sleutel: 'nacht', naam: 'Nacht', kop: '\'s Nachts', watJeDoet: 'Je bent op de locatie als een jongere je \'s nachts nodig heeft.' },
  { sleutel: 'weekend', naam: 'Weekend', kop: 'In het weekend', watJeDoet: 'Vrije tijd, boodschappen en sport: het weekend heeft een eigen ritme.' },
].map((d) => ({ ...d, tijden: null as string | null, collegas: null as number | null, vacature: null as string | null, status: 'voorbeeld' as Status, bron: 'Momenten: dag en nacht begeleiding (Potens Cura, 29-10-2026) en wisselende tijden (Potens Cura, 30-10-2026). Wat je doet is een voorbeeld.' }));

export const aanmelden = {
  route: [
    'Je belt of mailt Potens Cura.',
    'Bespreek met ons hoe vertrouwelijke stukken veilig kunnen worden overgedragen.',
    'In een intakegesprek kijken we samen of Potens Cura bij de jongere past.',
    'Past het, dan spreken we af wanneer de jongere komt wonen.',
  ],
  stappen: ['Bellen of mailen', 'Stukken sturen', 'Intakegesprek', 'Plaatsing'],
  routeStatus: 'bevestigd' as Status,
  beschikbaarheid: 'Bel voor de actuele stand.',
  geenFormulier: 'Via het contactformulier kun je een eerste vraag stellen of een aanmelding bespreken. Stuur geen cliëntgegevens, medische informatie of andere gevoelige gegevens via het formulier.',
};

export interface Vraag {
  sleutel: string;
  lezer: Lezer;
  vraag: string;
  feit: string;
  uitleg: string;
  status: Status;
}

export const vragen: Vraag[] = [
  { sleutel: 'voor-wie', lezer: 'jongere', vraag: 'Voor wie is Potens Cura?', feit: `Potens Cura in Arnhem is er voor ${doelgroep.tekst} ${doelgroep.situatie}, ${doelgroep.problematiek}.`, uitleg: `Je woont (semi)zelfstandig in een eigen studio, met ${begeleiding.naam}. De begeleiding wordt afgestemd op wat jij nodig hebt.`, status: 'bevestigd' },
  { sleutel: 'eigen-studio', lezer: 'jongere', vraag: 'Heb ik een eigen kamer?', feit: 'Ja, bij Potens Cura woon je in een eigen studio met een eigen keuken.', uitleg: 'Er zijn vier studio\'s. Badkamer en toiletten deel je met de andere jongeren.', status: 'bevestigd' },
  { sleutel: 'nacht', lezer: 'jongere', vraag: 'Is er \'s nachts ook iemand?', feit: `Ja, Potens Cura biedt ${begeleiding.naam}: dag en nacht, zeven dagen per week.`, uitleg: 'Overdag en ’s avonds is begeleiding aanwezig. Tijdens de nacht is er een slaapdienst op de woonlocatie.', status: 'bevestigd' },
  { sleutel: 'werkwijze', lezer: 'ouder', vraag: 'Hoe werken de begeleiders?', feit: 'De begeleiders van Potens Cura bouwen eerst een band op met de jongere en stemmen de begeleiding af op wat die jongere nodig heeft.', uitleg: 'Samen met de jongere en het netwerk stellen ze doelen op voor het perspectiefplan, en die bekijken ze op vaste momenten. Ze werken met de presentiebenadering, systeemgericht en cultuursensitief.', status: 'bevestigd' },
  { sleutel: 'perspectiefplan', lezer: 'ouder', vraag: 'Wat is een perspectiefplan?', feit: 'In het perspectiefplan staan de doelen van de jongere, opgesteld samen met de jongere en het netwerk.', uitleg: 'Op vaste momenten kijkt Potens Cura hoe het gaat met de doelen. Ouders en familie horen bij het netwerk van de jongere.', status: 'bevestigd' },
  { sleutel: 'doel', lezer: 'ouder', vraag: 'Wat is het doel van de begeleiding?', feit: 'De begeleiding richt zich op persoonlijke ontwikkeling, het versterken van vaardigheden en een passend toekomstperspectief.', uitleg: 'Samen met de jongere bepalen we welke stappen nodig zijn. Dat kan gericht zijn op zelfstandig wonen, terugkeer naar huis of een andere passende woonvorm.', status: 'bevestigd' },
  { sleutel: 'familie', lezer: 'ouder', vraag: 'Wordt onze familie betrokken?', feit: 'Ja, Potens Cura werkt systeemgericht: ouders, familie en netwerk horen bij de begeleiding.', uitleg: 'Samen met je kind en het netwerk stellen we de doelen op voor het perspectiefplan. Op vaste momenten kijken we hoe het gaat.', status: 'bevestigd' },
  { sleutel: 'skj', lezer: 'ouder', vraag: 'Wat betekent een registratie bij SKJ?', feit: 'Bij Potens Cura werken SKJ-geregistreerde jeugdprofessionals.', uitleg: 'Wie bij SKJ is geregistreerd, voldoet aan de eisen voor vakbekwaamheid en schoolt zich regelmatig bij. Het register is openbaar: je kunt het zelf nakijken op skjeugd.nl.', status: 'bevestigd' },
  { sleutel: 'aanmelden', lezer: 'verwijzer', vraag: 'Hoe meld ik een jongere aan?', feit: 'Je meldt een jongere aan door Potens Cura te bellen of te mailen.', uitleg: 'Voor een eerste vraag kun je bellen, mailen of het contactformulier gebruiken. Stuur geen cliëntgegevens of gezondheidsinformatie via het openbare formulier. Stem vertrouwelijke gegevensoverdracht vooraf met ons af.', status: 'bevestigd' },
  { sleutel: 'intake', lezer: 'verwijzer', vraag: 'Hoe gaat een plaatsing?', feit: 'Voor een plaatsing voert Potens Cura eerst een intakegesprek, om te kijken of het wonen en de begeleiding bij de jongere passen.', uitleg: 'Past het, dan spreken we af wanneer de jongere komt wonen.', status: 'bevestigd' },
  { sleutel: 'plek', lezer: 'verwijzer', vraag: 'Is er plek?', feit: 'Bel Potens Cura voor de actuele stand van de plekken.', uitleg: 'Zo hoor je meteen of er plek is, en zo niet, wanneer wel.', status: 'bevestigd' },
  { sleutel: 'begeleiding', lezer: 'verwijzer', vraag: 'Welke begeleiding biedt Potens Cura?', feit: `Potens Cura biedt ${begeleiding.naam} bij kleinschalig wonen in vier studio's, voor ${doelgroep.tekst}.`, uitleg: `${begeleiding.zin} De begeleiders bouwen eerst een band op en werken met een perspectiefplan, samen met de jongere en het netwerk.`, status: 'bevestigd' },
  { sleutel: 'dagbesteding', lezer: 'verwijzer', vraag: 'Heeft een jongere een dagbesteding nodig?', feit: 'Ja, wie bij Potens Cura woont, heeft een passende dagbesteding nodig.', uitleg: 'Bijvoorbeeld school of werk.', status: 'bevestigd' },
  { sleutel: 'financiering', lezer: 'verwijzer', vraag: 'Hoe werkt de financiering?', feit: financiering.antwoord, uitleg: financiering.gemeente, status: 'bevestigd' },
  { sleutel: 'waar', lezer: 'verwijzer', vraag: 'Waar ligt de woonlocatie?', feit: 'De woonlocatie van Potens Cura ligt in Arnhem.', uitleg: 'Johan de Wittlaan 75, 6828 XD Arnhem. Bezoek en kennismakingsgesprekken vinden plaats op afspraak.', status: 'te-bevestigen' },
];

export const lezers = {
  jongere: { knop: 'Voor mezelf', hint: 'Je studio, de afspraken en wat we vragen.', volgorde: ['studio', 'route', 'werkwijze', 'vragen', 'aanmelden', 'werken'], stap: 'Bekijk je studio' },
  ouder: { knop: 'Voor mijn kind', hint: 'Hoe we werken en hoe jullie meedoen.', volgorde: ['werkwijze', 'studio', 'route', 'vragen', 'aanmelden', 'werken'], stap: 'Zo werken we' },
  verwijzer: { knop: 'Voor iemand die ik begeleid', hint: 'De aanmeldkaart en wie je belt.', volgorde: ['aanmelden', 'route', 'werkwijze', 'studio', 'vragen', 'werken'], stap: 'Naar de aanmeldkaart' },
  collega: { knop: 'Ik wil hier werken', hint: 'Wat je doet en hoe je solliciteert.', volgorde: ['werken', 'werkwijze', 'route', 'studio', 'vragen', 'aanmelden'], stap: 'Zo ziet je werk eruit' },
} satisfies Record<Lezer, { knop: string; hint: string; volgorde: string[]; stap: string }>;

export const paginas = {
  home: { pad: '/', title: 'Kleinschalig wonen voor jongeren in Arnhem | Potens Cura', description: 'Kleinschalig wonen in Arnhem voor jongeren van 16 tot 23 jaar die een stabiele woonplek en persoonlijke begeleiding nodig hebben. Met 24/7 begeleiding op locatie.', h1: 'Wonen met perspectief.' },
  wonen: { pad: '/wonen', title: 'Wonen in een eigen studio in Arnhem | Potens Cura', description: 'Zo woon je bij Potens Cura in Arnhem: een eigen studio met keuken, 24-uursbegeleiding, je familie en netwerk, en wie het betaalt. Voor jongeren van 16 tot 23.', h1: 'Wonen in je eigen studio in Arnhem' },
  verwijzers: { pad: '/verwijzers', title: 'Een jongere aanmelden in Arnhem | Potens Cura', description: 'De aanmeldkaart voor verwijzers: voor wie, wat Potens Cura biedt, het intakegesprek voor de plaatsing en wie je belt. Jongeren van 16 tot 23 in Arnhem.', h1: 'Zo meld je een jongere aan' },
  werken: { pad: '/werken-bij', title: 'Werken als begeleider in Arnhem | Potens Cura', description: 'Begeleider worden bij Potens Cura in Arnhem: kleinschalig wonen voor jongeren van 16 tot 23, op wisselende tijden. Zie wat je doet en solliciteer direct.', h1: 'Begeleider worden in Arnhem' },
  over: { pad: '/over-ons', title: 'Over Potens Cura: kleinschalig wonen in Arnhem', description: 'Het doel, de missie en de visie van Potens Cura, hoe de begeleiders werken en wat SKJ en de klachtenregeling betekenen. Kleinschalig wonen in Arnhem.', h1: 'Over Potens Cura in Arnhem' },
  contact: { pad: '/contact', title: 'Contact met Potens Cura in Arnhem', description: 'Neem contact op met Potens Cura in Arnhem voor vragen over de woonvoorziening, begeleiding of aanmelding.', h1: 'Contact met Potens Cura' },
  privacy: { pad: '/privacy', title: 'Privacy | Potens Cura', description: 'Welke gegevens Potens Cura verwerkt via deze website en waarom.', h1: 'Privacy bij Potens Cura' },
  klachten: { pad: '/klachten', title: 'Een klacht indienen | Potens Cura', description: 'Zo dien je een klacht in bij Potens Cura, gratis via Klachtenportaal Zorg, en zo vind je een onafhankelijke vertrouwenspersoon.', h1: 'Zo dien je een klacht in' },
};
