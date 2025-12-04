import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Bienvenida } from "./paginas/Bienvenida";
import { Consentimiento } from "./paginas/Consentimiento";
import { Instrucciones } from "./paginas/Instrucciones";
import { Experimento } from "./paginas/Experimento";
import { Final } from "./paginas/Final";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/consentimiento" element={<Consentimiento />} />
        <Route path="/instrucciones" element={<Instrucciones />} />
        <Route path="/experimento" element={<Experimento />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
}
 	 	 	 	 	 	 	 		  	 		  	 	 		                      
	 	 	 
