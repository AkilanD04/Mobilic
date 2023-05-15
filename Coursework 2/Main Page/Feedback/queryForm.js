var formOne = document.getElementById("formSubmitOne");
        var demo = document.getElementById("demo");

        //function emailsend(){
           // alert("Email Sent Successfully");
              //Email.send({
              //Host: "smtp.gmail.com",
              //Username : "dulmi.20211494@iit.ac.lk",
              //Password : "Dulmi&123",
              //To : emailAddress.value,
              //From : "dulmi.20211494@iit.ac.lk",
              //Subject : "Query Form",
              //Body : "First name:" + firstName.value +
                  //"Last name :" + lastName.value +
                  //"Email address :" + emailAddress.value +
                  //"Contact Number :" + contactNumber.value,
              //}).then(
                //message => alert("Your query details has been send by mail")
              //);
        //}

        function editForm(){
          formOne.style.display = "none";
          demo.style.display = "block";
        document.getElementById("editBtn").style.display ="none";
        }

        function myFunction(){

            var firstName = document.getElementById("fName").value;
            var lastName = document.getElementById("lName").value;
            var emailAddress = document.getElementById("email").value;
            var contactNumber = document.getElementById("number").value;
            var details = document.getElementById("queryDetails").value;

            let radios = document.demo.subjects.value;

            if(firstName === '' || lastName === '' || emailAddress === '' || contactNumber === '' || details === '') {
                alert("Fill all the fields");
            } else{
                var fnameSub = document.getElementById("fnameSub");
                fnameSub.innerHTML = "<br>" + "<br>" + "First Name : " + firstName;
                var lnameSub = document.getElementById("lnameSub");
                lnameSub.innerHTML = "Last Name : " + lastName;
                var emailSub = document.getElementById("emailSub");
                emailSub.innerHTML = "Email :" + emailAddress;
                var numberSub = document.getElementById("numberSub");
                numberSub.innerHTML = "Contact Number : " + contactNumber;
                var radioSub= document.getElementById("radioSub");
                radioSub.innerHTML = "Query Subject : " + radios;
                var detailsSub= document.getElementById("detailsSub");
                detailsSub.innerHTML = "Query Details : " + details;
                document.getElementById("formSubmitOne").style.display = "block";

                var editBtn = document.getElementById("editBtn").style.display = "block";
                var subBtn = document.getElementById("subBtn").style.display = "block";


                document.getElementById("demo").style.display = "none";                   
              
                for (var radio of radios)
                {
                    if (radio.checked) {
                        alert(radio.value);
                    }
                }
            }
        }