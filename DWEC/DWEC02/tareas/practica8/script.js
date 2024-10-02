function area(radius){
    let area = parseFloat( Math.PI * Math.pow(radius, 2)).toFixed(2);
    let perimetro = parseFloat(Math.PI * (radius * 2)).toFixed(2);

    let elementH6 = document.getElementById("result");
    elementH6.innerHTML = `El área es ${area} cm<sup>2</sup> y el perímetro es ${perimetro} cm`
}