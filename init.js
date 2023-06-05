document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementsByName("email")[0];
    var confirmationMessage = document.querySelector(".parte-2 p");
    var subscribeButton = document.querySelector(".botao-subscribe");
    var dismissButton = document.querySelector(".botao-dismiss");
    var showButton = document.querySelector(".botao-show");
    var erro = document.querySelector('.erro');


    subscribeButton.addEventListener("click", function() {
      var isFormValid = true;

      //validação de campo vazio
      if (emailInput.value === '') {
      isFormValid = false;
      erro.textContent = 'This field is required';
    } else {
      erro.textContent = '';

      //validação de formato inválido
       var emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(emailInput.value)) {
          isFormValid = false;
          erro.textContent = 'Invalid email format';
        }
    }

    if (isFormValid) {
      document.querySelector(".parte-1").style.display = "none";
      document.querySelector(".parte-2").style.display = "block";
      var email = emailInput.value;
      if (email) {
        confirmationMessage.innerHTML = "A confirmation email has been sent to <strong>" + email + "</strong>. Please open it and click the button inside to confirm your subscription.";
      }
    }
  });

    dismissButton.addEventListener("click", function() {
      confirmationMessage.style.display = "none";
      showButton.style.display = "block"
      dismissButton.style.display = "none"
    });

    showButton.addEventListener("click", function() {
      confirmationMessage.style.display = "block";
      showButton.style.display = "none"
      dismissButton.style.display = "block"
    });
  });


