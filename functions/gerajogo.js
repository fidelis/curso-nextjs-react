export default function geraJogo() {
    var jogoArray = [0,0,0,0,0,0];
    for (var i=0; i < jogoArray.length; i++) {
        jogoArray[i] = Math.floor(Math.random() * 60 + 1);     
        if (jogoArray.reduce((pre, cur) => (cur === jogoArray[i]) ? ++pre : pre, 0)  > 1) {
            i--;
        }
    }    
    return jogoArray.sort((a, b) => a - b).reduce((a,b) => a + ' - ' + b);
}