import { useState } from "react"

export default function formulario() {
    const [valor, setValor] = useState("inicial")

    function alteraValor() {
        setValor
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }

        }>
            <input type="text" value={valor} onChange={e => setValor(e.target.value)}/>
            <div>
                <h1> 
                    <span>
                        {valor}
                    </span>
                </h1>
            </div>
        </div>
    )
}