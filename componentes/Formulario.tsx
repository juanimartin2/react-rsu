import React from 'react'
import Button from './button'

function Formulario() {
  return (
    <form className="flexCenter flex-col gap-3 p-6" id='login'>
      <>
        <label className='rounded-lg border-2 border-slate-400 flex-col'>
          Usuario
          <input type="email" name="usuario" />
        </label>
        <label className='rounded-lg border-2 border-slate-400'>
          Clave
          <input type="text" name="clave" />
        </label>
        <Button
          type={"submit"}
          title={"Ingresar"}
          icon="/logo2-ucc.svg"
          variant={"btn_green"}
        />
      </>
    </form>
  )
}

export default Formulario