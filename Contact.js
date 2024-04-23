const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

function sendEmail() {
    const bodyMessage = `<b>Full Name:</b> ${fullName.value}<br> <b>Email:</b> ${email.value}<br> <b>Phone Number:</b> ${phone.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "khalilshew1030@gmail.com",
        Password : "1657036598AEF376CB18CCE9264C16378CCA",
        To : 'khalilshew1030@gmail.com',
        From : "khalilshew1030@gmail.com",
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

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

});