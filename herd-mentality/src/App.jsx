import { useState } from "react";

const questions = [
  // 🍕 Mat & dryck
  "Vilken pizza-topping väljer flest svenskar?",
  "Vad äter flest till pannkakor?",
  "Är du hellre utan kaffe eller utan läsk resten av livet?",
  "Vilken chipsmak köper flest på fredagsmyset?",
  "Vad är vanligast att dricka till pizza?",
  "Vilket bröd äter flest till frukost?",
  "Är tacos eller hamburgare mer populärt i Sverige?",
  "Vad äter flest på midsommarafton?",
  "Om du bara fick äta en frukt resten av livet, vilken?",
  "Vad beställer flest dagen efter en fest?",
  "Är det fler som gillar Coca-Cola eller Pepsi?",
  "Vad äter flest på julbordet först?",
  "Vilken glassmak är mest populär?",
  "Är det vanligare att ta ketchup eller senap på korv?",
  "Vad köper flest på McDonald’s?",
  "Vad dricker flest till frukost?",
  "Vilken chokladbit är mest köpt i Sverige?",
  "Är det vanligare att folk gillar ostbågar eller chips?",
  "Vad förknippar flest med fredagsmys?",
  "Vad lägger flest på knäckebröd?",

  // 🎬 Popkultur & nöje
  "Vem är mest känd: Messi eller Ronaldo?",
  "Vilken TV-serie har flest svenskar sett?",
  "Är det fler som gillar Friends eller How I Met Your Mother?",
  "Vad sjunger flest på karaoke?",
  "Om du bara fick behålla en app på mobilen, vilken?",
  "Vem i The Office tycker flest är roligast?",
  "Vad streamar flest på Netflix just nu?",
  "Vilket instrument är mest förknippat med rock?",
  "Är Batman eller Spider-Man mest populär?",
  "Vad förknippar flest med barndomen?",
  "Vem är mest känd i världen just nu?",
  "Vad tittar flest på julafton?",
  "Är TikTok eller Instagram mer populärt?",
  "Vad spelar flest på mobilen?",
  "Vilken musikgenre lyssnar flest på i Sverige?",
  "Vad sjunger flest på midsommar?",
  "Är det fler som gillar Star Wars eller Harry Potter?",
  "Vem skulle flest vilja byta liv med för en dag?",
  "Vad spelar flest på Spotify när de tränar?",
  "Vem är Sveriges roligaste komiker?",

  // ✈️ Resor & platser
  "Är det fler som föredrar solsemester eller skidsemester?",
  "Vad tar flest med på en resa som är helt onödigt?",
  "Är du hellre på stranden eller i fjällen?",
  "Vad förknippar flest med Italien?",
  "Vad förknippar flest med Japan?",
  "Är det fler som vill resa till USA eller Thailand?",
  "Vad förknippar flest med Grekland?",
  "Är det vanligare att flyga eller åka tåg på semester i Sverige?",
  "Om du bara fick resa till ett land resten av livet, vilket?",
  "Vad förknippar flest med Paris?",
  "Vad förknippar flest med Egypten?",
  "Är du hellre på roadtrip eller all-inclusive?",
  "Vad är det vanligaste folk glömmer när de packar?",
  "Vilket land förknippar flest med choklad?",
  "Är du hellre i regnskogen eller i öknen?",
  "Vad förknippar flest med Spanien?",
  "Vilket land förknippar flest med whisky?",
  "Är du hellre på kryssning eller camping?",
  "Vad förknippar flest med Greklandsöar?",
  "Vilket land förknippar flest med tacos?",

  // 🏠 Liv & vardag
  "Vad gör flest direkt när de vaknar?",
  "Är det vanligare att snooza eller gå upp direkt?",
  "Vilken hushållssyssla tycker flest är tråkigast?",
  "Vad gör flest på en söndag?",
  "Är det fler som gillar hund eller katt bäst?",
  "Vad är det första folk köper på IKEA?",
  "Vad är det vanligaste skolämnet folk gillar?",
  "Är det vanligare att folk dricker kaffe eller te på jobbet?",
  "Vad säger flest för ofta?",
  "Vad förknippar flest med måndag?",
  "Är du hellre alltid för tidig eller alltid för sen?",
  "Vad gör flest direkt efter jobbet?",
  "Är det fler som betalar med kort eller Swish?",
  "Vad använder flest varje dag på mobilen?",
  "Om du bara fick äga en pryl i hemmet, vilken?",
  "Vad förknippar flest med sommarlovet?",
  "Är det vanligare att folk tränar på gym eller ute?",
  "Vad tittar flest på när de vill koppla av?",
  "Är du hellre utan internet eller utan TV i ett år?",
  "Vad förknippar flest med vintern?",

  // 🤪 Knasiga & roliga
  "Är du hellre en björn eller en haj?",
  "Vad skulle flest välja som superkraft?",
  "Är du hellre osynlig eller kunna flyga?",
  "Vad hade flest döpt en katt till?",
  "Vem skulle flest vilja ha som granne?",
  "Är du hellre en dag i rymden eller en dag under havet?",
  "Vad är det konstigaste folk brukar samla på?",
  "Är du hellre alltid hungrig eller alltid trött?",
  "Vad förknippar flest med lycka?",
  "Är det fler som gillar att bada i sjö eller i hav?",
  "Om du förvandlades till ett djur en dag, vilket?",
  "Är du hellre rik och ensam eller fattig och omgiven av vänner?",
  "Vad förknippar flest med Halloween?",
  "Är det fler som gillar kaffe svart eller med mjölk?",
  "Vad är det mest störande ljudet?",
  "Är du hellre utan musik eller utan film resten av livet?",
  "Vad förknippar flest med styrka?",
  "Är du hellre alltid varm eller alltid kall?",
  "Vad är det första folk tänker på när man säger barndom?",
  "Är du hellre alltid trött eller alltid rastlös?",

  // 🔥 Vuxna & festiga
  "Är det fler som beställer öl eller vin på krogen?",
  "Vad är vanligast att shotta?",
  "Är du hellre på förfest eller efterfest?",
  "Vad spelas oftast på förfest?",
  "Är det fler som sjunger eller dansar först på fest?",
  "Vad äter flest dagen efter fest?",
  "Är du hellre bakis i solen eller bakis i regn?",
  "Vilken drink är mest klassisk?",
  "Är det fler som köper chips eller godis till fest?",
  "Vad spelar flest när de ska ha kul med vänner?",
  "Är det vanligare att folk somnar först i soffan eller i sängen?",
  "Vad gör flest på en efterfest?",
  "Är du hellre alltid full eller alltid nykter?",
  "Vad beställer flest på festival?",
  "Är det fler som dansar till schlager eller till techno?",
  "Vad är vanligast att lägga upp på Instagram från fest?",
  "Är du hellre den som kommer först eller den som går sist på fest?",
  "Vad förknippar flest med midsommarfest?",
  "Är det fler som tycker vin eller öl smakar bättre?",
  "Vad äter flest till grillfest?",
  // … fyll på resterande tills du når 200, med samma blandning!
];

export default function App() {
  const [question, setQuestion] = useState("Tryck på knappen för en fråga!");

  const newQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex]);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      background: "#f0fdf4",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px", color: "#166534" }}>
        Martins Kräftskiva <br />
        🐄 Herd Mentality 
      </h1>
      <div style={{
        maxWidth: "400px",
        minHeight: "100px",
        minWidth: "400px",
        padding: "20px",
        borderRadius: "16px",
        background: "white",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontSize: "1.2rem",
        color: "#000"   // svart text
      }}>
        {question}
      </div>
      <button
        onClick={newQuestion}
        style={{
          marginTop: "20px",
          padding: "20px 40px",
          border: "none",
          borderRadius: "12px",
          background: "#22c55e",
          color: "white",
          fontSize: "2rem",
          cursor: "pointer"
        }}
      >
        Ny fråga
      </button>
    </div>
  );
}
