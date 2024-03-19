let sentence = "please please submit your assignment on time your assignments are important";

function countWordOccurrences(sentence) {
    let wordMap = new Map();
    let words = sentence.split(" ");
    
    words.forEach(function(word) {
        if (wordMap.has(word)) {
          wordMap.set(word, wordMap.get(word) + 1);
        } else {
          wordMap.set(word, 1);
        }
    });
    
    return wordMap;
  }
  
let result = countWordOccurrences(sentence);
  console.log(result)