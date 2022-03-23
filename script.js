let selectListItem = document.querySelectorAll("li");
let btnSubmit = document.getElementById("btn-Submit");
let amountSelcted = 0;

let userSumbit = function() {
    userSelectAmount()
    document.querySelector("#amount-selected span").textContent = amountSelcted;
}

let userSelectAmount = function () {
    for (let i = 0; i < selectListItem.length; i++) {
        if (selectListItem[i].classList.contains("select")) {
            amountSelcted++;
        }
    }
    String(amountSelcted);
}

for (let i = 0; i < selectListItem.length; i++) {
    selectListItem[i].addEventListener("click", function () {
        selectListItem[i].classList.toggle("select");
    })
}



btnSubmit.addEventListener("click", function () {
    document.querySelector(".card:first-child").classList.add("hidden");
    document.querySelector(".card:nth-child(2)").classList.remove("hidden");
    userSumbit();
});