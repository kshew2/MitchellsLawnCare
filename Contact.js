const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

function sendEmail() {
    const bodyMessage = `<b>Full Name:</b> ${fullName.value}<br> <b>Email:</b> ${email.value}<br> <b>Phone Number:</b> ${phone.value}`;
    Email.send({
        SecureToken: "98d074a3-c922-434b-94e8-13801ed4a900",
        To : 'khalilshew1@gmail.com',
        From : "No-Reply@MitchellsLawnCare.netlify.app",
        Subject : "New Contact Submission",
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
  const items = document.querySelectorAll(".item");

  for(const item of items){
    if(item.value == ""){
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if(items[1].value != ""){
      checkEmail();
    } 
    items[1].addEventListener("keyup", () =>{
      checkEmail();
    })
    item.addEventListener("keyup", () => {
      if(item.value != ""){
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
      item.parentElement.classList.add("error");
      }
    });
  }
}
function checkEmail(){
  const emailRegex = /^([a-z\d\.\-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  if(!email.value.match(emailRegex)){
    email.classList.add("error");
    email.parentElement.classList.add("error");
  }
  else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs()
    sendEmail();

});