import { useReducer } from "react";

const initialState = {
  contador: 0,
};

type ActionType = //acciones posibles

    | { type: "incrementar" }
    | { type: "decrementar" }
    | { type: "custom"; payload: number }; //payload arg que viene en la action y puede recibir lo que querramos

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  // recibira argumentos

  switch (action.type) {
    case "incrementar":
      return {
        ...state, //siempre retornar nuevo state
        contador: state.contador + 1,
      };
    case "decrementar":
      return {
        ...state, 
        contador: state.contador - 1,
      };
    case "custom":
      return {
        ...state, 
        contador: action.payload,
      };

    default:
      return state;
  }

  return state;
};

const ContadorRed = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <h4>Contador: {contadorState.contador}</h4>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "incrementar" })}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "decrementar" })}
      >
        -1
      </button>

      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: "custom", payload: 0 })}
      >
      Reset
      </button>
    </>
  );
};

export default ContadorRed;
