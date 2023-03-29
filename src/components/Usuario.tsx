import { useState } from 'react';



interface User{ // le digo al useState el tipo de dato que va a utilizar
    uid: string;
    name: string;

}

const Usuario = () => {


const [user, setUser] = useState<User>(); // el useState manejara un usuario

const login = () => {
    setUser({
        uid: 'ABC123',
        name: 'Barbara Noriega'
    })
}

  return (
    <div className='mt-5'>
        <h3>Usuario</h3>
        <button 
        onClick={ login }
        className='btn btn-outline-primary'>
        Login
        </button>
{
    (!user)

    ? <pre> No hay usuario</pre>
    : <pre>{JSON.stringify(user)}</pre>
}
    </div>
  )
}

export default Usuario