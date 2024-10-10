function execute(){
    let random = Math.floor(Math.random() * 10)

if(random <= 5){
    window.location.href = "https://www.google.com";
}else{
    let currentHour = new Date().getHours();
    
    if (currentHour < 12) {
        alert("Buenos días");
    } else {
        alert("Buenas tardes");
    }
}
}