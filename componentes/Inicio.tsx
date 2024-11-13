import React from 'react'
import Button from './button'
import Image from 'next/image'
import Formulario from './Formulario'

function Inicio() {
  return (
    <div className='flexCenter'>

      <Image src="/office.svg" alt="logo" width={450} height={300}/>

      <div className="flexCenter padding-container flex-col">
        <h1 className="font-bold text-teal-950 bold-28">
        Responsabilidad Social
        </h1>
        <h2 className="font-bold text-green-main50 bold-28">
        Universitaria
        </h2>
        <Formulario />
      </div>
    </div>
  )
}

export default Inicio