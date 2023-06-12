//! Regular expressions (regex)

//? Characters / constructs
//Regular expressions (regex) use a combination of characters and constructs to define patterns for matching and manipulating text. Here are some commonly used regex characters and constructs:

//* 1-Literal Characters:
// Regular characters such as letters, digits, and symbols match themselves in the text. For example, the regex pattern "a" matches the letter 'a' in a string.

//* 2- Metacharacters: Special characters that have a specific meaning in regular expressions. Some commonly used metacharacters are:
//"." (dot): Matches any single character except a newline.
//"^" (caret): Matches the beginning of a line or string.
//"$" (dollar): Matches the end of a line or string.
//"|" (pipe): Acts as an OR operator, matching either the expression before or after it.
//"" (backslash): Escapes a metacharacter, treating it as a literal character.

//* 3- Character Classes: Enclosed in square brackets [], character classes define a set of characters to match. Some examples are:
//[abc]: Matches any single character 'a', 'b', or 'c'.
//[0-9]: Matches any digit from 0 to 9.

//* 4- Quantifiers: Define how many times a character or group can occur. Some common quantifiers are:
//"*" (asterisk): Matches zero or more occurrences of the preceding character or group.
//"+" (plus): Matches one or more occurrences of the preceding character or group.
//"?" (question mark): Matches zero or one occurrence of the preceding character or group.
//"{n}" (curly braces): Matches exactly n occurrences of the preceding character or group.
//"{n,}" (curly braces with a comma): Matches n or more occurrences of the preceding character or group.
//"{n,m}" (curly braces with two commas): Matches between n and m occurrences of the preceding character or group.

//* 5- Grouping and Capturing:
//Parentheses () are used to group characters or expressions together. They can also capture and store matched text for later use.

//* 6- Backreferences:
//Backreferences allow you to refer to a previously matched group in the regex pattern. They are represented by \n, where n is the group number.

//* 7- Anchors: Anchors are used to match a position rather than a character. Some commonly used anchors are:
//"\b" (word boundary): Matches a word boundary.
//"\B" (non-word boundary): Matches a position that is not a word boundary.
//"^" (caret): Matches the beginning of a line or string.
//"$" (dollar): Matches the end of a line or string.

//* 8- Escape Sequences:
//Escape sequences allow you to match special characters or predefined character classes. For example, "\d" matches any digit, "\s" matches any whitespace character, and "\w" matches any word character.

//These are just a few examples of the characters and constructs used in regular expressions. Regular expressions can be quite powerful and have many more features and options depending on the specific regex engine or programming language you are using

//? Method

//If you're referring to methods related to regular expressions, they are typically provided by programming languages or libraries. The specific methods available may vary depending on the programming language you are using. Here's a general overview of common methods used with regular expressions:

//* match()
//This method attempts to match the regex pattern against a given string and returns the first match found. It usually returns a match object or an array of matches, including information about the matched portion of the string.

//* search()
//This method searches the string for a match to the regex pattern and returns the position of the first occurrence. It also returns a match object or an array of matches.

//* findall()
//This method finds all non-overlapping matches of the regex pattern in the string and returns them as a list or array.

//* finditer()
//Similar to findall(), this method finds all non-overlapping matches of the regex pattern but returns an iterator or generator object that allows you to iterate over the matches.

//* split()
//This method splits the string into substrings based on the occurrences of the regex pattern and returns them as an array or list.

//* sub() or replace()
//This method replaces occurrences of the regex pattern in the string with a specified replacement string.

//* compile()
//In some programming languages, you can pre-compile a regex pattern using this method to create a regex object. This can improve performance when reusing the same pattern multiple times.

//These methods may have additional parameters and options to customize their behavior, such as flags for case sensitivity, multiline matching, and global matching. The exact syntax and usage can vary depending on the programming language you are using. It's recommended to consult the documentation or specific language references for more details on how to use regular expression methods in your chosen language.

//? Flag

//* In the context of regular expressions, a flag (also known as a modifier or option) is an optional parameter that can be added to a regex pattern to modify its behavior. Flags are typically used in programming languages and regex libraries to provide additional control over the matching process. Here are some commonly used flags:

//* Case Insensitivity (i):
//When the "i" flag is used, the regex pattern matches characters regardless of their case. For example, /hello/i would match "hello", "Hello", "HELLO", and so on.

//* Multiline Mode (m):
//The "m" flag enables multiline mode, where the "^" and "$" anchors match the beginning and end of each line within a string, rather than just the start and end of the entire string.

//* Dot All Mode (s):
//By using the "s" flag, the dot metacharacter (".") matches any character, including newline characters. Without this flag, the dot does not match newlines.

//* Unicode Mode (u):
//The "u" flag enables Unicode mode, where Unicode characters are treated as individual characters instead of code units. This is useful when working with Unicode characters or extended character sets.

//* Global Mode (g):
//In some regex engines, the "g" flag is used to perform global matching. Instead of stopping at the first match, the engine continues searching for all matches within the string.

//* Ignore Whitespace (x):
//The "x" flag allows the use of whitespace and comments within the regex pattern. This can improve readability by allowing you to format the pattern more freely.

//Flags are typically added to a regex pattern using syntax specific to the programming language or library you are using. For example, in JavaScript, flags are appended after the closing delimiter of the regex pattern, such as /pattern/gi. In Python, flags can be specified using the re module functions, such as re.compile(pattern, re.IGNORECASE | re.MULTILINE).

//It's important to consult the documentation or reference guide of the programming language or regex library you are using to determine the available flags and their specific syntax and usage.
