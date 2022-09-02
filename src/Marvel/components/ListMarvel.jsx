import React from 'react'
import { CardMarvel } from './CardMarvel'

export const ListMarvel = ({data}) => {
    console.log(data);
  return (
    <>
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                (data!=undefined) && data.results.map(personaje=>(
                    <CardMarvel key={personaje.id} {...personaje}/>
                ))
            
            }
        </div>
    </>
  )
}
