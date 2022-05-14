// Ex 1. Finding Nemo: https://edabit.com/challenge/c23dFfNiKbnguSQtq

function findNemo4(sentence) {
	sentenceArray = sentence.split(" ");

    for (let i=0; i< sentenceArray.length; i++) {
        if (sentenceArray[i] === "Nemo") {
            return `I found Nemo at ${i+1}!`
        }
    }

    return "I can't find Nemo :("

}

// Ex 2. Convert to Array: https://edabit.com/challenge/pPNAs5PvB3WvnDwDM

function toArray(obj) {
	return Object.entries(obj)
}