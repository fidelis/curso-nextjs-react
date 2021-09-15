import { useState } from "react"

export default function contador() {
    const [x, setX] = useState(0)

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
            <h1>Contador</h1>
            <div>Valor: {x}</div>
            <div>
                <button onClick={() => setX(x-1)}>-</button>
                <button onClick={() => setX(x+1)}>+</button>
            </div>
        </div>
    )
}