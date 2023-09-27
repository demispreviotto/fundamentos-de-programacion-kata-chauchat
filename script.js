function reload() {
    for (let i = 0; i <= 7; i++) {
        if (i % 3 === 0) {
            console.log('')
        }
        console.log('Pium!')
    }
    console.log('Oh, no, Its empty!! Reload quick!!!("reload()")')
}
reload()