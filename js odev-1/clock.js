let userName = prompt("Lütfen Adınızı Giriniz!")
document.getElementById("myName").innerHTML= userName

function tarihSaat() {
  
    const gun = new Date().toLocaleString('tr-TR',{ weekday:'long'}); // burada gün türkçe
    let time = new Date().toLocaleTimeString('tr-TR');  // Burada saat 
    document.getElementById("myClock").innerHTML = `${time} ${gun}`   

}

setInterval(tarihSaat, 1000);