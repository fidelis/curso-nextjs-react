export default function repeticao1() {
    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Carlos',
        'Daniel',
        'Laura',
    ]
    function rederizarLista() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }
    return rederizarLista()
}