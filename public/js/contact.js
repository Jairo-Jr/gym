function addUser(){
    
    var name = document.getElementById("contact-us-name").value;
    var email= document.getElementById("contact-us-email").value;
    var message= document.getElementById("contact-us-message").value;

    db.collection("contacts").add({
        name: name,
        email: email,
        message: message
    })
    .then(function(docRef) {
        alert('Mensaje enviado');
        window.location.href= "https://demogitlab-4e37e.firebaseapp.com"
    })
    .catch(function(error) {
        alert('Lo sentimos, ha ocurrido un error');
        console.error("Error adding document: ", error);
    });

}