function isValid(s: string): boolean {

    for(let i=0;i<s.length;i++){
        if(s[i] === '('){
            if(!(s[i+1]===')')){
                return false;
            }else{
                i+=2;
            }
        }

        if(s[i] === '{'){
            if(!(s[i+1]==='}')){
                return false;
            }else{
                i+=2;
            }
        }
        if(s[i] === '['){
            if(!(s[i+1]===']')){
                return false;
            }else{
                i+=2;
            }
        }
    }
return true
}

console.log(isValid('()[{}'))

//eg {}()[]
//iterate over this,
//if  element is '(' then check if next element , if not equal to  ')' then return false else increment the element by 2
//if element is '{' then check if the next element , if not '}', then return false else increment the element by 2
//f element is '[' then check if the next element , if not ']', then return false else increment the element by 2

//else return true outside the loop,


