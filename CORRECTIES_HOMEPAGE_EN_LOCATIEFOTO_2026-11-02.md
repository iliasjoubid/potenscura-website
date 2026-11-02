# Correcties aan homepage en locatiefoto — 2 november 2026

## Gecontroleerd en aangepast

- De homepage (`app/page.tsx`) bevat uitsluitend de vijf afgesproken secties: introductie, wonen, begeleiding, werkwijze en contact; geen FAQ-/vragenblok.
- De oude, ongebruikte componenten `VragenKeuze.tsx` en `VraagGroepen.tsx`, inclusief de vraaggegevens, zijn verwijderd. De route `/vragen` blijft alleen bestaan als een redirect naar `/wonen` voor bestaande links.
- De zichtbare, onjuiste tekst **'Illustratie van een woonomgeving; geen foto van de locatie.'** onder de echte locatiefoto op de pagina Wonen is verwijderd. De afbeelding en de beschrijvende alt-tekst **'Foto van de woonlocatie van Potens Cura'** zijn behouden.
- De link vanaf Wonen naar de oude homepage-anker `/#route` verwijst nu naar de bestaande pagina `/traject`.
- De overige illustratieve beelden zijn niet als echte locatiefoto's aangeduid; de bijbehorende beschrijvingen zijn bewust ongemoeid gelaten.

## Let op bij het bekijken

Deze ZIP is een **broncodepakket**. Een ZIP downloaden of uploaden in de chat wijzigt **niet** vanzelf de livewebsite op potenscura.nl. Als daar nog oude vragen of fototeksten staan, moet de nieuwe versie via GitHub/Vercel worden gedeployed. Controleer of de broncode daadwerkelijk op de juiste branch staat en of de deployment succesvol is. Probeer daarna desgewenst een privévenster of harde verversing.

De pagina's zijn niet via de livewebsite te verifiëren vanuit deze omgeving; formulierverzending en de productiebuild zijn eveneens niet als voltooid aangemerkt.
