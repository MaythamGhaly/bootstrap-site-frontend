window.onload = () => {

    fetch(`http://localhost/messages/showmessages.php`)
    .then(res=>res.json())
    .then(data=> {
      for (let i=0; i< data.length ; i++){
        console.log(data[i].message)
        let div= document.createElement('p')
        div.classList.add("msg-style")
        div.innerHTML=data[i].message
        document.body.appendChild(div)
      }
      })
}