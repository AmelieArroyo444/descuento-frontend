import { Link } from "react-router-dom";


export function Instrucciones() {
return (
<div>
<h2>Instrucciones</h2>
<p>
Se te mostrarán pares de opciones. Algunas decisiones tienen tiempo
limitado y otras no. Después de elegir, indicarás tu nivel de confianza.
</p>
<Link to="/experimento">
<button>Comenzar</button>
</Link>
</div>
);
}
