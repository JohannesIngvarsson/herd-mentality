import { useMemo, useState } from "react";
import "./App.css";

const categories = [
  "Mat & dryck",
  "Vardag",
  "Fest & socialt",
  "Popkultur",
  "Film",
  "Knasigt",
  "Vuxet",
  "Resor & upplevelser",
  "Kontor & ingenjörsliv"
];
const questions = [
  {
    "category": "Mat & dryck",
    "text": "Vad är den bästa pizzatoppingen?"
  },
  {
    "category": "Mat & dryck",
    "text": "Du får en fruktkorg med bara en sorts frukt. Vad hoppas du på?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är det första man plockar från ett julbord?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är godast att doppa i kaffet?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken sås hör hemma på en korv med bröd?"
  },
  {
    "category": "Mat & dryck",
    "text": "Barndomens bästa glassmak?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är det första du går på vid hotellfrukosten?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken maträtt är svårast att äta snyggt?"
  },
  {
    "category": "Mat & dryck",
    "text": "Hur många dagar i rad skulle du kunna äta samma middag?"
  },
  {
    "category": "Mat & dryck",
    "text": "Hur många köttbullar är en lagom portion?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilket godis ligger alltid kvar sist i skålen?"
  },
  {
    "category": "Mat & dryck",
    "text": "Efter en sen utekväll – vad äter man?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är den mest typiska maten på ett barnkalas?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilket pålägg skulle du aldrig vilja ha på en pizza?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är lättast att råka bränna vid matlagning?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken maträtt passar sämst att äta i bilen?"
  },
  {
    "category": "Mat & dryck",
    "text": "Hur mycket skulle du betala för en riktigt bra hamburgare, i kronor?"
  },
  {
    "category": "Mat & dryck",
    "text": "Hur många pizzabitar är lagom att äta?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är jobbigast att skala i fruktdisken?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är den mest klassiska smaken på chips?"
  },
  {
    "category": "Mat & dryck",
    "text": "Hur många koppar kaffe är för många på en dag?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad smakar bäst som rester dagen efter?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är det värsta någon kan lägga på din smörgås?"
  },
  {
    "category": "Vardag",
    "text": "Vad är det första man gör när man kommer hem?"
  },
  {
    "category": "Vardag",
    "text": "Hur ofta borde man egentligen dammsuga hemma, per vecka?"
  },
  {
    "category": "Vardag",
    "text": "Vad glömmer folk oftast när de lämnar hemmet?"
  },
  {
    "category": "Vardag",
    "text": "När på dagen är det svårast att hålla sig vaken?"
  },
  {
    "category": "Vardag",
    "text": "Vilken förbrukningsvara är värst att få slut på hemma?"
  },
  {
    "category": "Vardag",
    "text": "Vad försvinner mystiskt i tvättmaskinen?"
  },
  {
    "category": "Vardag",
    "text": "Vad gör folk när de väntar på bussen?"
  },
  {
    "category": "Vardag",
    "text": "Strömavbrott i ett dygn. Vad saknar du mest?"
  },
  {
    "category": "Vardag",
    "text": "Vad är det mest självklara föremålet i ett hotellrum?"
  },
  {
    "category": "Vardag",
    "text": "Hur många kuddar ska man ha i en säng?"
  },
  {
    "category": "Vardag",
    "text": "Vilket ljud är det värsta att vakna av?"
  },
  {
    "category": "Vardag",
    "text": "Vad tappar folk bort hela tiden?"
  },
  {
    "category": "Vardag",
    "text": "Vad är det vanligaste att ha i fickan?"
  },
  {
    "category": "Vardag",
    "text": "Vilket färdmedel blir man oftast sen med?"
  },
  {
    "category": "Vardag",
    "text": "Hur många alarm behöver man på morgonen?"
  },
  {
    "category": "Vardag",
    "text": "Vilken badrumspryl skulle du sakna mest?"
  },
  {
    "category": "Vardag",
    "text": "Var hemma lägger folk oftast sina nycklar?"
  },
  {
    "category": "Vardag",
    "text": "Mobilen dör. Vad letar du efter?"
  },
  {
    "category": "Vardag",
    "text": "Vilken plats i hemmet är lättast att stöka ner?"
  },
  {
    "category": "Vardag",
    "text": "Vad är det mest irriterande att stå i kö till?"
  },
  {
    "category": "Vardag",
    "text": "Hur många minuter är rimligt att duscha?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad tar alltid slut först på festen?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är den vanligaste gå-bort-presenten?"
  },
  {
    "category": "Fest & socialt",
    "text": "Allsång på festen – vad sjunger alla?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är det pinsammaste att spilla på en fest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad glömmer folk oftast att ta med till förfesten?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilket sällskapsspel orsakar mest bråk?"
  },
  {
    "category": "Fest & socialt",
    "text": "När borde en hemmafest senast sluta?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad brukar folk ta med för mycket av till festen?"
  },
  {
    "category": "Fest & socialt",
    "text": "Hur många personer är lagom på en middag hemma?"
  },
  {
    "category": "Fest & socialt",
    "text": "Var på ett bröllop vill du helst sitta?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken dans gör folk som inte kan dansa?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är det mest klassiska att servera som välkomstdrink?"
  },
  {
    "category": "Fest & socialt",
    "text": "Förfest – vad dricker flest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Hur många försök behövs för ett lyckat gruppfoto?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilket spel borde alla förfester ha?"
  },
  {
    "category": "Fest & socialt",
    "text": "Hur sent är det okej att dyka upp till en fest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Fest mitt i veckan – sämsta dagen?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken typ av musik passar sämst på en dansfest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Hur många snapsvisor är lagom på en kräftskiva?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilket föremål är mest sannolikt att någon använder som mikrofon?"
  },
  {
    "category": "Fest & socialt",
    "text": "Kräftskiva – vilken låt måste spelas?"
  },
  {
    "category": "Popkultur",
    "text": "En filmfigur med helt omisskännlig frisyr. Vem?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken låt passar bäst på karaoke?"
  },
  {
    "category": "Popkultur",
    "text": "En svensk artist som alla kan sjunga med till?"
  },
  {
    "category": "Popkultur",
    "text": "Vem är den mest ikoniska tecknade skurken?"
  },
  {
    "category": "Popkultur",
    "text": "Hur många avsnitt i rad räknas som en tv-maraton?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken superhjälte skulle vara sämst på ett kontorsjobb?"
  },
  {
    "category": "Popkultur",
    "text": "Hur många timmar i sträck är för mycket tv-spel?"
  },
  {
    "category": "Popkultur",
    "text": "Vem borde leda Melodifestivalen?"
  },
  {
    "category": "Popkultur",
    "text": "Vad är det första man tänker på när man hör ordet Disney?"
  },
  {
    "category": "Popkultur",
    "text": "Bröllopsfest. Vad spelar DJ:n garanterat?"
  },
  {
    "category": "Popkultur",
    "text": "Vad är den mest igenkännbara tv-signaturen?"
  },
  {
    "category": "Popkultur",
    "text": "Hur många minuter får ett tv-program vara innan det känns för långt?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken kändis skulle passa bäst i en dokusåpa?"
  },
  {
    "category": "Popkultur",
    "text": "Vad är det mest klassiska tv-spelet?"
  },
  {
    "category": "Popkultur",
    "text": "Världens mest kända filmhund?"
  },
  {
    "category": "Popkultur",
    "text": "Julfilm nummer ett?"
  },
  {
    "category": "Popkultur",
    "text": "Vem skulle du helst ha som lagkamrat i På spåret?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken seriefigur har den mest igenkännbara rösten?"
  },
  {
    "category": "Popkultur",
    "text": "Vad är det mest klassiska instrumentet i ett rockband?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken tv-karaktär skulle vara sämst som chef?"
  },
  {
    "category": "Popkultur",
    "text": "Vilket föremål förknippar du mest med Harry Potter?"
  },
  {
    "category": "Popkultur",
    "text": "Vilket spel leder snabbast till familjebråk?"
  },
  {
    "category": "Popkultur",
    "text": "Gratis konsert på torget. Vem drar mest folk?"
  },
  {
    "category": "Knasigt",
    "text": "Hur många katter är för många att ha hemma?"
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur vore värst att hitta under täcket?"
  },
  {
    "category": "Knasigt",
    "text": "En extra kroppsdel – vad vore jobbigast?"
  },
  {
    "category": "Knasigt",
    "text": "Var skulle du gömma dig om en zombie kom in i huset?"
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle bli den bästa taxichauffören?"
  },
  {
    "category": "Knasigt",
    "text": "Om alla människor fick svans, vilket djur borde den likna?"
  },
  {
    "category": "Knasigt",
    "text": "Vilken sak borde absolut inte tillverkas i glas?"
  },
  {
    "category": "Knasigt",
    "text": "En vardagspryl i jätteformat. Vad blir roligast?"
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle passa bäst i kostym?"
  },
  {
    "category": "Knasigt",
    "text": "Hur många gånger om dagen borde man borsta tänderna?"
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle vinna en danstävling?"
  },
  {
    "category": "Knasigt",
    "text": "Var skulle du helst gömma en skatt?"
  },
  {
    "category": "Knasigt",
    "text": "Vilken sport skulle vara roligast om alla spelare hade simfötter?"
  },
  {
    "category": "Knasigt",
    "text": "Vad är det sämsta man kan använda som paraply?"
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle bli den sämsta hemliga agenten?"
  },
  {
    "category": "Knasigt",
    "text": "Du upptäcker en ny planet. Vad har den för färg?"
  },
  {
    "category": "Knasigt",
    "text": "Vilken pryl skulle bli sämre med en touchskärm?"
  },
  {
    "category": "Knasigt",
    "text": "Vilken maträtt skulle vara värst att få kastad på sig?"
  },
  {
    "category": "Knasigt",
    "text": "Hur många personer borde få följa med på första resan till Mars?"
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle se mest skrämmande ut i människostorlek?"
  },
  {
    "category": "Knasigt",
    "text": "Hur många robotar skulle du vilja ha hemma?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken maträtt är sämst på en första dejt?"
  },
  {
    "category": "Vuxet",
    "text": "Dejtingappar – vilken tänker du på först?"
  },
  {
    "category": "Vuxet",
    "text": "Du får gå på dejt med en kändis. Vem?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken låt passar sämst när man försöker vara romantisk?"
  },
  {
    "category": "Vuxet",
    "text": "Var är det värst att springa på sitt ex?"
  },
  {
    "category": "Vuxet",
    "text": "Vad är den värsta presenten att få av en partner?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken sak är mest avtändande på en dejt?"
  },
  {
    "category": "Vuxet",
    "text": "Hur länge borde en första dejt vara, i timmar?"
  },
  {
    "category": "Vuxet",
    "text": "En emoji till chefen av misstag – vilken är värst?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken dryck beställer någon som vill imponera på en dejt?"
  },
  {
    "category": "Vuxet",
    "text": "När är det för tidigt att börja julpynta?"
  },
  {
    "category": "Vuxet",
    "text": "Vem av alla kändisar kan minst hålla en hemlighet?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken emoji känns mest som ett dåligt raggningsförsök?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken emoji förknippar flest med flirt?"
  },
  {
    "category": "Vuxet",
    "text": "Vad är den mest attraktiva hobbyn?"
  },
  {
    "category": "Vuxet",
    "text": "Vad ger värst baksmälla?"
  },
  {
    "category": "Vuxet",
    "text": "Vilket djur vill du minst hitta i någons säng?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken känd person skulle vara mest besvärlig att ha som chef?"
  },
  {
    "category": "Vuxet",
    "text": "Vad är det värsta att hitta i någon annans badrum?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken maträtt är mest överskattad på en dejt?"
  },
  {
    "category": "Vuxet",
    "text": "Hur många dejter ska man gå på innan man blir ett par?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken typ av bild bör man undvika på sin dejtingprofil?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken maträtt är svårast att äta snyggt på en jobbmiddag?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det mest onödiga man ändå köper på flygplatsen?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Hur många dagar är en perfekt semesterresa?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det värsta att glömma hemma inför en resa?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilket djur hoppas man få se på safari?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Hur många timmar före flyget borde man vara på flygplatsen?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilket land förknippar du med riktigt god mat?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Efter en dag i skidbacken – vad gör man helst?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det värsta att upptäcka i sin resväska?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad fotograferar folk mest på semestern?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Var i världen skulle du helst fira nyår?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det mest klassiska att göra på en charterresa?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det mest förutsägbara köpet i taxfreebutiken?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Hur många timmar på ett tåg är för många?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Turistkartan: vad letar man efter först?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilken aktivitet är mest typisk för en möhippa eller svensexa?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad vore värst att tappa bort på ett hotell?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Var skulle du helst ha en sommarstuga?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det sista du vill sakna på en campingplats?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "På solsemestern bokar man en utflykt. Vad blir det?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad glömmer man alltid att packa – trots att man borde veta bättre?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Hur många länder borde man ha besökt före 40?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad skulle du helst vilja ha gratis på ett hotell?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Kontorets mest överskattade pryl?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Mötet börjar om en minut. Vad strular?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur många minuter borde ett vanligt jobbmöte vara?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad är det första som krånglar när chefen ska presentera?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad försvinner oftast ur kontorsköket?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilket fikabröd är mest populärt på kontoret?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "När på dagen är det sämst att boka ett möte?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "När går flest hem tidigt från jobbet?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur många koppar kaffe dricker en genomsnittlig kontorsanställd per dag?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Presentation om fem minuter. Vad krånglar?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur många personer är för många i ett projektmöte?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad är det första folk gör när fredagsfikat ställs fram?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad är det absolut värsta att spilla kaffe på?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken sak skulle du helst automatisera på jobbet?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad lånar kollegor och lämnar aldrig tillbaka?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Mest använda emojin i Teams?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur många möten per dag är för många?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken knapp glömmer flest att trycka på i Teams?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad är det mest irriterande att upptäcka när man ska skriva ut något?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad är den mest typiska prylen på en ingenjörs skrivbord?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilket verktyg på datorn skulle vara jobbigast att vara utan på jobbet?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur lång tid är rimligt att vänta på en ny jobbdator, i dagar?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur många versioner av en ritning är för många?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken typ av möte är mest onödig?"
  },
  {
    "category": "Mat & dryck",
    "text": "Om favoritpizzan är slut – vilken beställer du då?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken maträtt är mest överskattad?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad borde ingen människa behöva äta på en första dejt?"
  },
  {
    "category": "Vardag",
    "text": "Mataffärens jobbigaste avdelning?"
  },
  {
    "category": "Vardag",
    "text": "Vilken vardagssyssla känns mest som ett straff?"
  },
  {
    "category": "Fest & socialt",
    "text": "En drink som får för mycket beröm?"
  },
  {
    "category": "Knasigt",
    "text": "Vad skulle vara det näst sämsta husdjuret?"
  },
  {
    "category": "Knasigt",
    "text": "Vilken superkraft låter bra men vore mest opraktisk?"
  },
  {
    "category": "Vuxet",
    "text": "Vad stör sig folk mest på hos någon de dejtar?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken egenskap är viktigast hos en partner?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilket turistmål är mest överskattat?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad stör sig folk mest på hos sina kollegor?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "När på fredagen borde det vara förbjudet att boka möten?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilket ljud stör mest i ett öppet kontor?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur många dagar i veckan är lagom att jobba hemifrån?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "När på året är kontoret som tommast?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur många minuter före deadline bör man vara klar?"
  },
  {
    "category": "Film",
    "text": "Filmmusik som alla känner igen – från vilken film?"
  },
  {
    "category": "Film",
    "text": "Hur många gånger får man se samma film på bio?"
  },
  {
    "category": "Film",
    "text": "Hur lång får en film vara innan den känns för lång, i minuter?"
  },
  {
    "category": "Film",
    "text": "Vem är den största actionstjärnan?"
  },
  {
    "category": "Film",
    "text": "Gråtgaranti på film – vilken titel?"
  },
  {
    "category": "Film",
    "text": "Hur många filmer i en filmserie är lagom?"
  },
  {
    "category": "Film",
    "text": "Vilken film har den mest kända bilen?"
  },
  {
    "category": "Film",
    "text": "Vilken filmfigur skulle vara sämst som chef?"
  },
  {
    "category": "Film",
    "text": "Vilken filmfigur skulle du helst ha som granne?"
  },
  {
    "category": "Film",
    "text": "Film som alla kan citera?"
  },
  {
    "category": "Film",
    "text": "Hur gammal bör man vara när man ser sin första skräckfilm?"
  },
  {
    "category": "Film",
    "text": "Sjukdag i soffan – vad sätter du på?"
  },
  {
    "category": "Film",
    "text": "Hur många uppföljare borde en succéfilm få?"
  },
  {
    "category": "Film",
    "text": "Du hör ordet dinosauriefilm. Vad tänker du på?"
  },
  {
    "category": "Film",
    "text": "Filmserien som borde ha slutat tidigare?"
  },
  {
    "category": "Film",
    "text": "Vilken filmkaraktär har den coolaste bilen?"
  },
  {
    "category": "Film",
    "text": "Rymdfilm nummer ett?"
  },
  {
    "category": "Film",
    "text": "Vem borde bli nästa James Bond?"
  },
  {
    "category": "Film",
    "text": "Hur många minuter får en film vara innan den känns för kort?"
  },
  {
    "category": "Film",
    "text": "Pirater på film – vilken tänker du på?"
  },
  {
    "category": "Film",
    "text": "Vilken filmfigur har den mest igenkännbara hatten?"
  },
  {
    "category": "Film",
    "text": "Sveriges roligaste film?"
  },
  {
    "category": "Film",
    "text": "Vilken filmfigur skulle vara värst att sitta bredvid på flyget?"
  },
  {
    "category": "Film",
    "text": "Hajar på bio – vilken film?"
  },
  {
    "category": "Film",
    "text": "Vem är den roligaste skådespelaren?"
  },
  {
    "category": "Film",
    "text": "Hur många timmar är lagom för en filmdejt?"
  }
];

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function App() {
  const [selected, setSelected] = useState(categories);
  const [current, setCurrent] = useState(null);
  const [remaining, setRemaining] = useState([]);
  const [count, setCount] = useState(0);

  const available = useMemo(() => questions.filter(q => selected.includes(q.category)), [selected]);
  const allSelected = selected.length === categories.length;

  function changeCategory(category) {
    const next = selected.includes(category) ? selected.filter(x => x !== category) : [...selected, category];
    if (next.length === 0) return;
    setSelected(next);
    setRemaining([]);
    setCurrent(null);
    setCount(0);
  }

  function toggleAll() {
    setSelected(allSelected ? [categories[0]] : categories);
    setRemaining([]);
    setCurrent(null);
    setCount(0);
  }

  function nextQuestion() {
    const pool = remaining.length ? remaining : shuffle(available.map((_, i) => i));
    const index = pool[pool.length - 1];
    setCurrent(available[index]);
    setRemaining(pool.slice(0, -1));
    setCount(n => n + 1);
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        
        <h1>🐄 Herd Mentality Mobil</h1>
        <p>Tänk som flocken – inte som dig själv.</p>
      </header>

      <section className="filters" aria-label="Välj frågekategorier">
        <div className="filters-heading">
          <strong>Kategorier</strong>
          <button className="text-button" onClick={toggleAll}>{allSelected ? "Välj en" : "Välj alla"}</button>
        </div>
        <div className="chips">
          {categories.map(category => (
            <button
              key={category}
              type="button"
              className={selected.includes(category) ? "chip selected" : "chip"}
              aria-pressed={selected.includes(category)}
              onClick={() => changeCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="filter-count">{allSelected ? "🎲 Blandat – alla kategorier" : selected.length + " kategorier valda"} · {available.length} frågor</div>
      </section>

      <section className="game" aria-live="polite">
        <div className="question-card">
          <span className="question-label">{current ? current.category : "REDO ATT SPELA?"}</span>
          <div className="question-text">{current ? current.text : "Tryck på knappen för att dra en fråga!"}</div>
          <span className="question-number">{count ? "Fråga " + count : "🐄"}</span>
        </div>
        <button type="button" className="next-button" onClick={nextQuestion}>🎲 Ny fråga</button>
        <p className="hint">Svara med högst två ord, ett namn eller en siffra. Frågorna slumpas utan upprepning.</p>
      </section>
    </main>
  );
}
