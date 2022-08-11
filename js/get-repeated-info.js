
console.log(getRepeatedInfo(252255115))

export default function getRepeatedInfo(number) {
    let result ={}
    let stringNumber = number.toString()
    let arrayNumber = stringNumber.split('')
    arrayNumber.map((num)=>{
        const key = Object.keys(result)
        let keyNum = num ;
        if(key.includes(num))keyNum = Number(result[num].length) + Number(num)
        let value = ""
        for (let index = 0; index < keyNum; index++) {
            num=num.toString()
            value = value + num            
        }
        result={...result,[num]:value} 
    })
    return result
}


