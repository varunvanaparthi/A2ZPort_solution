function findTheLongestWord(sentence) {
    // Filter out non-alphabetical characters and split the sentence into words
    const words = sentence.replace(/[^a-z\s]/gi, '').split(" ");
    
    // Helper function to count vowels in a word
    const countVowels = (word) => {
        return Array.from(word).reduce((vow, char) => {
            if ('AEIOUaeiou'.includes(char)) {
                vow++;
            }
            return vow;
        }, 0);
    }

    let longest_Word = "";
    let max_Vowels = 0;

    // Iterate through each word
    for (const word of words) {
        // If this word is longer than the previous longest, update
        if (word.length > longest_Word.length) {
            longest_Word = word;
            max_Vowels = countVowels(word);
        } 
        // If the word is of equal length, check the vowel count
        else if (word.length === longest_Word.length) {
            const current_Vowel_Count = countVowels(word);
            if (current_Vowel_Count > max_Vowels) {
                longest_Word = word;
                max_Vowels = current_Vowel_Count;
            }
        }
    }
    
    return longest_Word;
}

string = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"

console.log(findLongestWord(string));