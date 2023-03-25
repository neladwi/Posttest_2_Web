function simpan(){
    // clearing session storage
    sessionStorage.clear()
    
    const userInputNama = document.getElementById('nama');
    const userInputEmail = document.getElementById('email');
    const userInputAlamat = document.getElementById('alamat');
    const userInputRadio = document.querySelector('input[name="radio"]:checked');  
    const userInputCheckbox = document.getElementsByName('checkbox');
    
    
    
    let nama = sessionStorage.getItem("nama");
    let email = sessionStorage.getItem("email");
    let alamat = sessionStorage.getItem("alamat");
    let checkbox = sessionStorage.getItem("checkbox") || [];
    let radio = sessionStorage.getItem("radio");

      // push 
      nama = userInputNama.value || nama;
      
     
      email = userInputEmail.value || email;
      
     
      alamat = userInputAlamat.value || alamat;
      
    
      radio = userInputRadio.value || radio;
      
        
      for (var i=0; i<userInputCheckbox.length; i++) {
          if (userInputCheckbox[i].checked) {
              checkbox.push(userInputCheckbox[i].value);
          }
      }

      let data ={
        'nama': nama,
        'email': email,
        'alamat' : alamat,
        'checkbox' : checkbox,
        'radio' : radio
       }

       sessionStorage.setItem("data", JSON.stringify(data));
}