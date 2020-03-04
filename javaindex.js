const prenomInput = document.querySelector('#input-prenom');
const nomInput  = document.querySelector('#input-nom');
const adresseInput = document.querySelector('#input-adresse');
const telInput = document.querySelector('#input-tel');
const mailInput = document.querySelector('#input-mail');
const mpInput = document.querySelector('#input-mp');
const enregistrementBtn =document.querySelector('#btnEnregistre');
const annulationbtn =document.querySelector('#btnAnnuler');
const connexionbtn =document.querySelector('#btnConnecter');
const inscrireList=document.querySelector('#inscription-list');
const totalInscritsorti = document.querySelector('#total-inscri');


let totalInscri = 0;

const annuler = ()  =>{
    prenomInput.value ='';
    nomInput.value='';
   adresseInput.value='';
    telInput.value='';
    mailInput.value='';
    mpInput.value='';

};
annulationbtn.addEventListener('click', () => {
    console.log(' works');
});

enregistrementBtn.addEventListener('click', () => {
    console.log('it works');
});

    enregistrementBtn.addEventListener('click', () => {
    const enteredprenom =prenomInput.value;
    const enterednom    =nomInput.value;
    const enteredadresse =adresseInput.value;
    const enteredtel =telInput.value;
    const enteredmail =mailInput.value;
    const enteredmp =mpInput.value;
    
    if( 
    enteredprenom.trim().lenght <= 0 || enterednom <= 0 
    || enterednom.trim().lenght <= 0 || enteredadresse <= 0 
    || enteredadresse.trim().lenght <= 0 || enteredtel <= 0 
    || enteredtel.trim().lenght <= 0 || enteredmail <= 0 
    || enteredmail.trim().lenght <= 0 || enteredmp <= 0 
    || enteredmp.trim().lenght <= 0 
           
        
        
        
    ) {
   return; 
}
   console.log(enteredprenom,enterednom,enteredadresse,enteredtel,enteredmail,enteredmp);
    const newItem = document.createElement('ion-item');
    newItem.textContent = ' VOUS VOUS APPELEZ: ' +' ' + enteredprenom + ' ' + enterednom + ' VOUS HABITEZ A: ' + ' ' +enteredadresse + ' VOTRE NUM EST LE:' +
    enteredtel + ' VOTRE MAIL ' + enteredmail + ' ET VOTRE MOT DE PASSE EST : ' +' ' + enteredmp;
    totalInscri += +enteredprenom;
    
    totalInscritsorti.textContent=totalInscri;
    inscrireList.appendChild(newItem);
       annuler ();
});
annulationbtn.addEventListener('click', annuler)

    
