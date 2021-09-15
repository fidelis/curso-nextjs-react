export default function geraJogo() {
    function jogo() {
        var jogoArray = [0,0,0,0,0,0];
        var count = 0;
        for (var i=0; i < jogoArray.length; i++) {
            jogoArray[i] = Math.floor(Math.random() * (60 - 1) + 1);   
            count = jogoArray.reduce((pre, cur) => (cur === jogoArray[i]) ? ++pre : pre, 0)    
            if (count > 1) {
                i--;
            }
        }
        function myFunc(ant, atu) {
            return ant + ' - ' + atu;
        }
        var jogoString = jogoArray.sort((a, b) => a - b).reduce(myFunc) 
        return jogoString
    }
    return (
        <span>{jogo()}</span>
    )
}