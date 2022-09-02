import React from 'react'
import {useFetchMarvel} from "../Hooks/useFetchMarvel.js"
import {ListMarvel} from "../components/ListMarvel"
export const PersonajesPage = () => {

  const {data}=useFetchMarvel("https://gateway.marvel.com:443/v1/public/characters?ts=1&hash=56e7dfafce5e80e038a843c5888303e7&apikey=235b3d1bd424f15f6cdd73870581e930")
  
  return (
    <div className="container">
      <h1 className="title__personajes my-5 text-center text-white">Personajes</h1>
      <ListMarvel {...data}/>
    </div>
  )
}
