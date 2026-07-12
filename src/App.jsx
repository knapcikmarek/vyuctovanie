import { useState } from "react";
import "./App.css";

export default function App() {

  const [pretacania, setPretacania] = useState("");

  const [minuty, setMinuty] = useState("");

  const [mth, setMth] = useState("");

  const [km, setKm] = useState("");

  const [spotreba100, setSpotreba100] = useState("");

  const [spotrebaMth, setSpotrebaMth] = useState("");

  const [tankovanie, setTankovanie] = useState("");

  const [plnaNadrz, setPlnaNadrz] = useState("");

  const [Mthnovymesiac, setMthnovymesiac] = useState("");

  const [Kmnovymesiac, setKmnovymesiac] = useState("");

  const [vypocitane, setVypocitane] = useState(false);

  const pretacanieMin = (Number(pretacania) * Number(minuty)) / 60;

  const litreKm = (Number(km) / 100) * Number(spotreba100);

  const litreMth = (((Number(mth) / 60) + Number(pretacanieMin))) * Number(spotrebaMth);

  const litreSpolu = litreKm + litreMth;

  const MthSpolu = ((Number(mth) / 60) + Number(pretacanieMin));

  const zostatok = Number(plnaNadrz) - (((Number(Mthnovymesiac) / 60) * Number(spotrebaMth)) + ((Number(Kmnovymesiac / 100)) * Number(spotreba100)));

  const NovaSpotreba = (((Number(Mthnovymesiac) / 60) * Number(spotrebaMth)) + ((Number(Kmnovymesiac / 100)) * Number(spotreba100))); 
  
  function vypocitaj(){
    setVypocitane(true);
  }

  return (
    <div className="container">
    <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>

      <div className="header">
        <span className="truck">🚒</span>
        <div>
          <h1>Kalkulačka</h1>
          <h2>spotreby hasičského vozidla</h2>
        </div>

      </div>

    <div className="field">
      <label>Pretáčanie x krát</label>

      <input

        type="number"

        value={pretacania}

        onChange={(e) => setPretacania(e.target.value)}

      />
      </div>
      <div className="field">
      <label>Minúty na jedno pretáčanie</label>

      <input

        type="number"

        value={minuty}

        onChange={(e) => setMinuty(e.target.value)}

      />
      </div>
      <div className="field">
      <label>Motohodiny (min)</label>

      <input

        type="number"

        value={mth}

        onChange={(e) => setMth(e.target.value)}

      />
      </div>
      <div className="field">
      <label>Kilometre</label>

      <input

        type="number"

        value={km}

        onChange={(e) => setKm(e.target.value)}

      />
      </div>

      <div className="field">
      <label>Spotreba na 100 km</label>

      <input

        type="number"

        value={spotreba100}

        onChange={(e) => setSpotreba100(e.target.value)}

      />
      </div>

      <div className="field">

      <label>Spotreba na Mth (l/h)</label>

      <input

        type="number"

        value={spotrebaMth}

        onChange={(e) => setSpotrebaMth(e.target.value)}

      />
      </div>

      <div className="field">

      <label>Tankovanie (l)</label>

      <input

        type="number"

        value={tankovanie}

        onChange={(e) => setTankovanie(e.target.value)}

      />
      </div>

    <div className="field">
      <label>Plná nádrž (l)</label>

      <input

        type="number"

        value={plnaNadrz}

        onChange={(e) => setPlnaNadrz(e.target.value)}

      />
      </div>

      <div className="field">

       <label>Mth od tankovania (min)</label>

      <input

        type="number"

        value={Mthnovymesiac}

        onChange={(e) => setMthnovymesiac(e.target.value)}
      />
      </div>
       <div className="field">
       <label>Km od tankovania (km)</label>

      <input

        type="number"

        value={Kmnovymesiac}

        onChange={(e) => setKmnovymesiac(e.target.value)}
      />
      </div>
      
<button onClick={vypocitaj}>Vypočítať</button>

{vypocitane && (
  <div className="vysledky">
  <>
    <hr />

    <h3>Výsledky</h3>

    <p>Pretáčanie spolu: <b>{pretacanieMin} H</b></p>

    <p>Mth spolu: <b>{MthSpolu.toFixed(2)} H</b></p>

    <p>Spotreba km: <b>{litreKm.toFixed(2)} l</b></p>

    <p>Spotreba Mth: <b>{litreMth.toFixed(2)} l</b></p>

    <p>Spotreba spolu: <b>{litreSpolu.toFixed(2)} l</b></p>

    <p>Spotreba od tankovania: <b>{NovaSpotreba.toFixed(2)} l</b></p>

    <p>Zostatok nádrže: <b>{zostatok.toFixed(2)} l</b></p>
  </>
  </div>
)}    </div>
</div>

  );

}
