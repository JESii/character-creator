import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

const Div = () => {
  return (
    <div style={{position: "fixed", top: "60%", height: "40%", width: "100%", maxWidth: "100%", backgroundColor: "hsl(195deg, 20%, 86%)"}}></div>
  )
}
function App() {
  return (
    <>
      <Div />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
