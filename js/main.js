// Sroke animation for PARS VIRILIS
const pv = document.querySelectorAll('#pars-viliris path');
console.log(pv);
for (let i = 0; i < pv.length; i++) {
    // const element = array[i];
    console.log(`Letter ${i} is ${pv[i].getTotalLength()}`);
    
}