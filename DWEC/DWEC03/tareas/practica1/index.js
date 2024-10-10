function registro(){
    if(confirm("To register, we need to open a new window. Do you agree?")){
        openWindowForm();
    }else{
        alert("Registration could not be completed.");
    }
}


function openWindowForm(){
    let windowForm = window.open("form.html", "Registro", "height=800, width=600");
}

function showData(data){
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
        <strong>Nombre:</strong> ${data.name}<br>
        <strong>Apellidos:</strong> ${data.surname}<br>
        <strong>Calle:</strong> ${data.street}<br>
        <strong>Código Postal:</strong> ${data.postalCode}<br>
        <strong>Localidad:</strong> ${data.locality}<br>
        <strong>Municipio:</strong> ${data.municipality}<br>
        <strong>Teléfono:</strong> ${data.phone}<br>
        <strong>Email:</strong> ${data.email}
    `;
}

window.showData = showData;

