

console.log(encoder("abz",2))

function encoder(inputString , repeatCount) {

    let result = inputString
    let num = result.length - 1 ;
    result = result.slice(num) + result.slice(0, num);
    
    for (let index = 0; index < repeatCount; index++) {
    resultArray = result.split('')
        let str = ""
        resultArray.map((item)=>{
            let asciiCode = item.codePointAt(0)
            asciiCode += 1
            if (asciiCode == 123) asciiCode = 97 
            str = str + String.fromCodePoint(asciiCode)
        })   
        result = str     
    }
    return result
    
}
    