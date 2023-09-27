let cargador = 7;


function chauchat(cargador) {
    for (let i = 0; i < cargador; i++) {
        let random = Math.floor(Math.random() * 10)
        // console.log(random)
        if (i % 4 === 0) {
            console.log(random)
            console.log('```')
            console.log(i)
            cargador += 1;
        } else {
            if (random >= 8) {
                console.log(random)
                console.log('Pium!')
                console.log(i)
                // cargador -= 1;
            } else {
                console.log(random)
                console.log('Illo, me he quedao pillá!');
                break;
            }
        }
        i === 7 && console.log('Oh, no, Esta vacio!! Recarga!!!("recargar()")')
    };
}
// }
chauchat(cargador);
function recargar() {
    chauchat(cargador)
}