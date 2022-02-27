// Edabit - exercises

// Easy difficulty

// Ex.1 - return sum
// https://edabit.com/challenge/3LpBLgNRyaHMvNb4j

function addition(a, b) {
    var result = a + b;
    return result
}

// Ex.2 - convert minutes into Seconds
// https://edabit.com/challenge/8q54MKnRrm89pSLmW

function convert(minutes) {
    if (typeof minutes !== 'number') {
        return 'Sorry you did not pass a valid input';
    }
    return minutes * 60
}

// Ex. 3 - return the next number
// https://edabit.com/challenge/NAQhEoxbofPidLxm9

function addition(num) {
    num++;
    return num
}

//sau mai simplu

function addition(num) {
    return ++ num
}

// Ex. 4 - return the first item in an array
// https://edabit.com/challenge/QaApgtePE6QrCZ64o

function getFirstValue(arr) {
    return arr[0]
}

// Ex. 5 - return the remainder of 2 numbers
// https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk

function remainder(x, y) {
    return x % y;
}



// Ex. 6 - return the number of feet in farm animals
// https://edabit.com/challenge/8Qg78sf5SNDEANKti

function animals(chickens, cows, pigs) {
    return 2 * chickens + 4 * cows + 4 * pigs
}

// Ex. 7 - Check if an Integer is Divisible By Five
// https://edabit.com/challenge/iBQYbSHZGhpktLRdn

function divisibleByFive(n) {
    if (n % 5 == 0) 
        return true;
     else 
        return false;
    


}

// sau mai simplu

function divisibleByFive(n) {
    return(n % 5 == 0);
}

// Ex. 8 - Compare Strings by Count of Characters
// https://edabit.com/challenge/yHGowWucg3k2kJdZ4

function comp(str1, str2) {
    return(str1.length == str2.length);
}

// Ex. 9 - Say "Hello" Say "Bye"
// https://edabit.com/challenge/kLa2w7m4h849k8rmW

function sayHelloBye(name, num) {
    if (num === 1) {
        return "Hello " + name.charAt(0).toUpperCase() + name.slice(1)
    } else 
        return "Bye " + name.charAt(0).toUpperCase() + name.slice(1)

    

}

// Medium Difficulty

// EX.1  - Add up the Numbers from a Single Number
// https://edabit.com/challenge/4gzDuDkompAqujpRi

function addUp(num) {
    var n = 0;
    var sum = 0;
    while (n < num) {
        n++;
        sum += n;
    }
    return sum
}

// or

function addUp(num) {
    var sum = 0;
    for (var i = num; i > 0; i--) {
        sum += i;
    }
    return sum;
}


// Ex. 2 - Find the Smallest and Biggest Numbers
// https://edabit.com/challenge/Q3n42rEWanZSTmsJm

function minMax(arr) {
    var min = arr[0];
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        } else 
            continue
    }
    a = [min, max]
    return a
}

// or

function minMax(arr) {
    const min = Math.min(... arr);
    const max = Math.max(... arr);

    return [min, max];
}

// Ex. 3 - Repeating Letters
// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB

function doubleChar(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        result += str[i].repeat(2)
    }
    return result
}



// EX. 4 - Transform into an Array with No Duplicates
// https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd

function set(arr) {
	return Array.from(new Set(arr));
}

//Ex. 5 - Chat Room Status
// https://edabit.com/challenge/hscAGyt4iNZ3PKy3g

function chatroomStatus(users) {
	var usersNumber = users.length
	var moreUsers = users.length - 2
	if (usersNumber == 0) {
		return "no one online"}
	else if (usersNumber == 1) {
		return users[0] + " online"}
	else if (usersNumber == 2) {
		return users[0] + " and " + users[1] + " online"}
	else if (usersNumber > 2) {
		return users[0] + ", " + users[1] + " and " + moreUsers + " more online"}
}

// Hard difficulty

//Ex. 1  - Finding Nemo - - Asta nu stiu daca se pune, a fost mai mult Google decat idei proprii
// https://edabit.com/challenge/c23dFfNiKbnguSQtq

function findNemo(sentence) {
    const paragraph = sentence.split(" ");  
    const searchTerm = 'Nemo';
    const indexOfFirst = paragraph.indexOf(searchTerm);
    if (indexOfFirst >= 0) {
      return `I found ${searchTerm} at ${indexOfFirst +1}!`}
    else 
        return "I can't find Nemo :("
}

//Ex. 2 - Converting Objects to Arrays
// https://edabit.com/challenge/pPNAs5PvB3WvnDwDM

function toArray(obj) {
	var entries = Object.entries(obj);
	return entries
}