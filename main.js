const focimElem = document.getElementById("focim");
focimElem.textContent = "Mátrix rendszer";
 
let statuszElemek = document.getElementsByClassName("statusz-szoveg");
 
console.log(statuszElemek.length);
 
statuszElemek[0].textContent = "Rendszer ellenőrzése folyamatban...";
statuszElemek[1].textContent = "Kapcsolódás a hálózathoz...";
 
const listaElemek = document.querySelectorAll(".lista-elem");
 
console.log(listaElemek[0].textContent);
listaElemek[1].textContent = "Szerver állapot: ONLINE";
 
const nevInput = document.querySelector("#jatekos-nev-input");
const inditoGomb = document.querySelector("#indito-gomb");
let eredmenyDiv = document.getElementById("eredmeny");
 
inditoGomb.addEventListener("click", beIr);
 
function beIr() {
    const gombSzovege = inditoGomb.textContent;
    const jatekosNev = nevInput.value;
    eredmenyDiv.textContent = `Üdvözlünk, ${jatekosNev}! Végrehajtott akció: ${gombSzovege}`;
}