import { useMemo, useState } from "react";
import "./App.css";

const categories = [
  "Mat & dryck",
  "Vardag",
  "Fest & socialt",
  "Popkultur",
  "Knasigt",
  "Vuxet",
  "Resor & upplevelser"
];
const questions = [
  {
    "category": "Mat & dryck",
    "text": "Vad är den bästa pizzatoppingen?"
  },
  {
    "category": "Mat & dryck",
    "text": "Nämn en maträtt som nästan alla kan laga."
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken frukt skulle du helst få i en fruktkorg?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är det första man plockar från ett julbord?"
  },
  {
    "category": "Mat & dryck",
    "text": "Nämn något som passar att doppa i kaffe."
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken sås hör hemma på en korv med bröd?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är det värsta att hitta i sin sallad?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken glassmak känns mest som barndom?"
  },
  {
    "category": "Mat & dryck",
    "text": "Nämn något man alltid hittar på ett frukostbuffébord."
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken maträtt är svårast att äta snyggt?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad skulle du äta om du vaknade hungrig klockan tre på natten?"
  },
  {
    "category": "Mat & dryck",
    "text": "Nämn en matvara som luktar värre än den smakar."
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är den mest självklara ingrediensen i en tacos?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken grönsak är lättast att känna igen med ögonbindel?"
  },
  {
    "category": "Mat & dryck",
    "text": "Nämn ett godis som ofta blir kvar sist i skålen."
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken mat beställer man efter en sen utekväll?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är den mest typiska maten på ett barnkalas?"
  },
  {
    "category": "Mat & dryck",
    "text": "Nämn en dryck som smakar bäst iskall."
  },
  {
    "category": "Mat & dryck",
    "text": "Vilket pålägg skulle du aldrig vilja ha på en pizza?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad tar man med till en picknick?"
  },
  {
    "category": "Mat & dryck",
    "text": "Nämn en sak man kan bränna vid matlagning."
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken maträtt passar sämst att äta i bilen?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad köper du om du bara får välja en sak i en godisbutik?"
  },
  {
    "category": "Mat & dryck",
    "text": "Nämn en efterrätt som brukar serveras på restaurang."
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken frukt är svårast att skala?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är den mest klassiska smaken på chips?"
  },
  {
    "category": "Mat & dryck",
    "text": "Nämn något man har ketchup på."
  },
  {
    "category": "Mat & dryck",
    "text": "Vad skulle du servera en utomjording till middag?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken mat är godast dagen efter?"
  },
  {
    "category": "Mat & dryck",
    "text": "Nämn en ingrediens som förstör en smörgås."
  },
  {
    "category": "Vardag",
    "text": "Nämn en sak som nästan alltid ligger i en hall."
  },
  {
    "category": "Vardag",
    "text": "Vad är det första man gör när man kommer hem?"
  },
  {
    "category": "Vardag",
    "text": "Vilken hushållssyssla är lättast att skjuta upp?"
  },
  {
    "category": "Vardag",
    "text": "Vad glömmer folk oftast när de lämnar hemmet?"
  },
  {
    "category": "Vardag",
    "text": "Nämn något man hittar längst in i en kökslåda."
  },
  {
    "category": "Vardag",
    "text": "Vilken veckodag känns längst?"
  },
  {
    "category": "Vardag",
    "text": "Vad är det mest irriterande att få slut på hemma?"
  },
  {
    "category": "Vardag",
    "text": "Nämn en sak som brukar försvinna i tvätten."
  },
  {
    "category": "Vardag",
    "text": "Vad gör folk när de väntar på bussen?"
  },
  {
    "category": "Vardag",
    "text": "Vilken pryl skulle du sakna mest vid strömavbrott?"
  },
  {
    "category": "Vardag",
    "text": "Nämn något som alltid finns i ett hotellrum."
  },
  {
    "category": "Vardag",
    "text": "Vad är det första man packar inför en semester?"
  },
  {
    "category": "Vardag",
    "text": "Vilken möbel är jobbigast att flytta?"
  },
  {
    "category": "Vardag",
    "text": "Vad skulle du köpa först om du flyttade hemifrån igen?"
  },
  {
    "category": "Vardag",
    "text": "Nämn ett ljud som kan väcka dig mitt i natten."
  },
  {
    "category": "Vardag",
    "text": "Vilken sak tappar folk bort oftast?"
  },
  {
    "category": "Vardag",
    "text": "Vad är det vanligaste att ha i fickan?"
  },
  {
    "category": "Vardag",
    "text": "Nämn en ursäkt för att komma för sent."
  },
  {
    "category": "Vardag",
    "text": "Vad brukar folk göra medan mikron går?"
  },
  {
    "category": "Vardag",
    "text": "Vilken månad känns som längst?"
  },
  {
    "category": "Vardag",
    "text": "Nämn en sak som alltid finns i ett badrum."
  },
  {
    "category": "Vardag",
    "text": "Vad är det värsta som kan hända i en hiss?"
  },
  {
    "category": "Vardag",
    "text": "Vilken vara glömmer man oftast att köpa?"
  },
  {
    "category": "Vardag",
    "text": "Vad är det första man gör när mobilen dör?"
  },
  {
    "category": "Vardag",
    "text": "Nämn något man köper och sedan nästan aldrig använder."
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
    "text": "Nämn något man alltid skjuter upp till söndag."
  },
  {
    "category": "Vardag",
    "text": "Vad skulle du rädda först om det började läcka vatten hemma?"
  },
  {
    "category": "Vardag",
    "text": "Vilken sak hemma borde uppfinnas på nytt?"
  },
  {
    "category": "Fest & socialt",
    "text": "Nämn något som alltid tar slut på en fest."
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är den vanligaste gå-bort-presenten?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken låt får flest att sjunga med?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är det pinsammaste att spilla på en fest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Nämn en sak som folk brukar glömma på en förfest."
  },
  {
    "category": "Fest & socialt",
    "text": "Vilket sällskapsspel orsakar mest bråk?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är det första man gör när man kommer till en fest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Nämn en ursäkt för att lämna festen tidigt."
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken dryck brukar någon ta med för mycket av?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är det värsta en DJ kan göra?"
  },
  {
    "category": "Fest & socialt",
    "text": "Nämn en sak som kan förstöra en middag med vänner."
  },
  {
    "category": "Fest & socialt",
    "text": "Vilket ämne leder oftast till diskussion vid middagsbordet?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är det vanligaste att fotografera på en fest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Nämn något man kan hitta på golvet efter en fest."
  },
  {
    "category": "Fest & socialt",
    "text": "Vad skulle du helst slippa på ett bröllop?"
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
    "text": "Nämn en sak folk gör när de börjar bli fulla."
  },
  {
    "category": "Fest & socialt",
    "text": "Vilket ord ropar någon alltid under ett gruppfoto?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är det värsta att upptäcka när gästerna redan kommit?"
  },
  {
    "category": "Fest & socialt",
    "text": "Nämn ett spel som passar på en förfest."
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken maträtt är mest opraktisk att servera på mingel?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är det vanligaste folk ljuger om när de tackar nej till en fest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Nämn en sak som kan gå sönder på en hemmafest."
  },
  {
    "category": "Fest & socialt",
    "text": "Vad skulle få dig att lämna en fest direkt?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken typ av musik passar sämst på en dansfest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Nämn något som nästan alltid finns på ett kräftskivebord."
  },
  {
    "category": "Fest & socialt",
    "text": "Vad brukar folk skåla för?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilket föremål är mest sannolikt att någon använder som mikrofon?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är det värsta att höra från grannen mitt under festen?"
  },
  {
    "category": "Popkultur",
    "text": "Nämn en filmfigur som nästan alla känner igen."
  },
  {
    "category": "Popkultur",
    "text": "Vilken låt passar bäst på karaoke?"
  },
  {
    "category": "Popkultur",
    "text": "Nämn en svensk artist som alla kan minst en låt av."
  },
  {
    "category": "Popkultur",
    "text": "Vilken film skulle du visa för någon som aldrig sett film?"
  },
  {
    "category": "Popkultur",
    "text": "Vem är den mest ikoniska tecknade skurken?"
  },
  {
    "category": "Popkultur",
    "text": "Nämn en tv-serie som folk gärna ser om."
  },
  {
    "category": "Popkultur",
    "text": "Vilken superhjälte skulle vara sämst på ett kontorsjobb?"
  },
  {
    "category": "Popkultur",
    "text": "Nämn ett spel som nästan alla har provat."
  },
  {
    "category": "Popkultur",
    "text": "Vilken kändis skulle vara roligast som programledare för Melodifestivalen?"
  },
  {
    "category": "Popkultur",
    "text": "Vad är det första man tänker på när man hör ordet Disney?"
  },
  {
    "category": "Popkultur",
    "text": "Nämn en låt som ofta spelas på bröllop."
  },
  {
    "category": "Popkultur",
    "text": "Vilken filmfigur skulle vara en hemsk granne?"
  },
  {
    "category": "Popkultur",
    "text": "Vad är den mest igenkännbara tv-signaturen?"
  },
  {
    "category": "Popkultur",
    "text": "Nämn en skådespelare som ofta spelar skurk."
  },
  {
    "category": "Popkultur",
    "text": "Vilket tv-program skulle du vilja tävla i?"
  },
  {
    "category": "Popkultur",
    "text": "Nämn en låt som alla kan refrängen till."
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
    "text": "Nämn en fiktiv hund från film eller tv."
  },
  {
    "category": "Popkultur",
    "text": "Vilken film förknippar du mest med julen?"
  },
  {
    "category": "Popkultur",
    "text": "Vem skulle du helst ha som lagkamrat i På spåret?"
  },
  {
    "category": "Popkultur",
    "text": "Nämn en film som innehåller en berömd bil."
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
    "text": "Nämn en känd person med ett artistnamn."
  },
  {
    "category": "Popkultur",
    "text": "Vilken tv-karaktär skulle vara sämst som chef?"
  },
  {
    "category": "Popkultur",
    "text": "Vad är det första du tänker på när du hör Harry Potter?"
  },
  {
    "category": "Popkultur",
    "text": "Nämn ett spel som passar att spela med familjen."
  },
  {
    "category": "Popkultur",
    "text": "Vilken artist skulle dra störst publik på en gratis konsert?"
  },
  {
    "category": "Popkultur",
    "text": "Nämn en film där ett djur har en viktig roll."
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle vara den sämsta rumskamraten?"
  },
  {
    "category": "Knasigt",
    "text": "Nämn något man inte vill hitta i sin säng."
  },
  {
    "category": "Knasigt",
    "text": "Vad skulle vara det värsta namnet på en hund?"
  },
  {
    "category": "Knasigt",
    "text": "Vilken kroppsdel skulle vara jobbigast att ha dubbelt av?"
  },
  {
    "category": "Knasigt",
    "text": "Nämn en sak som vore märklig att ha i kylskåpet."
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle bli den bästa taxichauffören?"
  },
  {
    "category": "Knasigt",
    "text": "Vad är det konstigaste man skulle kunna få i födelsedagspresent?"
  },
  {
    "category": "Knasigt",
    "text": "Om alla människor fick svans, vilket djur borde den likna?"
  },
  {
    "category": "Knasigt",
    "text": "Nämn något som aldrig borde vara gjort av glas."
  },
  {
    "category": "Knasigt",
    "text": "Vilken vardagspryl skulle vara roligast i jättestorlek?"
  },
  {
    "category": "Knasigt",
    "text": "Vad skulle vara det sämsta att ropa i ett bibliotek?"
  },
  {
    "category": "Knasigt",
    "text": "Nämn ett djur som skulle se roligt ut i kostym."
  },
  {
    "category": "Knasigt",
    "text": "Vilken sak skulle du inte vilja se börja röra sig av sig själv?"
  },
  {
    "category": "Knasigt",
    "text": "Vad vore den värsta smaken på tandkräm?"
  },
  {
    "category": "Knasigt",
    "text": "Nämn något som vore pinsamt att få levererat till jobbet."
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle vinna en danstävling?"
  },
  {
    "category": "Knasigt",
    "text": "Vad är det konstigaste man kan ha som hatt?"
  },
  {
    "category": "Knasigt",
    "text": "Nämn en sak som skulle göra en hissresa obehaglig."
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
    "text": "Nämn något man absolut inte vill hitta i sin sko."
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle bli den sämsta hemliga agenten?"
  },
  {
    "category": "Knasigt",
    "text": "Vad skulle du döpa en egen planet till?"
  },
  {
    "category": "Knasigt",
    "text": "Nämn en sak som aldrig borde ha en touchskärm."
  },
  {
    "category": "Knasigt",
    "text": "Vilken maträtt skulle vara värst att få kastad på sig?"
  },
  {
    "category": "Knasigt",
    "text": "Vad skulle vara det mest onödiga att ta med till månen?"
  },
  {
    "category": "Knasigt",
    "text": "Nämn något som vore väldigt konstigt att applådera åt."
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle se mest skrämmande ut i människostorlek?"
  },
  {
    "category": "Knasigt",
    "text": "Vad skulle du helst vilja att en robot gjorde hemma?"
  },
  {
    "category": "Knasigt",
    "text": "Nämn en sak som skulle vara rolig att ha som bilhorn."
  },
  {
    "category": "Vuxet",
    "text": "Vad är det värsta att råka säga på en första dejt?"
  },
  {
    "category": "Vuxet",
    "text": "Nämn en sak man inte bör googla på jobbets dator."
  },
  {
    "category": "Vuxet",
    "text": "Vilken kändis skulle du helst gå på dejt med?"
  },
  {
    "category": "Vuxet",
    "text": "Vad är det vanligaste folk ljuger om på en dejtingprofil?"
  },
  {
    "category": "Vuxet",
    "text": "Nämn en sak som kan förstöra en romantisk middag."
  },
  {
    "category": "Vuxet",
    "text": "Vad är det pinsammaste som kan hända när man raggar?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken låt passar sämst när man försöker vara romantisk?"
  },
  {
    "category": "Vuxet",
    "text": "Nämn en plats där det vore särskilt pinsamt att bli påkommen med att hångla."
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
    "text": "Nämn en ursäkt för att slippa en andra dejt."
  },
  {
    "category": "Vuxet",
    "text": "Vad är det mest pinsamma att råka skicka till fel person?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken dryck beställer någon som vill imponera på en dejt?"
  },
  {
    "category": "Vuxet",
    "text": "Nämn något man aldrig ska säga till sin svärmor."
  },
  {
    "category": "Vuxet",
    "text": "Vad skulle du helst slippa berätta om för dina föräldrar?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken kändis skulle vara sämst på att hålla en hemlighet?"
  },
  {
    "category": "Vuxet",
    "text": "Vad är det mest irriterande en partner kan göra i sängen när man ska sova?"
  },
  {
    "category": "Vuxet",
    "text": "Nämn en sak som kan avslöja att någon varit på efterfest."
  },
  {
    "category": "Vuxet",
    "text": "Vilken emoji känns mest som ett dåligt raggningsförsök?"
  },
  {
    "category": "Vuxet",
    "text": "Vad är den sämsta öppningsrepliken på en dejtingapp?"
  },
  {
    "category": "Vuxet",
    "text": "Nämn något folk ofta överdriver på en dejt."
  },
  {
    "category": "Vuxet",
    "text": "Vilken låt vore mest pinsam som ringsignal under ett viktigt möte?"
  },
  {
    "category": "Vuxet",
    "text": "Vad är det vanligaste man ångrar dagen efter en utekväll?"
  },
  {
    "category": "Vuxet",
    "text": "Nämn en sak som absolut inte hör hemma i en säng."
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
    "text": "Nämn en sak som kan göra en hotellfrukost riktigt pinsam."
  },
  {
    "category": "Vuxet",
    "text": "Vad skulle vara det sämsta samtalsämnet på en första dejt?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken typ av bild bör man undvika på sin dejtingprofil?"
  },
  {
    "category": "Vuxet",
    "text": "Vad är det mest pinsamma som kan hända på en jobbmiddag?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Nämn en sak man alltid köper på en flygplats."
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilket land förknippar du mest med semester?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det värsta att glömma hemma inför en resa?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Nämn något som alltid finns på ett hotellrum."
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilket djur hoppas man få se på safari?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det mest irriterande med att flyga?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Nämn en souvenir som ofta samlar damm."
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilket land förknippar du med riktigt god mat?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det första man gör när man kommer fram till ett hotell?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Nämn en sak som kan förstöra en campingsemester."
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilken aktivitet förknippar du mest med skidsemester?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det värsta att upptäcka i sin resväska?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Nämn en sak folk fotograferar på semestern."
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilket land förknippar du med tropiska stränder?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det mest klassiska att göra på en charterresa?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Nämn en sak man köper i taxfreebutiken."
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det jobbigaste med att åka nattåg?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilket land skulle du vilja äta frukost i?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Nämn något som ofta finns på en turistkarta."
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det första du gör på en strand?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilken aktivitet är mest typisk för en möhippa eller svensexa?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Nämn något man kan tappa bort på ett hotell."
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är den mest irriterande typen av medpassagerare?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilket land förknippar du med stora berg?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Nämn något som alltid finns på en campingplats."
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det värsta som kan hända på en guidad tur?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilken typ av utflykt är vanligast på en solsemester?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Nämn en sak man ofta glömmer att packa ner."
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilket land förknippar du med exotiska djur?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad skulle du helst vilja ha gratis på ett hotell?"
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
        <div className="eyebrow">MARTINS KRÄFTSKIVA</div>
        <h1>🐄 Herd Mentality</h1>
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
        <p className="hint">Frågorna kommer i slumpad ordning utan upprepning.</p>
      </section>
    </main>
  );
}
