function register(){
    let userData = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        street: document.getElementById("street").value,
        postalCode: document.getElementById("postalCode").value,
        locality: document.getElementById("locality").value,
        municipality: document.getElementById("municipality").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
    };

    window.opener.showData(userData);
    window.close();
}