// Ex 1. Factorial(addition): https://edabit.com/challenge/4gzDuDkompAqujpRi

function addUp(num) {
	var sum = 0
    for(var i =0; i<= num; i++){
        sum = sum+i
    };

    return sum;
}

// EX 2. Min, max from array: https://edabit.com/challenge/Q3n42rEWanZSTmsJm

function minMax(arr) {
	var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    arrayN = [min, max];
    return arrayN;
}

// Ex 3. Repeat all letters in string: https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB

// function doubleChar(str) {
// 	var result = "";
//     for(i=0; i < str.length; i++){
//         letters = str[i].concat(str[i]);
//         result = result.concat(letters);
//     };
//     return result;
// }

function doubleChar2(str) {
	var strArray = str.split("");

    var doubledArr = strArray.map(x => x+x);

    result = doubledArr.join("");

    return result;

}

// Ex 4. Array with no duplicates: https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd

function set(arr) {
	const uniqueSet = new Set(arr);

    const newArr = [...uniqueSet];

    return newArr;

}

//Ex 5. Chat room status: https://edabit.com/challenge/hscAGyt4iNZ3PKy3g

function chatroomStatus(users) {
	if (users.length == 0){
        return `no one online`
    }

    else if (users.length == 1){
        return `${users} online`
    }

    else if (users.length == 2){
        return `${users[0]} and ${users[1]} online`
    }

    else if (users.length > 2){
        return `${users[0]}, ${users[1]} and ${users.length -2} more online`
    }
}