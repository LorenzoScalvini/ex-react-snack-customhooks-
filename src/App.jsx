import React from 'react';
import useSwitch from './useSwitch';
import useDate from './useDate';
import useCustomPointer from './useCustomPointer';

function App() {
  // Usa il custom hook useSwitch
  const [isOn, toggle] = useSwitch();

  // Usa il custom hook useDate
  const currentDate = useDate();

  // Usa il custom hook useCustomPointer
  const customPointer = useCustomPointer('🔥');

  return (
    <div>
      {/* Sezione per useSwitch */}
      <div style={{ marginBottom: '40px' }}>
        <h1>Snack 1: useSwitch() – Toggle Booleano</h1>
        <p>Il valore è: {isOn ? 'ON' : 'OFF'}</p>
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      {/* Sezione per useDate */}
      <div style={{ marginBottom: '40px' }}>
        <h1>Snack 2: useDate() – Ottenere la Data Attuale</h1>
        <p>Data e ora attuali: {currentDate.toLocaleString()}</p>
      </div>

      {/* Sezione per useCustomPointer */}
      <div>
        <h1>Snack 3: useCustomPointer() – Cambia il Cursore del Mouse</h1>
        <p>Sposta il mouse per vedere il cursore personalizzato!</p>
        {customPointer}
      </div>
    </div>
  );
}

export default App;
