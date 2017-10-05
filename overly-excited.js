

// Create an array that contains the words in the sentence
let sentence = "The walrus danced through the trees in the light of the moon".split(" ");

/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/

function addExcitement (theWordArray, punctuation) {
    let sentence = ""
    let counter = 0
    var puncVar = punctuation
    for (let i = 1; i <= theWordArray.length; i++) {
        sentence += (" " + theWordArray[i - 1]);
        if (i % 3 == 0) {
            counter += 1
            for (let j = 0; j < counter;  j++) {
                sentence += punctuation
            }
       }
       console.log(sentence);
    }
}

// Invoke the function and pass in the array
addExcitement(sentence, "?");