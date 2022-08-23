import React, { useState } from 'react';
import { MyRoutes } from './routes';
// import { LanguageContext } from "./context/LanguageContext";

import { LanguageProvider } from './context/LanguageContext';



// export type GlobalContent = {
//     language: string
 
//   }

// export const LanguageContext = React.createContext('')

function App() {
  // const [language, setlanguage] = useState('ru') // current url
  // const toggleLanguage = (value:string) => setlanguage(value)
  return (
    <div className="App">

<LanguageProvider>
<MyRoutes/>

</LanguageProvider>
    </div>
  );
}

export default App;
