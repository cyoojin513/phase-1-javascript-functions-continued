// code your solution here
function saturdayFun(play = "roller-skate") {
    return `This Saturday, I want to ${play}!`
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(special = "*") {
    const inner = function (position = "a programmer") {
        return `You are ${special}${position}${special}!`
    }
    return inner
}