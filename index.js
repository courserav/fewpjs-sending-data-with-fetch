// Add your code here
function submitData(userName, userEmail){
    return fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(res => res.json())
    .then(json => {
        let idDiv = document.createElement("div")
        idDiv.appendChild(document.createTextNode(json.id))
        document.body.appendChild(idDiv)
    })
    .catch(function(error){
        document.body.appendChild(document.createElement("div").appendChild(document.createTextNode(error.message)))
    })
}