import React from 'react'
import { useContext } from 'react'
import {  LanguageContext } from './contains'

const LanguageComponets = () => {
    const {EnglishCount, FranchCount} = useContext(LanguageContext);
    return (
        <div>
            <button onClick={EnglishCount} style={{marginRight: 20, marginTop: 20}}>english</button>
            <button onClick={FranchCount}>franch</button>
        </div>
      )
}


export default LanguageComponets