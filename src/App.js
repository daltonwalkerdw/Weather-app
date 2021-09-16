import { useState, useEffect } from 'react'


function App() {
  const [lat, setSat] = useState("100")
  return (
    <div className="App">
      <h1>{lat}</h1>
    </div>
  );
}

export default App;
