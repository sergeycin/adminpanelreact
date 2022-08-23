import React, { useState } from 'react';
import { MyRoutes } from './routes';
// import { LanguageContext } from "./context/LanguageContext";

import { LanguageProvider } from './context/LanguageContext';





function App() {

  return (
    <div className="App">

<LanguageProvider>
<MyRoutes/>

</LanguageProvider>
    </div>
  );
}

export default App;
