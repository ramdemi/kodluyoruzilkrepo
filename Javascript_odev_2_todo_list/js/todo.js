
let inputDOM = document.querySelector('#task');
let ulDOM = document.querySelector('#list');
let x = `<span class="close">&times;</span>`// carpı işareti
let y = localStorage.getItem("liitems")
if(y){
    ulDOM.innerHTML = y;
}
// eski elemanlara check classı  ve close classı eklemek
let liAll = document.querySelectorAll('li');
for(let i =0; i<liAll.length;i++) {
   console.log(i)
   if(liAll[i].innerHTML.match(/span/g) == null ){
   liAll[i].innerHTML= `${liAll[i].innerHTML} ${x}`
   }
   liAll[i].addEventListener("click",  blue)
   $(liAll[i]).find('span').click(sil)
}

//eleman ekleme
function newElement(){
if(inputDOM.value.length>0 && inputDOM.value.match(/\w/g) ){
   let liDOM = document.createElement('li');
   liDOM.innerHTML= `${inputDOM.value} ${x}` 
   ulDOM.appendChild(liDOM)
   liDOM.addEventListener("click", blue)
   inputDOM.value = "" // inputa girilen değer temizlenir
   // çarpıya basıldığında liste elamanını kaldırmak 
$('li').hover(function(){
     $(this).find('span').click(sil)
})
//yeni liste local storage kaydı 
   localStorage.setItem("liitems", ulDOM.innerHTML);
   $(".success").toast('show')
}else{
   $(".error").toast('show')
}}
// Eleman silme
function sil(){
    this.parentElement.remove();
    localStorage.setItem("liitems", ulDOM.innerHTML); //listeyi güncelle
}
// elemanlara check classı eklemek 
function blue(){
    this.className == "checked" ? this.classList.remove("checked"): this.classList.add("checked")
} 
   
   
