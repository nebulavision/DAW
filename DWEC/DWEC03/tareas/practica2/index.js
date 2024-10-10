function changeTitle(){
    let newTitle = document.getElementById("titleInput").value;

    if(newTitle){
        document.title = newTitle;
    }else{
        alert("Please, insert a valid title.")
    }
}
