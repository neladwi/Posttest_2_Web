form()
function form(){
    let data = sessionStorage.getItem("data");
    data = JSON.parse(data);
    const nama = data['nama'];
    const email = data['email'];
    const alamat = data['alamat'];
    const radio = data['radio'];
    const checkbox = data['checkbox'];
    
    const userInputNama = document.getElementById('nama_form');
    const userInputEmail = document.getElementById('email_form');
    const userInputAlamat = document.getElementById('alamat_form');
    const userInputRadio = document.getElementById('radio_form'); 
    const userInputCheckbox = document.getElementById('checkbox_form'); 

    userInputNama.innerHTML =     "Full Name                : " + nama;
    userInputEmail.innerHTML =    "Email                    : " + email;
    userInputAlamat.innerHTML =   "Massage                  : " + alamat;
    userInputRadio.innerHTML =    "Payment                  : " + radio;
    userInputCheckbox.innerHTML = "Product                  : " + checkbox;
}