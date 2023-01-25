import { useContext } from "react"
import { LanguageContext } from "./contains"

function Language() {
  const {Language}=useContext(LanguageContext)
  return (
    <div style={{marginTop: 30}}>{Language}</div>
  )
}

export default Language