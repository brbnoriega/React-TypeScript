import Counter from "./components/Counter";
import Usuario from "./components/Usuario";
import TimerPadre from "./components/TimerPadre";
import ContadorRed from "./components/ContadorRed";
import Formulario from "./components/Formulario";
import Formulario2 from "./components/Formulario2";

function App() {
  return (
    <>
      <div>
        <h1>React + TypeScript</h1>
        <hr />
        <Counter />
        <Usuario />

        <h2>useEffect - useRef</h2>
        <hr />
        <TimerPadre />
        <hr />
        <h2>useReducer</h2>
        <ContadorRed />
        <hr />
        <h2>customHooks</h2>
        <Formulario />
        <br />
        <Formulario2/>
      </div>
    </>
  );
}

export default App;
