window.onload = () => {
    const btn=document.getElementById("btn")

    btn.addEventListener("click",check)
    
// start the check fumction
    function check(){
        const name=document.getElementById("full-name")
        const fail=document.getElementById("fail")
        const at =document.getElementById("email").value.indexOf("@")
        const email=document.getElementById("email")
        const phone=document.getElementById("phone")
        const msg=document.getElementById("msg")
        // check for the name
        if(name.value.length < 5) {
            name.style.backgroundColor="red"
            fail.style.display="block"
            fail.innerText="Full Names should be a minimum of 5 character"
        }
        // check for the email
        else if (at<=2 || (email.value.length-at<=5)){
            email.style.backgroundColor="red"
            fail.style.display="block"
            fail.innerText="Email field should be an email, with a minimum of 3 characters before the @ and 5 characters after the @"
        }
        // I've stoped this because when i enter the phone number "96171505680" the data base give me this warning ("Please enter a value less than or equal to 2147483647")
        // check for the phone number
        // else if (phone.value.substring(0,4)!="+961"){
        //     phone.style.backgroundColor="red"
        //     fail.style.display="block"
        //     fail.innerText="Phone Number should start with +961"
        // }
        // else if (phone.value.substring(0,4)=="+961"){
        //     if(phone.value[4]==3 && phone.value.length!=11){
        //         phone.style.backgroundColor="red"
        //         fail.style.display="block"
        //         fail.innerText="please enter the right number: +9613xxxxxx or +96171/76/70/xxxxxx"
        //     }
        //     else if (phone.value[4]!=3 && phone.value.length!=12){
        //         phone.style.backgroundColor="red"
        //         fail.style.display="block"
        //         fail.innerText="please enter the right number: +9613xxxxxx or +96171/76/70/xxxxxx"
        //     }
        // }
        // check for the massege 
        else if (msg.value.length<100){
            console.log("yes")
            msg.style.backgroundColor="red"
            fail.style.display="block"
            fail.innerText="Message should be a minimum of 100 characters."
        }
        else {
            fail.style.color="green"
            fail.style.display="block"
            fail.innerText="Message sent!."
            fetch("link", {method:'post',body: new URLSearchParams({
                name:name.value,
                email:email.value,
                phone:phone.value,
                message:message.value,
            })})
                .then(Response=>Response.json())
                .then(data=>)
        }
    }

}
