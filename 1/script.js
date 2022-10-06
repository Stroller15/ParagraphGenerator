const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

const generateWord = (n)=>{
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text = "";

    for(let i = 0 ; i < n ; i++){
        const random = (Math.random() * 26).toFixed(0);
        text += letters[random];
    }
    return text;
}

console.log(generateWord(10));

let numOfWords;
const generatePara = ()=>{
    numOfWords = Number(input.value);

    const para = document.createElement("p");

   let data = " ";

   for(let i = 0 ; i < numOfWords ; i++){
   let temp =  generateWord((Math.random() * 15 ).toFixed(0));
    data += temp;
    data += " ";
   }

    para.innerText = data;

    para.setAttribute("class" , "paras");

    container.append(para);
}