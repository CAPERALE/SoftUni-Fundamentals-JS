function exercise (input) {
    let toyMoney = 0;
    let sweatMoney = 0;
    let kids = 0;
    let adults = 0;
    for(i=0; i<(input.length-1); i++) {
        let person = input[i]
        if(person > 16) {
            sweatMoney+=15
            adults++
        } else {
            toyMoney+=5
            kids++
        }
    }
    console.log(`Number of adults: ${adults}`)
    console.log(`Number of kids: ${kids}`)
    console.log(`Money for toys: ${toyMoney}`)
    console.log(`Money for sweaters: ${sweatMoney}`)

}
exercise([16,
    20,
    46,
    12,
    8,
    20,
    49,
    'Christmas'])