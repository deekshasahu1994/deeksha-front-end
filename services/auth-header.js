export default function authHeader(){
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && user.token){
        console.log(user.token);
        var str = "Authorization: Bearer " + user.token;
        return str;
    }
    else{
        return {};
    }
}