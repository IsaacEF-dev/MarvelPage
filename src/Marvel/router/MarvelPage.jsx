import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../../Iu/components/NavBar'
import { HistorietasPage } from '../Page/HistorietasPage'
import { PersonajesPage } from '../Page/PersonajesPage'
import { SeriesPage } from '../Page/SeriesPage'

export const MarvelPage = () => {
  return (
   <>
     <NavBar/>
     <Routes>
       
        <Route path="/personajes" element={<PersonajesPage />} />
        <Route path="/comics" element={<HistorietasPage />} />
        <Route path="/series" element={<SeriesPage />} />

        <Route path="/*" element={<Navigate to={"/personajes"} />} />
      </Routes>
   </>
  )
}
