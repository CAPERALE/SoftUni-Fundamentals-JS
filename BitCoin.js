function exercise(input) {
    let bitcoinsBought = 0;
    let dayOfPurchase = 0;
    let days = 0;
    let money = 0;
    let check = false

    for(i=0; i<input.length; i++) {
        var goldMined = input[i]
        days++
        if(days%3 == 0) {
            goldMined*=0.7
        }
        money += goldMined*67.51
        if(money >= 11949.16) {
            if(check == false) {
                check = true
                dayOfPurchase = days
            }
            while(money>= 11949.16) {
                bitcoinsBought++
                money-=11949.16
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoinsBought}`)
    if(dayOfPurchase>=1) {
        console.log(`Day of the first purchased bitcoin: ${dayOfPurchase}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}
exercise([50,
    100])