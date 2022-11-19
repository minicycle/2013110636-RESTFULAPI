const user2 = {
    name: "Thanarat",
    nickname: "Ikkyu",
    hobby: "sleep",
    address: "525/2",
    provice:{
        provice:"Bangkok",
        postcode: 10220
    }
}
const showData3 = () =>{
    let infoNickname = "My nickname is"
    let infoHobby = ", My hobby is"
    let infoPostcode = "and my postcode is"
    return `${infoNickname} 
    ${user2.nickname} 
    ${infoHobby} 
    ${user2.hobby} 
    ${infoPostcode} 
    ${user2.provice.postcode}`
}
console.log(showData3())