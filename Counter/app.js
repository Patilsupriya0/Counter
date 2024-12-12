let incrementbtn = document.querySelector("#plus");
let decrementbtn = document.querySelector("#minus");
let count = document.querySelector("h3");
let inputChange = document.querySelector("#changeCount");
let reset = document.querySelector("#reset");

incrementbtn.addEventListener("click", (e) => {
    // console.log("plus click");
    let countVal = parseFloat(count.innerText);      //convert number is string into float
    count.innerText = countVal + 1;

    const val = parseInt(inputChange.value);
    count.innerText = countVal + val
});

decrementbtn.addEventListener("click", () => {
    // console.log("minus clicked");
    let countVal = parseFloat(count.innerText);
    count.innerText = countVal - 1;

    const val = parseInt(inputChange.value);
    count.innerText = countVal - val

});

reset.addEventListener("click",()=>{
    count.innerText = 0 ;
})

