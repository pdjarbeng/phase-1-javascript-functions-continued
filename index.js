// Your code here

function saturdayFun(target = "roller-skate") {
    return `This Saturday, I want to ${target}!`
}
// saturdayFun()
// saturdayFun("bathe my dog")

function mondayWork(place = "go to the office") {
    return `This Monday, I will ${place}.`
}

function wrapAdjective(symbol ="*"){
    return function(rose = "special") {
        return `You are ${symbol}${rose}${symbol}!`
    }
}

//wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"