import React, { useState } from 'react';

function Composant() {
  const [matricule, setMatricule] = useState('');
  const [marque, setMarque] = useState('');
  const [date, setDate] = useState('');
  const [couleur, setCouleur] = useState('');
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [b, setB] = useState(false);

  const handleCalcule = () => {
    setB(true);
  };

  return (
    <div>
      <h1>Gestion Voitures</h1>
      <form onSubmit={handleSubmit}>
        <label> Matricule : </label> <br />
        <input type="text" value={matricule} onChange={(e) => setMatricule(e.target.value)} /> <br />

        <label> Marque : </label> <br />
        <select value={marque} onChange={(e) => setMarque(e.target.value)}>
          <option value="">-</option>
          <option value="Toyota">Toyota</option>
          <option value="Audi">Audi</option>
          <option value="RENAULT">RENAULT</option>
        </select>
        <br />

        <label> Date de mise en circulation : </label> <br />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /><br />

        <label> Couleur : </label> <br />
        <input type="text" value={couleur} onChange={(e) => setCouleur(e.target.value)} /> <br />

        <input type="submit" value="Confirmer" onClick={handleCalcule} />
      </form>

      <div>
        {b ? (
          <p>
              -{matricule} <br /> -{marque} <br /> -{date} <br /> -{couleur} <br />
          </p>
        ) : (
          <p></p>
        )}
      </div>

      <hr></hr>

      {/* <input type="text" onChange={(e)=>setInput(e.target.value)}/>

      <h1>{input}</h1> */}
      
    </div>
  );
}

export default Composant;