import { createContext } from "react";



export type GlobalContent = {
    language: string
 
  }

export const LanguageContext =createContext<GlobalContent>({
    language: '',
  
})