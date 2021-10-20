---
  id:
  title: Regular expressions "Regex"
  description:
    What are they and how to make one 
  duration: 1 day
  image: /images/projects/other/time-management.jpg
  tech:
    - name: regex
  category:
    - name: body of knowledge 
    - name: Software engineering
    - name: cyber
    - name: minor
  author:
    name: Rik Peeters
    image: /images/me.jpg
    social:
      twitter: rikp777
  slug: software-engineering_regular-expressions
---

# Regular expressions

Regular expressions are one of the most used programming functions. Almost all big programming languages such as Java, C# have them embedded in their language. 

But before we go deeper in to the topic you first need to understand what a regular expression ( regex) is. Regex  is a character set witch describes certain patterns its is mostly used to match and locate text in a string. 

## Cheat sheet summary 

To make a regex yourself you need to understand the list below. in doing so you have to understand what each character means and does. 

| Character   | Description |
|-------------|-------------|
| \           | the escape character - used to find an instance of a meta character like a period, brackets, etc. |
| .           | match any character except newline |
| x           | match any instance of x |
| ^x          | match any character except x |
| [x]         | match any instance of x in the bracketed range - [abxyz] will match any instance of a, b, x, y, or z|
| \|           | an OR operator - [xꟾy] will match an instance of x or y |
| () | used to group sequences of characters or matches |
| {} | used to define numeric quantifiers |
| {x} | match must occur exactly x times |
| {x,} | match must occur at least x times |
| {x,y} | match must occur at least x times, but no more than y times |
| ? | preceding match is optional or one only, same as {0,1} |
| * | find 0 or more of preceding match, same as {0,} |
| + | find 1 or more of preceding match, same as {1,} |
| ^ | match the beginning of the line |
| $ | match the end of a line |
|  |  |
| [:alpha:] | Represents an alphabetic character. Use [:alpha:]+ to find one of them. |
| [:digit:] | Represents a decimal digit. Use [:digit:]+ to find one of them. |
| [:alnum:] | Represents an alphanumeric character ([:alpha:] and [:digit:]). |
| [:space:] | Represents a space character (but not other whitespace characters). |
| [:print:] | Represents a printable character. |
| [:cntrl:] | Represents a nonprinting character. |
| [:lower:] | Represents a lowercase character if Match case is selected in Options. |
| [:upper:] | Represents an uppercase character if Match case is selected in Options. |
|  |  |
| \d | matches a digit, same as [0-9] |
| \D | matches a non-digit, same as [^0-9] |
| \s | matches a whitespace character (space, tab, newline, etc.) |
| \S | matches a non-whitespace character |
| \w | matches a word character |
| \W | matches a non-word character |
| \b | matches a word-boundary (NOTE: within a class, matches a backspace) |
| \B | matches a non-wordboundary |

ass you can see its quite an extensive list of characters

Regex is a realy powerfull tool to restrict string inputs 

