

interface ContactInfo {
    info:string
}
interface Address{
    addrs:string
}
interface UserProfile extends ContactInfo,Address{
    user:string
}

const test:UserProfile={
    info:'test',
    addrs:'test',
    user:'test'
}
function test2 (user:UserProfile){
    console.log(user)
}
test2(test)