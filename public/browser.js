console.log("This is browser.js FrontEnd")
function itemTemplate(item) {
    return `<li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between" 
    > 
     <span class="item-text">${item.reja}<!--  itemdan rejani chiqarib olamiz--></span> 
    <div>
    <button data-id="${item._id}" 
    class="edit-me btn btn-secondary btn-sm mr-1"> O'zgartirish</button>  <!--btnga idlarini bervolimz qaysini ochirishdi bilish uchun -->
    <button data-id="${item._id}" 
    class="delete-me btn btn-danger btn-sm"> O'chirish</button>
    </div>

    </li>`
}

let createField = document.getElementById("create-field")

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();
    //submit bolganda 

    /* bu orqalik new rejani qiymatni pass qilishim kk */
    // modern post: reques
    axios
    .post("/create-item", { reja: createField.value }) // inputga kirgan valueni qabul rejaga tenglashtirib axios orqali post qilyabmoiz 
     .then((response) => {
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));

        // fieldni yozganimizdan keyn fieldni bowatish 
        createField.value ="",
        createField.focus();
        ////// bosh 
     })  // qiymatni olamiz
    .catch((err) =>{
        console.log("iltimos qaytatdan harakat qiling");
    }) // errorni olamiz 
});

// ochirish hamda ozgartirish logic yozish

document.addEventListener("click", function (e) {
   
 //   console.log(e);// e ni ichini korib olsek classlar bor va btn larimiz bor
//**   start delete oper
    if (e.target.classList.contains("delete-me")) { // containsni ichida "delete-me degan tugmani tekshiryabmiz"
//        alert("siz ochirish tugmasni bosdingiz");
    if (confirm("Aniq O'chirmoqchimisiz?")) {// bu ikita button chiqaradi yes no 
  
        // tekshirvolamiz
        /*    alert("Yes");
    } else {
        alert("No")
    } */

    // end tekshirish

    axios
    .post("/delete-item", { id: e.target.getAttribute("data-id")})
    // buttoni deleteni shakilantirib olamiz
    .then((response) => {
        console.log(response.data);
        e.target.parentElement.parentElement.remove()
    })
    .catch((err) => {
        console.log("Hatolik yuz berdi");
    })
    };
}
//end delete

//**start edit oper

    if(e.target.classList.contains("edit-me")) { // containsni ichida "delete-me degan tugmani tekshiryabmiz"
        // alert("siz Ozgartirish tugmasni bosdingiz")
        let userInput = prompt("O'zgartirish kiriting",e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
        if (userInput){
            axios
            .post("/edit-item",{
                id: e.target.getAttribute("data-id"), //shu er data object
                 new_input:userInput //data obj
                 })
                 .then((response) => {
                    // frontendda eski holdagi db ni yangi holidagiga ozgartirib beradi
                    console.log(response);
                    e.target.parentElement.parentElement.querySelector(
                        ".item-text"
                    ).innerHTML = userInput;
                        // end 
                 })
                 .catch(err => {
                    console.log("hatolik");
                 })
        }
    }

// end edit
});


//**  hammasini ochirish buttoni 
document.getElementById("clean-all").addEventListener("click",function() {
axios
.post("/delete-all",{delete_all: true})
.then(response =>{
alert(response.data.state);
document.location.reload() //ochirilgan pageni reload qiladi
})
.catch(err => {

})
})