const texto1 = "Anita lava la tina";
const texto2 = "Hola mundo";

console.log(isPalindrome(texto1))
isPalindrome(texto2)



function isPalindrome(param) {


    //let texMinuscula = texto1.toLowerCase();
    let cleanText = param.replace(/ /g, '').toLowerCase();
    let splitText = [...cleanText];
    let reverse = splitText.reverse();
    let unionText = reverse.join("");

    if (cleanText === unionText) { return true }

    else {
        return false
    }

}