| Description                   | Regex                           ||
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| (1) Email address             | ^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}\|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$ |                                                              |
| (2) Email address             | ^[\\w\\-]+(\\.[\\w\\-]+)*@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$ |                                                              |
| (3) Email address -           | ^([\w\.*\-*]+@([\w]\.*\-*)+[a-zA-Z]{2,9}(\s*;\s*[\w\.*\-*]+@([\w]\.*\-*)+[a-zA-Z]{2,9})*)$ | List of semi-colon seperated email addresses                 |
| (4) Email adress              | ^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$   |                                                              |
| Credit Cards                  | ^(?:4[0-9]{12}(?:[0-9]{3})?\|5[1-5][0-9]{14}\|6011[0-9]{12}\|622((12[6-9]\|1[3-9][0-9])\|([2-8][0-9][0-9])\|(9(([0-1][0-9])\|(2[0-5]))))[0-9]{10}\|64[4-9][0-9]{13}\|65[0-9]{14}\|3(?:0[0-5]\|[68][0-9])[0-9]{11}\|3[47][0-9]{13})*$ |                                                              |
| IP Address                    | ^((?:(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?))*$ |                                                              |
| Username                      | [^@/]+@[^@/]+                                          | of type test@test                                            |
| Multiple spaces replacement   | \\\s+                                                  |                                                              |
| Non-alphanumeric replacement  | [^a-zA-Z0-9]                                           |                                                              |
| Blank line                    | ^$                                                     |                                                              |
| Positive integers             | ^[1-9]+[0-9]*$                                         |                                                              |
| Positive decimal values       | (^\d*\.?\d*[0-9]+\d*$)\|(^[0-9]+\d*\.\d*$)              |                                                              |
| Percentage (2 decimal places) | ^-?[0-9]{0,2}(\.[0-9]{1,2})?$\|^-?(100)(\.[0]{1,2})?$   |                                                              |
| State abbreviation            | [A-Z][A-Z]                                             | You may choose to put spaces either before or after the regex. |
| Phone Numbers                 | (^\+[0-9]{2}\|^\+[0-9]{2}\(0\)\|^\(\+[0-9]{2}\)\(0\)\|^00[0-9]{2}\|^0)([0-9]{9}$\|[0-9\-\s]{10}$) |                                                              |
|                               | ^((\+\|00(\s\|\s?\-\s?)?)31(\s\|\s?\-\s?)?(\(0\)[\-\s]?)?\|0)[1-9]((\s\|\s?\-\s?)?[0-9])((\s\|\s?-\s?)?[0-9])((\s\|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$ | 06 1234567 or +31(06) 123 45678                              |
| City, State abbreviation      | .*, [A-Z][A-Z]                                         |                                                              |
| Zip Code                      | [0-9]\{5\}(-[0-9]\{4\})?                               | US for example 84094 or 84094-1234                           |
| Social security number,       | [0-9]\{3\}-[0-9]\{2\}-[0-9]\{4\}                       | such as: ###-##-####                                         |
| Dollar amounts                | \$[0-9]*.[0-9][0-9]                                    | specified with a leading $ symbol                            |
| DATE                          | [0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}                       | 2003-08-06                                                   |
|                               | [A-Z][a-z][a-z] [0-9][0-9]*, [0-9]\{4\}            | Jan 3, 2003                                                  |
|                               | ^(\d{1,2})\/(\d{1,2})\/(\d{2}\|(19\|20)\d{2})$           | DD/MM/YY or DD/MM/YYYY or MM/DD/YY or MM/DD/YYYY             |
| HTML Tags except              | <(?>/?)(?!p).+?>                                       | ```html <p> </p> ```                                         |
| URL                           | ^http(s)?:\/\/((\d+\.\d+\.\d+\.\d+)\|(([\w-]+\.)+([a-z,A-Z][\w-]*)))(:[1-9][0-9]*)?(\/([\w-.\/:%+@&=]+[\w- .\/?:%+@&=]*)?)?(#(.*))?$/i |                                                              |

By default the community made some standard expressions you can use for your goal so you don't have to create one yourself. But you must be able to understand what is being performed in such an expression.

# Cyber 

## Denial of service attack (ReDoS)

A denial of service attack is when an attacker makes an online service slow down or become unavailable to its users. 

Denial-of-service for regular expressions (ReDoS) is a denial-of-service attack that takes advantage of the fact that most implementations of regular expressions can get into extreme situations that make them work very slowly (exponentially depending on the input size). An attacker can use a [stripped down] regular expression to get a program into these extreme situations and then get stuck for a long time. 

### Evil Regex

A regex pattern is known as a evil regex if it can get stuck in the generated input that is given.

Evil regex contains :

- Grouping with a lot of repetition
- Inside of repetition group 
  - Again repetition (many nested repertitions)
  - Alternation with overlapping

some examples 

- ```regex
  ^(a+)+$
  ```

- ```regex
  ([a-zA-Z]+)*
  ```

- ```regex
  (a|aa)+
  ```

- ```regex
  (a|a?)+
  ```

- ```regex
  (.*a){x} for x \> 10
  ```

- ``` regex
  \^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$ 
  ```


These regex expressions are all sensitive to the string input:
- 			aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!

```javascript
var validUrlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
var url = 'https://google.com/'

console.time('regex evaluation time')

if (url.match(validUrlRegex)) {
  console.log(url + ' is a valid url')
} else {
  console.log(url + ' is not a valid url')
}

console.timeEnd('regex evaluation time')
```

The output should be:

```text
https://google.com/ is a valid url
regex evaluation time: 2ms
```

But now consider to apply the regular expression on a bad url introduced in our code by an attacker.

```javascript
var validUrlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
var badUrl = 'https://google.com/aaaaaaaaaaaaaaaaaaaaaaaa@'

console.time('regex evaluation time')

if (badUrl.match(validUrlRegex)) {
  console.log(badUrl + ' is a valid url')
} else {
  console.log(badUrl + ' is not a valid url')
}

console.timeEnd('regex evaluation time')
```

Output:

```text
https://google.com/aaaaaaaaaaaaaaaaaaaaaaaa@ is not a valid url
regex evaluation time: 2196ms
```

As you can observe, the evaluation time of regex has been increased by 1000 times by adding only 25 characters to previous url. Let's see why.

__Fair warning, I actually managed to crash my computer when trying this out by giving a super long string as input._

### The attack 



### Prevent This Vulnerability

Recognizing evil regular expressions requires in-depth knowledge / experience with them. There are also tools to recognize these types of regular expressions. As a software-engineer you have to be vary careful when applying regular expressions in your code. Always have a limit on how many characters to accept from a input. Or use standard libraries to check certain expressions. "Sanitize and filter user's inputs" this is a rule valid also for other type of attacks. Since the attack can be originated from a input string, filter and sanitize it before to evaluate it to avoid unhandled errors or attacks.

