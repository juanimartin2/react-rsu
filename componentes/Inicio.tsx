import React from 'react'
import Button from './button'
import Image from 'next/image'
import Formulario from './Formulario'

function Inicio() {
  return (
    <div className='flexCenter'>

      <Image src="/office.svg" alt="logo" width={450} height={300}/>

      <div className="flexCenter padding-container flex-col">
        <h1 className="font-bold text-teal-950 text-2xl">
        Responsabilidad Social
        </h1>
        <h2 className="font-bold text-green-main50 text-2xl">
        Universitaria
        </h2>
        <Formulario />
      </div>
    </div>
  )
}

export default Inicio