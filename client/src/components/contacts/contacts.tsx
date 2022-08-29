import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"

import './contacts.scss'
import { useLanguage } from "../../context/LanguageContext"
import ContactsContent from "./contactContent"

function Contacts() {
    const {lang,toggleLanguage} = useLanguage()

    return (
       <div className="wrapper">
      <Header/>
        
      <ContactsContent />
      <Footer/>
        </div>
)

}

export default Contacts