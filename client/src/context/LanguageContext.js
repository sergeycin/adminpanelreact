import { createContext, useContext, useState } from "react";




const LanguageContext = createContext()

export const useLanguage = () =>{
  return useContext(LanguageContext)
}

export const LanguageProvider = ({children}) =>{
  const [language, setlanguage] = useState('ru') 

  const toggleLanguage = (value) => setlanguage(value)
  return(
    <LanguageContext.Provider  value={{
      lang: language,
      toggleLanguage
      }}>
 
    
    {children}


    </LanguageContext.Provider>
  )
}