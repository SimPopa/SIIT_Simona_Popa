// # Javascript Control Structures

// var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1]
// Using control structures (if, for, while), do the following::
// ## Display in browser console

// 1.  display in the console the numbers from 1 to 20
// 2.  display in the console the odd numbers from 1 to 20
// 3.  compute the sum of the elements of an array and display it in the console
// 4.  compute the maximum of the elements of an array and display it in the console
// 5.  compute how many times a certain element appears in an array - tips: use object, var element = 2
// 6.  Using nested control structures (doua for + if) for generate the following pattern
           
//            0 1 0 1

//            1 0 1 0

//            0 1 0 1

//            1 0 1 0

// Exercitiu 1
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1]

for ( var i = 0; i < array.length; i++ ) {
    var result= array[i]
    if (1 <= result && result <= 20)
        console.log(result)
}

// Exerxitiu 2

var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1]

for (var i = 0; i < array.length; i++) {
    var result = array[i]
    if (1<= result && result <= 20 && result % 2 == 1)
        console.log(result)
}

// Exerxitiu 3

var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1]
var sum = 0

for (var i=0; i < array.length; i++) {
    sum += array[i]
}
console.log(sum)

// Exercitiu 4

var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1]
var max = 0

for (var i=0; i < array.length; i++) {
    if (array[i] > max) 
        max = array[i]
}
console.log(max)


// Exercitiu 5
// structura: 1. var checked - verifica daca aaray[i] este deja inclus. daca da, skip, daca nu - adauga array[i] la checked
//             2. verifica pentru array[i] daca se mai afla in array, si daca da, incrementeaza var times.
//               3. console log de cate ori se repeta fiecare valoare 
// P.S. - treaba asta mi-a luat ore bune, sunt fericita ca am dus-o la capat. Te rog sa imi spui daca exista o metoda mai simpla de a o scrie.

var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1]
var checked =[]

for (var i=0; i < array.length; i++) {
    var num=array[i]
    var times = 1
    if (checked.includes(array[i]) )
        continue
    else {
        checked.push(array[i])
        // console.log(`checked ${checked}` )

    for (var i2=i+1; i2 < array.length; i2++) {

        if (array[i2] == num) 
            {times++}

        }
        if(times==1){   
        console.log(`${num} appeared only ${times} time`)}
        else {console.log(`${num} appeared ${times} times`)}

    }
}



// Functioneaza, dar doar pentru cate un Element, nu le listeaza pe toate:
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1] 
function f(array,value){
    var n = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == value){
            n++
        }
    }
    return n;
}
console.log(f(array,1))


// Exercitiu 6 
// 6.  Using nested control structures (doua for + if) for generate the following pattern
           
//            0 1 0 1

//            1 0 1 0

//            0 1 0 1

//            1 0 1 0



var result = "";
for (var index = 0; index < 4; index++) {
    if (index % 2 == 0){
  for (var index2 = 0; index2 < 4; index2++) {
    console.log(index, index2)
    if (index2 % 2 == 0) {
        result = result + "1 "}
    else {result = result + "0 "}
  }

  result = result + "\n";
}
    else if (index % 2 == 1){
        for (var index2 = 0; index2 < 4; index2++) {
            console.log(index, index2)
            if (index2 % 2 == 0) {
                result = result + "0 "}
            else {result = result + "1 "}
          }

          result = result + "\n";
    }
}
console.log(result);