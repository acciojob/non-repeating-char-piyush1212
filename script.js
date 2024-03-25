function firstNonRepeatedChar(str) {
    if (str.length === 0) {
        return null;
    }

    const charCount = {}; // Object to store character counts

    // Count occurrences of each character in the string
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through the string again to find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    // If no non-repeated character is found
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
