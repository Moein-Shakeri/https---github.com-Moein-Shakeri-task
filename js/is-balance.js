
console.log( isBalance("{}}"))

export default function isBalance(input) {
    const result = []
    const open = ['(','{','[']
    const close = [')','}',']']
    for (let str of input) { 
        if(open.includes(str)){
            result.push(str)
        }else if(close.includes(str)){ 
            const openPair = open[close.indexOf(str)] 
            if(result[result.length - 1] == openPair){ 
                result.splice(-1,1)
            }else{ 
                result.push(str)
                break
            }
        }
    }
    return (result.length === 0)
}
    