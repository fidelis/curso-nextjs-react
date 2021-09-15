import geraJogo from "../../functions/gerajogo";
import { useEffect, useState } from "react"

export default function megaSena() {
    const [x, setX] = useState(" ");

    useEffect(() => {
        setX(geraJogo());
    }, [])

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    return (
        <div style={estilo}>
            <h1>MEGASENA</h1>
            <div style={{color:"#ff0"}}>{x}</div>
            <div><h1></h1></div>
            <div>
                <button onClick={() => setX(geraJogo())}>Gera Jogo</button>
            </div>
        </div>
    )
}