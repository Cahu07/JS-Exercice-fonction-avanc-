const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];


function modifName(text){
    const temp = text.toLowerCase();
    const result = temp.charAt(0).toUpperCase() + temp.slice(1); 
    return result

}

function rename(array, modifName){
    const result = [];

    for (let i = 0; i < array.length; i++){
        result.push(modifName(array[i]))
    }
    return result
}
console.log(rename(people , modifName));


