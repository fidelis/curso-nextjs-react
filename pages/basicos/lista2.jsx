function gerarlista() {
   const lista = (
       <h1>
        <spam>1,</spam>
        <spam>2,</spam>
        <spam>3,</spam>
        <spam>4,</spam>
        <spam>5,</spam>
        <spam>6,</spam>
        <spam>7,</spam>
        <spam>8,</spam>
        <spam>9,</spam>
        <spam>10</spam>
       </h1>
    )
    return lista
}

export default function lista2() {
    return (
        <div>
            {gerarlista()}
        </div>
    )
}