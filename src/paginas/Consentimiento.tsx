import { Link } from "react-router-dom";


export function Consentimiento() {
return (
<div>
<h2>Consentimiento informado</h2>
<p>
Este estudio investiga cómo las personas toman decisiones. Tus datos son
completamente anónimos.
</p>
<Link to="/instrucciones">
<button>Acepto participar</button>
</Link>
</div>
);
}
