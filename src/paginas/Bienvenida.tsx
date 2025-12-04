import { Link } from "react-router-dom";


export function Bienvenida() {
return (
<div>
<h1>Bienvenida/o al experimento</h1>
<p>Gracias por participar en este estudio sobre toma de decisiones.</p>
<Link to="/consentimiento">
<button>Continuar</button>
</Link>
</div>
);
}
