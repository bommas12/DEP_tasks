//https://www.codewars.com/kata/5351b35ebaeb67f9110012d2/train/javascript
function createSecretHolder(secret) {
    return {
        getSecret: () => secret,
        setSecret: value => secret = value
    }
}

const holder = createSecretHolder(5);
console.log(holder.getSecret());//expected false
holder.setSecret(true);
console.log(holder.getSecret());//expected true
