import { useEffect, useRef, useState } from "react";

export function Ensayo({
  participanteId,
  numero,
  bloque,
  condicion,
  magnitud,
  opcionA,
  opcionB,
  tiempoMax,
  onGuardar
}: any) {
  const inicioRef = useRef<number | null>(null);
  const limiteRef = useRef<number | null>(null);

  const [eleccion, setEleccion] = useState<null | "A" | "B">(null);
  const [confianza, setConfianza] = useState<number | null>(null);
  const [rt, setRT] = useState<number | null>(null);

  useEffect(() => {
    inicioRef.current = performance.now();

    if (condicion === "rapida" && tiempoMax) {
      limiteRef.current = window.setTimeout(() => {
        if (!eleccion) finalizar("sin_respuesta", tiempoMax);
      }, tiempoMax);
    }

    return () => limiteRef.current && clearTimeout(limiteRef.current);
  }, []);

  const elegir = (opc: "A" | "B") => {
    const fin = performance.now();
    setEleccion(opc);
    setRT(fin - (inicioRef.current ?? fin));

    if (limiteRef.current) clearTimeout(limiteRef.current);
  };

  const finalizar = async (
    respuesta: "A" | "B" | "sin_respuesta",
    rtForzado?: number | null
  ) => {
    const datos = {
      participanteId,
      numero,
      bloque,
      condicion,
      magnitud,
      opcionA,
      opcionB,
      respuesta,
      rt_ms: rtForzado ?? rt,
      confianza,
      tiempoMax,
      mostradoEn: new Date().toISOString()
    };

    await onGuardar(datos);
  };

  return (
    <div>
      <h2>Ensayo {numero}</h2>
      <h3>{bloque.toUpperCase()} — {condicion.toUpperCase()}</h3>

      <button onClick={() => elegir("A")}>
        A: ${opcionA.monto}{" "}
        {opcionA.dias ? `en ${opcionA.dias} días` : ""}
        {opcionA.prob ? ` (p=${opcionA.prob})` : ""}
      </button>

      <button onClick={() => elegir("B")}>
        B: ${opcionB.monto}{" "}
        {opcionB.dias ? `en ${opcionB.dias} días` : ""}
        {opcionB.prob ? ` (p=${opcionB.prob})` : ""}
      </button>

      {eleccion && (
        <div>
          <p>¿Qué tanta confianza tienes? (1-5)</p>
          {[1, 2, 3, 4, 5].map(n => (
            <button key={n} onClick={() => setConfianza(n)}>
              {n}
            </button>
          ))}

          {confianza && (
            <button onClick={() => finalizar(eleccion)}>
              Continuar
            </button>
          )}
        </div>
      )}
    </div>
  );
}

