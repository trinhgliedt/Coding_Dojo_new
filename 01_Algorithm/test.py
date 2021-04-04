from math import ceil, floor

def justifyStr(str, L):
    # Trim the whitespace on each end of the string, and then split it with spaces in between
    splitStr = str.strip().split(" ")

    for index in range(ceil(len(splitStr)/2)):
        # Grab the first word
        firstWord = splitStr[index*2]

        # Grab the second word only if it exists (The last secondWord doesn't exist if the splitStr is odd)
        secondWord = splitStr[index*2 + 1] if len(splitStr) % 2 and index != floor(len(splitStr)/2) else ""

        # Initialize string with the first word in current iteration
        currentWord = firstWord

        # Count how many whitespaces should be between the words
        numOfSpaces = L - len(firstWord) - len(secondWord)
        spaces = ""
        for i in range(numOfSpaces):
            spaces += " "
        # Add the whitespaces
        currentWord += spaces
        
        # Add the next word
        currentWord += secondWord
        print(currentWord)

# justifyStr(str = "The quick brown fox jumps over the lazy dog.", L = 11)
justifyStr(str = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.", L = 20)