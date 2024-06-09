function isValid(s) {
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (!(s[i + 1] === ')')) {
                return false;
            }
            else {
                i += 2;
            }
        }
        if (s[i] === '{') {
            if (!(s[i + 1] === '}')) {
                return false;
            }
            else {
                i += 2;
            }
        }
        if (s[i] === '[') {
            if (!(s[i + 1] === ']')) {
                return false;
            }
            else {
                i += 2;
            }
        }
    }
    return true;
}
console.log(isValid('()[{}'));
