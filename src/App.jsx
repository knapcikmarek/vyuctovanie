import { useState } from "react";
import "./App.css";
import{
  FaTruck,
  FaGasPump,
  FaRoad,
  FaClock,
  FaTachometerAlt,
  FaOilCan,
  FaFillDrip,
  FaBatteryHalf,
  FaPumpMedical,

}from "react-icons/fa";
import { FaOilWell } from "react-icons/fa6";

export default function App() {

  const predvoleneVozidla = [
    {
      id:1,
      nazov: "Scania cas 20",
      obrazok: "/images/scania.png",
      palivo: "Diesel",
      plnaNadrz: 200,
      spotreba100: 40,
      spotrebaMth: 25,  
    },
    {
      id:2,
      nazov: "Iveco Daily",
      obrazok: "/images/iveco.png",
      palivo: "Diesel",
      plnaNadrz: 400,
      spotreba100: 10,
      spotrebaMth: 15,  
      
    },
    {
      id:3,
      nazov: "Iveco Trakker",
      obrazok: "/images/iveco_traker.png",
      palivo: "Diesel",
      plnaNadrz: 700,
      spotreba100: 12,
      spotrebaMth: 18,  
      
    },
    {
      id:4,
      nazov: "Sanitka",
      obrazok: "/images/sanitka.png",
      palivo: "Diesel",
      plnaNadrz: 400,
      spotreba100: 8,
      spotrebaMth: 10,  
      
    },
    {
      id:5,
      nazov: "Tatra 815x7",
      obrazok: "/images/tatra.png",
      palivo: "Diesel",
      plnaNadrz: 220,
      spotreba100: 55,
      spotrebaMth: 15,  
      
    },
    {
      id:6,
      nazov: "Štvorkolka",
      obrazok: "/images/scania.png",
      palivo: "Benzin",
      plnaNadrz: 600,
      spotreba100: 20,
      spotrebaMth: 35,  
    },
    {
      id:7,
      nazov: "KHA",
      obrazok: "/images/scania.png",
      palivo: "Diesel",
      plnaNadrz: 600,
      spotreba100: 20,
      spotrebaMth: 35,  
    },
    {
      id:8,
      nazov: "Tatra Phoenix",
      obrazok: "/images/scania.png",
      palivo: "Diesel",
      plnaNadrz: 600,
      spotreba100: 20,
      spotrebaMth: 35,  
    },
    {
      id:9,
      nazov: "Man Tunel",
      obrazok: "/images/scania.png",
      palivo: "Diesel",
      plnaNadrz: 600,
      spotreba100: 20,
      spotrebaMth: 35,  
    },
    {
      id:10,
      nazov: "Autobus",
      obrazok: "/images/scania.png",
      palivo: "Diesel",
      plnaNadrz: 600,
      spotreba100: 20,
      spotrebaMth: 35,  
    },
  ];

  const [vozidla, setVozidla] = useState(predvoleneVozidla);

  const [vybraneVozidlo, setVybraneVozidlo] = useState(predvoleneVozidla[0]);
  
  const [plnaNadrz, setPlnaNadrz] = useState(vybraneVozidlo.plnaNadrz);

  const [pretacania, setPretacania] = useState("");

  const [minuty, setMinuty] = useState("");

  const [mth, setMth] = useState("");

  const [km, setKm] = useState("");

  const [spotreba100, setSpotreba100] = useState(predvoleneVozidla[0].spotreba100);

  const [spotrebaMth, setSpotrebaMth] = useState(predvoleneVozidla[0].spotrebaMth);

  const [Mthnovymesiac, setMthnovymesiac] = useState("");

  const [Kmnovymesiac, setKmnovymesiac] = useState("");

  const [vypocitane, setVypocitane] = useState(false);

  const pretacanieMin = (Number(pretacania) * Number(minuty)) / 60;

  const litreKm = (Number(km) / 100) * Number(vybraneVozidlo.spotreba100);

  const litreMth = (((Number(mth) / 60) + Number(pretacanieMin))) * Number(vybraneVozidlo.spotrebaMth);

  const litreSpolu = litreKm + litreMth;

  const MthSpolu = ((Number(mth) / 60) + Number(pretacanieMin));

  const [tankovanie,setTankovanie]= useState("");

  const [zvysokPaliva,setzvysokPaliva]= useState("");

  const zostatok = Number(vybraneVozidlo.plnaNadrz) - (((Number(Mthnovymesiac) / 60) * Number(vybraneVozidlo.spotrebaMth)) + ((Number(Kmnovymesiac / 100)) * Number(vybraneVozidlo.spotreba100)));

  const NovaSpotreba = (((Number(Mthnovymesiac) / 60) * Number(vybraneVozidlo.spotrebaMth)) + ((Number(Kmnovymesiac / 100)) * Number(vybraneVozidlo.spotreba100))); 
  
  const skutocnaSpotreba = ((Number(tankovanie)+Number(zvysokPaliva))-zostatok);
  
  const usporanadspotreba = (Number(litreSpolu) - Number(skutocnaSpotreba));
 
  function vypocitaj(){
    setVypocitane(true);
  }

  return (
    <div>
    <header className="header">
    <img
          src={"images/header.png"}
          className="header-image"
          alt="Header"
        />
    </header>
    <div className="container">
    <div className="sidebar">

<h2>Vozidlá</h2>

{vozidla.map((v) => (
  <button
    key={v.id}
    className={vybraneVozidlo.id === v.id ? "vehicle active" : "vehicle"}
    onClick={() => {
      setVybraneVozidlo(v);
      setSpotreba100(v.spotreba100);
      setSpotrebaMth(v.spotrebaMth);
      setPlnaNadrz(v.plnaNadrz);
    }}
  >
    🚒 {v.nazov}
  </button>
))}


</div>

      <div className="main-panel">

  
      <div className="mobile-select">
      <select
        value={vybraneVozidlo.id}
        onChange={(e) => {
          const vozidlo = vozidla.find(
            (v) => v.id === Number(e.target.value)
      );
    setVybraneVozidlo(vozidlo);
    
  }}
  >
  {vozidla.map((v) => (
    <option key={v.id} value={v.id}>
      🚒 {v.nazov}
    </option>
  ))}
</select>
</div>
    
  <div className="form-grid">
  
    <div className="field">
      <label>
        <FaTruck />Pretáčanie x krát</label>

      <input

        type="number"

        value={pretacania}

        onChange={(e) => setPretacania(e.target.value)}

      />
      </div>
      <div className="field">
      <label><FaClock />Minúty na jedno pretáčanie</label>

      <input

        type="number"

        value={minuty}

        onChange={(e) => setMinuty(e.target.value)}

      />
      </div>
      <div className="field">
      <label><FaTachometerAlt />Motohodiny (min)</label>

      <input

        type="number"

        value={mth}

        onChange={(e) => setMth(e.target.value)}

      />
      </div>
      <div className="field">
      <label>
        <FaRoad />Kilometre</label>

      <input

        type="number"

        value={km}

        onChange={(e) => setKm(e.target.value)}

      />
      </div>

      <div className="field">
      <label>
        <FaTachometerAlt />Spotreba na 100 km</label>

      <input

        type="number" 

        value={vybraneVozidlo.spotreba100}
        readOnly

        onChange={(e) => setSpotreba100(e.target.value)}

      />
      </div>

      <div className="field">

      <label>
        <FaClock />Spotreba na Mth (l/h)</label>

      <input

        type="number"

        value={vybraneVozidlo.spotrebaMth}
        readOnly

        onChange={(e) => setSpotrebaMth(e.target.value)}

      />
      </div>

      <div className="field">

      <label>
        <FaGasPump />Zvyšok paliva z mesiaca (l)</label>

      <input

        type="number"

        value={zvysokPaliva}

        onChange={(e) => setzvysokPaliva(e.target.value)}

      />
      </div>

      <div className="field">

      <label>
        <FaGasPump />Doplnené palivo (l)</label>

      <input

        type="number"

        value={tankovanie}

        onChange={(e) => setTankovanie(e.target.value)}

      />
      </div>

    <div className="field">
      <label><FaGasPump />Plná nádrž (l)</label>

      <input

        type="number"

        value={vybraneVozidlo.plnaNadrz}
        readOnly

        onChange={(e) => setPlnaNadrz(e.target.value)}

      />
      </div>

      <div className="field">

       <label><FaTachometerAlt/>Mth od tankovania (min)</label>

      <input

        type="number"

        value={Mthnovymesiac}

        onChange={(e) => setMthnovymesiac(e.target.value)}
      />
      </div>
       <div className="field">
       <label><FaRoad/>Km od tankovania (km)</label>

      <input

        type="number"

        value={Kmnovymesiac}

        onChange={(e) => setKmnovymesiac(e.target.value)}
      />
      </div>
    </div>
      
<button onClick={vypocitaj}>Vypočítať</button>



{vypocitane && (
  <div className="result-container">
    <h2>Výsleky</h2>
  <div className="result-grid">
        
    <div className="result-card">
      
        <FaRoad className="result-icon" />
        <span className="restult-label">Km:</span>
        <h3>{km} Km</h3>
    </div>

    <div className="result-card">
      
        <FaRoad className="result-icon" />
        <span className="restult-label">Spotreba km:</span>
        <h3>{litreKm.toFixed(3)} l</h3>
    </div>


    <div className="result-card">
      
      <FaClock className="result-icon" />
      <span className="restult-label">Mth spolu:</span>
      <h3>{MthSpolu.toFixed(3)} h</h3>
  </div>

    <div className="result-card">
      
      <FaClock className="result-icon" />
      <span className="restult-label">Spotreba Mth:</span>
      <h3>{litreMth.toFixed(3)} l</h3>
    </div>
    
    <div className="result-card">
      
      <FaGasPump className="result-icon" />
      <span className="restult-label">Spotreba Spolu:</span>
      <h3>{litreSpolu.toFixed(3)} l</h3>
    </div>

    <div className="result-card">
      
      <FaGasPump className="result-icon" />
      <span className="restult-label">Spotreba od tankovania:</span>
      <h3>{NovaSpotreba.toFixed(3)} l</h3>
    </div>

    <div className="result-card">
      
      <FaGasPump className="result-icon" />
      <span className="restult-label">Zvyšok paliva z minuleho mesiaca:</span>
      <h3>{zvysokPaliva} l</h3>
    </div>

    <div className="result-card">
      
      <FaGasPump className="result-icon" />
      <span className="restult-label">Doplnené palivo:</span>
      <h3>{tankovanie} l</h3>
    </div>

    <div className="result-card">
      
      <FaGasPump className="result-icon" />
      <span className="restult-label">Zostatok nádrže:</span>
      <h3>{zostatok.toFixed(3)} l</h3>
    </div>

    <div className="result-card">
      
      <FaGasPump className="result-icon" />
      <span className="restult-label">Skutočná spotreba:</span>
      <h3>{skutocnaSpotreba.toFixed(3)} l</h3>
    </div>

    <div className="result-card">
      
      <FaGasPump className="result-icon" />
      <span className="restult-label">
        {usporanadspotreba >= 0 ? "Úspora" : "Nadspotreba"}
      </span>
      <h3>{usporanadspotreba.toFixed(3)} l</h3>
      
    </div>

  
  </div>
  </div>
)}    </div>
<div className="right-panel">
  <div className="vehicle-card">
    <img
    src={vybraneVozidlo.obrazok}
    className="vehicle-image"
    alt={vybraneVozidlo.nazov}
    />
    <h2>{vybraneVozidlo.nazov}</h2>
    <p>⛽ Palivo <span className="value-vozidlo">{vybraneVozidlo.palivo}</span></p>
    <p>🛢 Plná nádrž <span className="value-vozidlo">{vybraneVozidlo.plnaNadrz}</span> l</p>
    <p>📊 Spotreba  <span className="value-vozidlo">{vybraneVozidlo.spotreba100}</span> l/100km</p>
    <p>⚙ Spotreba  <span className="value-vozidlo">{vybraneVozidlo.spotrebaMth}</span> l/h</p>
    <button onClick={vypocitaj}>Vypočítať</button>
  </div>
</div>
</div>
</div>

  );

}
