import { UseContext, useState } from 'react'
import LanguageComponents from '../src/components/LanguageComponents'
import './App.css'
import { LanguageContext, TemperaturaContext } from '../src/components/contains'
import Language from '../src/components/language'

import Temperatura from '../src/components/Temperatura'

function App() {
  const [lang, setLang] = useState('French')
  const FranchCount = () => {
    setLang("French")
  }
  const EnglishCount = () => {
    setLang("English")
  }
  const [temp, setTemp] = useState(10)
  const handleChangeTemp = () => {
    setTemp(Math.floor(Math.random() * 40))
  }
  return (
    <div className="App" style={{ gap: 40 }}>
      <LanguageContext.Provider value={{
        FranchCount, EnglishCount, lang
      }}>
        <TemperaturaContext.Provider value={{ handleChangeTemp, temp }}>
          <Temperatura />
        </TemperaturaContext.Provider>
        <Language />
        <LanguageComponents />
      </LanguageContext.Provider>
    </div>
  )
}

export default App
