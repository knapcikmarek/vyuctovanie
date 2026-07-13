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
      nadrz: 600,
      spotreba100: 20,
      spotrebaMth: 35,  
    },
    {
      id:2,
      nazov: "Iveco Daily",
      obrazok: "/images/iveco.png",
      palivo: "Diesel",
      nadrz: 400,
      spotreba100: 10,
      spotrebaMth: 15,  
      
    }
  ];

  const [vozidla, setVozidla] = useState(predvoleneVozidla);

  const [vybraneVozidlo, setVybraneVozidlo] = useState(predvoleneVozidla[0]);
  
  const [plnaNadrz, setPlnaNadrz] = useState(vybraneVozidlo.nadrz);

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

  const litreKm = (Number(km) / 100) * Number(spotreba100);

  const litreMth = (((Number(mth) / 60) + Number(pretacanieMin))) * Number(spotrebaMth);

  const litreSpolu = litreKm + litreMth;

  const MthSpolu = ((Number(mth) / 60) + Number(pretacanieMin));

  const [tankovanie,setTankovanie]= useState("");

  const zostatok = Number(plnaNadrz) - (((Number(Mthnovymesiac) / 60) * Number(spotrebaMth)) + ((Number(Kmnovymesiac / 100)) * Number(spotreba100)));

  const NovaSpotreba = (((Number(Mthnovymesiac) / 60) * Number(spotrebaMth)) + ((Number(Kmnovymesiac / 100)) * Number(spotreba100))); 
  
  function vypocitaj(){
    setVypocitane(true);
  }

  return (
    
    <div className="container">
      
      <div className="sidebar">

<h2>🚒 Vozidlá</h2>

{vozidla.map((v) => (
  <button
    key={v.id}
    className={vybraneVozidlo.id === v.id ? "vehicle active" : "vehicle"}
    onClick={() => {
      setVybraneVozidlo(v);
      setSpotreba100(v.spotreba100);
      setSpotrebaMth(v.spotrebaMth);
      setPlnaNadrz(v.nadrz);
    }}
  >
    🚒 {v.nazov}
  </button>
))}


</div>
      <div className="main-panel">

      <div className="header">
        
        <div>
          <h1>KALKULAČKA</h1>
          <h2>spotreby hasičského vozidla</h2>
        </div>

      </div>
      <div className="mobile-select">
  <select
    value={vybraneVozidlo}
    onChange={(e) => setVybraneVozidlo(e.target.value)}
  >
    <option value="scania">🚒 Scania CAS 20</option>
    <option value="iveco">🚐 Iveco Daily</option>
    onClick={() => {
      setVybraneVozidlo(v);
      setSpotreba100(v.spotreba100);
      setSpotrebaMth(v.spotrebaMth);
      setPlnaNadrz(v.nadrz);
    }
  }
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
        <FaGasPump />Tankovanie (l)</label>

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

        value={plnaNadrz}

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
      
        <FaClock className="result-icon" />
        <span className="restult-label">Pretáčanie spolu</span>
        <h3>{pretacanieMin} h</h3>
    </div>

    <div className="result-card">
      
        <FaClock className="result-icon" />
        <span className="restult-label">Mth spolu:</span>
        <h3>{MthSpolu.toFixed(2)} h</h3>
    </div>
    
    <div className="result-card">
      
        <FaRoad className="result-icon" />
        <span className="restult-label">Spotreba km:</span>
        <h3>{litreKm.toFixed(2)} l</h3>
    </div>

    <div className="result-card">
      
      <FaClock className="result-icon" />
      <span className="restult-label">Spotreba Mth:</span>
      <h3>{litreMth.toFixed(2)} l</h3>
    </div>
    
    <div className="result-card">
      
      <FaGasPump className="result-icon" />
      <span className="restult-label">Spotreba Spolu:</span>
      <h3>{litreSpolu.toFixed(2)} l</h3>
    </div>

    <div className="result-card">
      
      <FaGasPump className="result-icon" />
      <span className="restult-label">Spotreba od tankovania:</span>
      <h3>{NovaSpotreba.toFixed(2)} l</h3>
    </div>

    <div className="result-card">
      
      <FaGasPump className="result-icon" />
      <span className="restult-label">Zostatok nádrže:</span>
      <h3>{zostatok.toFixed(2)} l</h3>
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
    <p>⛽{vybraneVozidlo.palivo}</p>
    <p>🛢 {vybraneVozidlo.nadrz} l</p>
    <p>📊 {vybraneVozidlo.spotreba100} l/100</p>
    <p>⚙ {vybraneVozidlo.spotrebaMth} l/h</p>
  </div>
</div>
</div>

  );

}
