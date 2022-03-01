let x = "Bb Smith sent us six neatly arranged range bicycles"
function absentVowel(x){
    temp = x.toLowerCase()
    // console.log(!x.includes('a'))
    if(!x.includes('a')){
        result = 0
    } else if(!x.includes('e')){
        result = 1
    }
    else if(!x.includes('i')){
        result = 2
    }
    else if(!x.includes('o')){
        result = 3
    }
    else if(!x.includes('u')){
        result = 4
    }
    return result
    }
console.log(absentVowel(x))