# Potens Cura — website (reviewversie 2 november 2026)

Next.js-broncode van de website van Potens Cura B.V. Deze ZIP is bedoeld voor beoordeling via een afzonderlijke previewbranch, **niet voor rechtstreeks overschrijven van de livewebsite**.

## Lokaal bekijken en testen

Vereist: Node.js 20+ en npm. Voer in deze map uit:

```bash
npm ci
npm run build
npm run dev
```

Open http://localhost:3000 en controleer alle pagina's op telefoon, tablet en desktop. Verifieer de tekst en het downloaden van beide PDF's.

## Publicatie

De instelling `concept` in `lib/gegevens.ts` staat op `false` (volgens eerdere live-instelling). **Dit betekent niet dat de ZIP zelfstandig geschikt is verklaard voor publicatie**. Test de site eerst via een previewbranch. Pas na expliciete goedkeuring mergen naar `main`.

## Contactformulieren

De backend verstuurt via Resend **alleen als** de drie omgevingsvariabelen in Vercel zijn ingesteld: `RESEND_API_KEY`, `BERICHT_AAN`, `BERICHT_VAN`. Zonder deze configuratie toont het formulier een foutmelding. Configureer een geverifieerd afzenderdomein, test het contact- én sollicitatieformulier met ontvangst in de inbox, en controleer privacy- en bewaarbeleid.

Cliëntgegevens, medische documenten of andere vertrouwelijke informatie nooit via het openbare formulier versturen. Maak voor vertrouwelijke stukken vooraf een veilige overdrachtswijze bekend.

## In- en exclusiecriteria

De website beschrijft het actuele Jeugdwet-aanbod voor jongeren van 16 tot 23 jaar en maakt onderscheid tussen 24/7 aanwezige begeleiding met slaapdienst en voortdurend individueel toezicht. De bijgevoegde criteria-PDF is redactioneel op deze punten afgestemd. De inhoudelijke criteria moeten door Potens Cura formeel worden vastgesteld.

## Beelden en partnerlogo's

De foto bij de introductie op de homepage is volgens Potens Cura een **echte foto van de woonlocatie**. De overige sfeerbeelden zijn illustratief en niet als foto’s van bewoners of de locatie bedoeld. Controleer het recht om alle bestanden en logo's te publiceren; toestemming voor logo's van derden is niet automatisch gegeven.

## Nog te bevestigen vóór publicatie

- Verifieer de aansluiting en de precieze toepasselijke procedure van Klachtenportaal Zorg.
- Verifieer de juistheid en toepasselijkheid van de criteria-PDF en de financieringsafspraken.
- Verifieer dat feitelijke beveiligingsprocedures en privacyverklaring met de praktijk overeenkomen.
- Voer een productiebuild, browsercontrole (desktop en mobiel) en verzendtest uit.

De website is inhoudelijk en technisch nagelopen voor zover in de meegeleverde controle-notities vermeld. Ongeteste onderdelen worden niet als bewezen werkend aangemerkt.

## Homepage vernieuwd (2 november 2026)

De homepage bestaat nu uit vijf onderdelen: introductie met foto van de woonlocatie, wonen, begeleiding, een overzicht in vier stappen en een contactoproep. Het interactieve vragenblok, de uitgebreide route en het onderdeel ‘Werken bij’ zijn van de homepage weggehaald. De pagina `/werken-bij` en de uitgebreidere trajectpagina blijven beschikbaar. De oude URL `/vragen` verwijst voortaan naar `/wonen`.

Controleer bij publicatie of de daadwerkelijke foto van de woonlocatie met toestemming kan worden gepubliceerd, gelet op privacy en veiligheid van de jongeren.
