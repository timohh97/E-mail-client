function validateForm()
{
    document.getElementById("status").innerHTML="";
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(re.test(email) == true)
    {
        if(subject.length>2)
        {
            if(message.length>3)
            {
                sendMail(email,subject,message);
            }
            else
            {
                alert("Please type in at least 4 characters for your message!");
        document.getElementById("status").innerHTML="Please type in at least 4 characters for your message!";
            }
        }
        else
        {
           alert("Please type in at least 3 characters for the subject!");
        document.getElementById("status").innerHTML="Please type in at least 3 characters for the subject!"; 
        }
    }
    else
    {
        alert("Please enter a valid e-mail address!");
        document.getElementById("status").innerHTML="Please enter a valid e-mail address!";
        
    }
    
}


function sendMail(email,subject,message)
{
    alert("Sending message........");
    var url = './mailserver.php';
  var formData = new FormData();
  formData.append('email', email);
  formData.append('subject', subject);
  formData.append('message', message);


  fetch(url, { method: 'POST', body: formData })
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
      console.log(body);
    });
    
    alert("Your message was sent!");
}



