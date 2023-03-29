// import { useState, ChangeEvent } from "react";
import { useForm } from "../hooks/useForm";

interface FormData {
    email: string;
    nombre: string;
    edad: number
}

const Formulario = () => {

    const {nombre, email, edad, handleChange, formulario} = useForm<FormData>({ // lo que exporto del useForm
        email: "barbaranoriega330@gmail.com",
        nombre: "Barbara Noriega",
        edad: 1
    });

// const {email, nombre, edad} = formulario;
//   const [formulario, setFormulario] = useState({
//     email: "",
//     nombre: "",
//   });

//   const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
//     // desestructuro y especifico el tipo de dato
//     const { name, value } = target;

//     setFormulario({
//       ...formulario,
//       [name]: value,
//     });
//   };

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="name"
          className="form-control"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
      </div>


      <div className="mb-3">
        <label className="form-label">Edad:</label>
        <input
          type="number"
          className="form-control"
          name="edad"
          value={edad}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};

export default Formulario;
