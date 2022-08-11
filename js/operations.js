
console.log(operations("-2 3 D R +"))

export default function operations(ops) {
    let result = []
    for (let index = 0; index < ops.length; index++) {
        let str =ops.slice(index , index +1)
        
        if (str != " ") {
           if (str== "-") {
               str += ops.slice(index+1 , index+2)   
            } 
            if ("-" == ops.slice(index-1 , index) ){
                
            }else{
                if (!isNaN(str)) {
                    result.push(Number(str))
                }else{
                    let num = null
                    switch (str) {
                        case "D":
                            num = result[result.length - 1] * 2
                            result.push(num)
                            break;
                        case "R":
                            if (result.length != 1) result.pop()
                            break;
                        case "+":
                            num = result[result.length - 1 ] + result[result.length - 2]
                            result.push(num)
                            break;
                                
                        default:
                            break;
                    }
                }
            }
        }    
    }

    return result
}