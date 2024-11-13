import React from 'react'
import Button from './button'

function Formulario() {
  return (
    <form className="flexCenter flex-col gap-3 p-6" id='login'>
      <>
        <label>
        <h3>Usuario</h3>
          <input 
          className='rounded-lg border-2 border-slate-400' 
          type="email" 
          name="usuario" 
          />
        </label>
        <label>
          <h3>Clave</h3>
          <input 
          className='rounded-lg border-2 border-slate-400'
          type="password"
          datatype='password'
          name="clave" 
          />
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