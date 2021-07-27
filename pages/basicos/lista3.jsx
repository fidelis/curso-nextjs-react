function gerarlista() {
    const lista = []
    for (let i = 1; i <= 10; i++) {
        lista.push(<spam>{i},</spam>)
    }
     return lista
 }
 
 export default function lista3() {
     return (
         <div>
             <h1>
             {gerarlista()}
             </h1>
             <div id="legal">
                      <span className="opa">
                          JavaScript React
                      </span>
             </div>
         </div>
     )
 }