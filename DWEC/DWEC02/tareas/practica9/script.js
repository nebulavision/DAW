function propina(){
    let montoFinal = parseFloat(document.getElementById("montoFactura").value);
    let porcentaje = parseInt(document.getElementById("porcentaje").value);
    let resusltH3 = document.getElementById("propinaH3");
    let resultadoPropina = montoFinal * (porcentaje/100);

    resusltH3.innerHTML = `La propina es de ${resultadoPropina}`;
    
}