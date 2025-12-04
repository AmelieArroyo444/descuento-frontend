import { useState } from "react";
import reactivos from "../datos/reactivos.json";
import { Ensayo } from "../componentes/Ensayo";
import { useNavigate } from "react-router-dom";


export function Experimento() {
const [indice, setIndice] = useState(0);
const [participanteId] = useState(() => crypto.randomUUID());
const navegar = useNavigate();


const guardar = async (datosEnsayo: any) => {
await fetch("https://TU_BACKEND/api/ensayos", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(datosEnsayo)
});


if (indice + 1 >= reactivos.length) {
navegar("/final");
return;
}


setIndice(i => i + 1);
};


return (
<Ensayo
participanteId={participanteId}
numero={indice + 1}
{...reactivos[indice]}
onGuardar={guardar}
/>
);
}
