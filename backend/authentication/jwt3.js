const jwt = require('jsonwebtoken');
const zod = require("zod");
const jwtPassword = 'secret';


// defining schema
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

// generating / signing jwt
function signJwt(username, password) {
    
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success) {
        return null;
    }
    if(!passwordResponse.success) {
        return null;
    }

    const signature = jwt.sign({username}, jwtPassword);
    return signature;
}


// verifying jwt
function verifyJwt(token) {
    let ans = true;
    try {
        jwt.verify(token, jwtPassword);
    } catch (e) {
        ans = false;
    }
    return ans
}


// decoding jwt
function decodeJwt(token) {
    const decoded = jwt.decode(token);
    if(decoded) {
        return true;
    } else {
        return false;
    }
}


// how to use:
// sign: console.log(signJwt("fuyofulo@gmail.com", "password123"));
// verify: console.log(verifyJwt(signature));
// decode: 

console.log(signJwt("fuyofulol@gmail.com", "password123"));
//token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZ1eW9mdWxvQGdtYWlsLmNvbSIsImlhdCI6MTcxMjU4NTQ3NH0.u0HkPB7MSS9zdqEKzeJp_AFgjHK31dcfE5a4FVWf_Ok

console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZ1eW9mdWxvQGdtYWlsLmNvbSIsImlhdCI6MTcxMjU4NTQ3NH0.u0HkPB7MSS9zdqEKzeJp_AFgjHK31dcfE5a4FVWf_Ok"));

console.log(decodeJwt(("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZ1eW9mdWxvQGdtYWlsLmNvbSIsImlhdCI6MTcxMjU4NTQ3NH0.u0HkPB7MSS9zdqEKzeJp_AFgjHK31dcfE5a4FVWf_Ok")))