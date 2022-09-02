import React from 'react'

export const CardMarvel = ({title,description,id,thumbnail}) => {
    const image=(`${thumbnail.path}.${thumbnail.extension}`)
    
  return (
    <div className="col">
        <div className="card-marvel">
            <img src={image} className="img-marvel" alt="" />
            <div class="card-content">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    </div>
  )
}
