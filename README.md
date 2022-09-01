# Medievalbay

## Project Description

From Crossbows to Polearms and towering shields to Halberds, you can find all you could ever need **and** want in your next fight against the majestic dragon of the mountain! Finally you and your family can rest easy in the knowledge that your trusty weapon bought from our E-commerce will last more than a thousand battles!

---

## How to build & run

Recreational instructions in progress...

Link to documentation of component library(?) in progress

Stand "Medievalbay folder" to initialize the settings.json

---

# Webbshop med React + TS

I den här inlämningen ska ni i grupp skapa en webb-store med hjälp av React och
Typescript. Använd en boiler setup baserad på Webpack eller Vite. Ni ska även använda
ett komponentbibliotek [Material-UI | Mantine| CharkaUI, Bootstrap React]. Det ni
primärt ska fokusera på att skapa är tre sidor, en startsida, en produktsida och ett
utcheckningsflöde.

Inlämingen är ett grupparbete för 4 personer.

**Läs noga igenom hela uppgiftsbeskrivningen innan ni börjar.**

## Inlämning

För att bli godkänd på den här uppgiften MÅSTE ni använda GIT och GitHub.
Inlämningen sker som vanligt på läroplattformen där ni ska zippa ihop projektmappen
(kom ihåg att ta bort node_modules). I projektmappen ska det finnas (utöver all kod) en
README.md fil. Den ska innehålla en titel, beskrivning av projektet, info om hur
projektet byggs och körs samt länk till dokumentationen för designsystemet som används,
mm.

## Presentation

Ni ska vid presentationstillfället hålla i ett muntlig presentation inför klassen. Följande
punkter skall förklaras under presentationen:

- Genomgång av och presentation av det byggda systemet och dess UX.
- Kortare genomgång av kodens struktur och flöde.
- Vad som har fungera bra och vad som varit svårt under projektets gång.

Uppgiftsbeskrivningen
Det ni ska skapa är en klassisk e-handel sida som presenterar ett antal olika produkter.
Vilka typer av produkter som säljs är valfritt men det ska vara seriöst och välgjort. Det ska
vara möjligt att klicka på en produkt för att kunna läsa mer om den. Från både startsidan
och produktsidan ska det vara möjligt att lägga till produkter i en kundvagn och det ska
tydlig framgå för användaren när produkten läggs till i kundvagnen.
Utcheckningsflödet skall ligga på en egen sida och innehålla delarna Kundvagn, Dina
uppgifter.

# 1

## Utcheckningsflödet

### Kundvagn

Ska lista tillagda produkter (bild & titel) dess antal, pris och kundvagnens totalpris. Det
ska vara möjligt att uppdatera kundvagnen - dvs ändra antalet av en produkt eller ta bort
en produkt helt från kundvagnen. Totalpriset ska alltid uppdateras och vara korrekt.

### Dina uppgifter

Ska vara ett formulär där man fyller i namn, mail, telefonnummer och adress. Fälten i
formuläret ska gå att automatisk fyllas i. Fälten ska ha validering.

### Avgränsningar

Frakt, betalning, inlogg, mail, sparande av order etc är vanligt förekommande
funktionalitet på E-handelssidor och ska inte göras i den här uppgiften. Däremot ska det
visas en bekräftelsesida vid slutförande av en beställning.

**Adminsidan (VG)**

Det skall finnas en knapp på startsidan som tar användaren till adminsidan. På
adminsidan skall ni lista alla produkter samt ge användaren möjlighet att ta bort, lägga till
eller ändra samtliga produkter (CRUD). Om ni väljer att ha en separat sida eller annat UI
för ändring/tilläggning av en produkt är upp till er. Samtliga produkter skall vara
sparade i localstorage, detta betyder att om localstorage är tomt vid inladdning av sidan
behöver samtliga fördefinierade produkter sparas till localstorage. Använd en URL för
bilder så det enkelt kan sparas i localstorage.

# 2

Krav för godkänt:

1. Git & GitHub har använts
2. Projektmappen innehåller en README.md fil - (läs ovan för mer info)
3. Uppgiften lämnas in i tid!
4. React, Typescript & ett komponentbibliotek ska används
5. React Router används för navigering
6. Formulären vid utcheckningen ska gå att automatiskt fyllas i
7. Samtliga fält ska ha valideringsregler
8. Hemsidan ska vara fullt responsiv (ner till 360px)
9. Mockade produkter ska finnas i en egen fil och vara typade med ett TS interface
10. Projektet skall läggas upp på Netlify eller liknande tjänst.
    Krav för väl godkänt:
11. Alla punkter för godkänt är uppfyllda
12. Det finns en admin-sida där man kan ändra, lägga till eller ta bort produkter på sidan
13. Samtliga produkter skall vara sparade i localstorage (om localstorage är tom då sidan
    läses in behöver samtliga fördefinierade produkter sparas där)

Do you have any questions or need something explained in English? - Please feel free to
ask me during a lecture. Good luck!
