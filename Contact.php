<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "khalilshew1030@gmail.com";

mail($recipient, "New Client", "<p><b>Name: </b>" + $name + " </p><br /><p><b>Email: </b>" + $email + "</p><br /><p><b>Phone: </b>" + $phone + "</p>", $mailheader)
or die("Error!");

// echo'

// <style>
//     html {
//         height: 100;
//         box-sizing: border-box;
//     }

//     body {
//         min-height: 100%;
//         position: relative;
//         margin: 0;
//         padding-bottom: 6.47;
//         box-sizing: inherit;

//     }

//     header {
//         width: 97%;
//     }

//     label {
//         color: white;
//         margin-top: 5px;
//         font-weight: 700;
//         font-size: large;;
//     }

//     input {
//         background-color: #2d4111;
//         border: none;
//         color: white;
//         width: 100%;
//         -webkit-transition: 0.5s;
//         transition: 0.5s;
//         outline: none;
//         border-bottom: 1px solid #f7f7f8;
//     }

//     input:focus {
//         border-bottom: 1px solid #f58720;
//     }

//     ::placeholder {
//         color: #e5e5e887;
//     }
//     .submit{
//         background-color: #f58720;
//         color: white;
//         padding: 10px;
//         border-radius: 5px;
//         border: none;
//         font-weight: 500;
//         text-decoration: none;
//     }
// </style>
// <div style="min-height: 100%; background-color: #2d4111;">
//     <div data-include="components/header.html"></div>

//     <main style="background-color: #2d4111; width: 80%;">
//         <!-- <h3 class="dm-serif text-center display-5" style="color: white;">Contact</h3> -->
//         <br />
//         <div class="row">
//             <div class="col-sm-6 text-center text-light" style="padding: 20px;">
//             <h3 class="display-5" style="font-weight: 400;">Thank you for contacting me. I will get back to you as soon as possible!</h3>
//            <br />
//             <a class="submit" href="Index.html">Return Home</a>
//             </div>
//         </div>
//     </main>
//     <div data-include="components/footer.html"></div>
// </div>
// <script src="scripts/nav.js"></script>
// <script src="scripts/htmlinclude.js"></script>
// <script>document.title = 'Mitchell\'s || Home'</script>

// ';

echo"Thanks For Submitting"

?>