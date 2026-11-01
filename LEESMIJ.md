# Potens Cura – website

Deze map bevat de broncode van de website van Potens Cura. De website is gebouwd met Next.js. De productieversie wordt via Vercel gepubliceerd; wijzigingen op de gekoppelde GitHub-branch starten automatisch een nieuwe build.

## Inhoud van deze versie

- De homepage legt nadruk op kleinschalig wonen, de vier eigen studio's en persoonlijke begeleiding.
- De woonpagina beschrijft de studio's, gedeelde voorzieningen, begeleiding, netwerk en financiering.
- De pagina voor verwijzers geeft een beknopt en duidelijk aanmeldproces.
- De doelgroeptekst is aangescherpt: nadruk op de woon- en begeleidingsbehoefte, ontwikkeling, eigen regie en zelfstandigheid, niet op een lijst met diagnoses.
- Er is een eigen pagina met inclusie- en exclusiecriteria toegevoegd, met een bijbehorende PDF in de huisstijl van Potens Cura.
- De aanmeldkaart en de downloadbare PDF zijn aangepast en verwijzen naar de volledige plaatsingscriteria.
- De eerder als voorbeeld gemarkeerde onderdelen zijn vervangen door een beknopte, consistente uitleg van de woonvorm en werkwijze.
- De website is ingesteld op productie (`concept = false`). Zoekmachines mogen de openbare pagina's indexeren.

## Belangrijk vóór publicatie

**Inhoudelijke accordering vereist:** de inclusie- en exclusiecriteria in deze versie zijn een zorgvuldig geformuleerd voorstel op basis van de beschreven woonvorm en ondersteuningsmogelijkheden. Potens Cura heeft in de aangeleverde informatie nog geen formeel vastgesteld eigen criteriadocument aangeleverd. Laat de criteria vóór publicatie of gebruik bij plaatsingsbesluiten inhoudelijk toetsen en formeel vaststellen door de verantwoordelijke bestuurder en zo nodig gedragsdeskundige/gemeente. Pas de tekst aan op de feitelijke personele bezetting, deskundigheid, veiligheidsbeleid en zorggrenzen. De criteria zijn nadrukkelijk geen automatische uitsluitingslijst.

1. Controleer alle teksten, contactgegevens, doelgroep en de beschrijving van 24-uursbegeleiding.
2. Controleer of de privacyverklaring aansluit op de werkelijke bewaartermijnen en verwerkersafspraken van Potens Cura.
3. Configureer de formulierverzending in Vercel via **Settings → Environment Variables** voor Production:
   - `RESEND_API_KEY`: de API-sleutel van Resend.
   - `BERICHT_AAN`: het e-mailadres dat de formulieren ontvangt, bijvoorbeeld `info@potenscura.nl`.
   - `BERICHT_VAN`: een geverifieerd afzenderadres, bijvoorbeeld `Website Potens Cura <website@potenscura.nl>`.
4. Als deze waarden niet zijn ingesteld, worden formulieren niet verzonden. De bezoeker krijgt een foutmelding met de mogelijkheid om Potens Cura rechtstreeks te mailen of te bellen.
5. Test na publicatie zowel het contactformulier als het sollicitatieformulier. Gebruik daarbij geen gegevens van echte cliënten.

**De website vraagt bewust niet om een aanmelding van een jongere via een formulier.** Bijzondere persoonsgegevens horen niet thuis in een gewoon webformulier. Stem een veilige manier van gegevensuitwisseling vooraf af.

## Lokale controle

Gebruik Node.js 20 of nieuwer:

```bash
npm ci
npm run build
npm run dev
```

Open daarna `http://localhost:3000`.

## Zelf aanpassen

- Feiten, doelgroep, werkwijze, veelgestelde vragen en SEO-teksten: `lib/gegevens.ts`.
- Inclusie- en exclusiecriteria: `app/in-en-exclusiecriteria/page.tsx` en `public/in-en-exclusiecriteria-potens-cura.pdf`.
- Telefoonnummer en e-mailadres: `lib/site.ts`.
- Homepage: `app/page.tsx` en `components/Held.tsx`.
- Overige pagina's: `app/<pagina>/page.tsx`.
- Fotoverwijzingen, bronnen en licenties: `lib/beeld.ts`.
- Afbeeldingsbestanden: `public/beeld/`.
- Aanmeldkaart: `components/Aanmeldkaart.tsx` en `public/aanmeldkaart-potens-cura.pdf`.

## Licenties

- Lettertype Commissioner: SIL Open Font License, zie `public/fonts/OFL-commissioner.txt`.
- Fotobronnen, makers en licenties staan bij de fotoverwijzingen in `lib/beeld.ts`.
- Logo's van Klachtenportaal Zorg, Jeugdstem en Adviespunt Zorgbelang zijn eigendom van de betreffende organisaties.
