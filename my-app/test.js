function titleCase(str) {
    //break down into words
    var lowerCase = str.toLowerCase();
    var splitStr = lowerCase.split(" ");
    //capitalize first letter of each word
    var upperCaseWords = [];

    for (var i = 0; i < splitStr.length; i++) { //log = pasi de injumatatire
        let fixed = fix(splitStr[i])
        upperCaseWords.push(fixed)
    }
    upperCaseWords

    upperCaseWords = splitStr.map(function (s) {
        return fix(s)
    })
    upperCaseWords

    upperCaseWords = splitStr.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    upperCaseWords

    //object calistenics 12 rules

    upperCaseWords = splitStr.map((s) => { return fix(s) })
    upperCaseWords

    upperCaseWords = splitStr.map((s) => fix(s))
    upperCaseWords

    upperCaseWords = splitStr.map(fix)
    upperCaseWords

    //Assemble the string, and the add spaces back 
    var result = "";

    for (var i = 0; i < upperCaseWords.length; i++) {
        result += " " + upperCaseWords[i];
    }
    return result.slice(1)
}

/*

1w -> 2it
5w -> 10it

f(x) = c ---> O(1)

w -> it * 2 // f(x) = x * c -> functie liniara O(t)

f(x) = log_2_[x] //fiecare iteratie numarul de operatie se injumatateste O(log_t)

f(x) = x^c

f(x) = c^x

plot drawer 

*/
function fix(s) {
    let firstLetter = s.charAt(0)
    var upperCase = firstLetter.toUpperCase();
    var reminder = s.slice(1)
    return upperCase + reminder;
}

titleCase("I'm a little tea pot");

