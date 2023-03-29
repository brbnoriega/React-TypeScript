import { ChangeEvent, useState } from "react";

// export function useForm<T>(initState: T) {  // t - tipo generico


  export const useForm = <T extends Object>( initState : T) => { // se puede extender de mas tipos!

  const [formulario, setFormulario] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    // desestructuro y especifico el tipo de dato
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  return {
    formulario,
    handleChange,
    ...formulario,
  };
}
