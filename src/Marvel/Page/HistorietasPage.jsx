import React from 'react'
import { ListMarvel } from '../components/ListMarvel'
import { useFetchMarvel } from '../Hooks/useFetchMarvel'

export const HistorietasPage = () => {

  const {data}=useFetchMarvel("https://gateway.marvel.com:443/v1/public/comics?ts=1&hash=56e7dfafce5e80e038a843c5888303e7&apikey=235b3d1bd424f15f6cdd73870581e930")
  console.log(data);
  return (
    <div className="container">
      <h1 className="title__personajes my-5 text-center text-white">Personajes</h1>
      <ListMarvel {...data}/>
    </div>
  )
}
