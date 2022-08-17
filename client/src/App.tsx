import React, { useState } from 'react';
import { MyRoutes } from './routes';
import { LanguageContext } from "./context/LanguageContext";

function App() {
  const [language, setlanguage] = useState('ru') // current url
  return (
    <div className="App">
<LanguageContext.Provider  value={{language}}>
<MyRoutes/>

</LanguageContext.Provider>
    </div>
  );
}

export default App;
