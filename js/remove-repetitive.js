
console.log(removerRepetitive("mooeeeiiiinnnwrqwwwwnn"))

export default function removerRepetitive(string) {
    let result =""
    for (let index = 0; index <string.length; index++) {
        const str = string.slice(index,index+1)
        if (string.slice(index,index+1)!= string.slice(index + 1 ,index + 2)) {
            result += str
        }     
    }
    return result
}
    