const mymodal = new boostrapmodal.Modal(register-modal);



//CRIAR CONTa
document.getElementById("creat-form").addEventListener("submit", function(e) {
    e.preventDefault()
    
    const email = document.getElementById("email-creat-imput").value;
    const password = document.getElementById("password-creat-imput").value;


    if(email.length < 5) {
        alert("Preencha com um email válido");
        return;
    }


    if(password.length < 4) {
        alert("preencha com no mínimo 4 digitos");
        return;
    }

        SaveAccount({
            login: email,
            password: password,
            transactions: []
        });

    mymodal.Hide();

    alert("Conta criada com sucesso");

});


function SaveAccount(data) {
    console.log(data);
 
    localStorage.setItem(data.login, JSON.stringify(data));

};
