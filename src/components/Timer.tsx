import { useEffect, useState, useRef } from 'react';

type TimerArgs = {
    milisegundos: number
}

  
const Timer = ({milisegundos}: TimerArgs) => {

    const [segundos, setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timeout>(); //crea una referencia que no importa las veces que se reconstruya el componente siempre tiene mismo puntero en memoria


    useEffect( () => {
        ref.current && clearInterval( ref.current ); // condicional con clearInterval limpia y siempre requiere recibir una function
        ref.current = setInterval( () => setSegundos( s => s + 1 ) , milisegundos ); // hace un callback adentro del setSegundos
    }, [milisegundos])

    return (
        <>
            <h4>Timer: <small>{ segundos }</small></h4>
        </>
    )
}

export default Timer