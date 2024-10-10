function chars(){
    let result = document.getElementById("result");
    let phrase = document.getElementById("phraseInput").value;
    let word = document.getElementById("wordInput").value;

    if(phrase && word){
        let lastIndex = phrase.lastIndexOf(word) == -1 ? "No encontrado" : phrase.lastIndexOf(word);

        result.innerText = `Ultima posición de ${word} es: ${lastIndex}\n`;
        result.innerText += `Caráctetes en ${phrase}: ${phrase.length}`;
    }else{
        alert("Please, insert a valid phrase and word.")
    }
}
