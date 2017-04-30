function formValidation()  
{   
var uname = document.form.username;  
var uemail = document.form.email;  
var mess = document.form.mess;  

if(allLetter(uname)) 
    {  
        if(ValidateEmail(uemail))  
        {
            if(alphanumericMess(mess))  
            {   
            }  
        }
    }  
return false;  
}

function allLetter(uname)  
{   
var letters = /^[A-Za-z]+$/;  
if(uname.value.match(letters))  
    {  
        return true;  
    }  
else  
    {  
        alert('Please, fill your name. Your name must have alphabet characters only');  
        uname.focus();  
        return false;  
    }  
}

function ValidateEmail(uemail)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(uemail.value.match(mailformat))  
    {  
        return true;  
    }  
else  
    {  
        alert("You forget to enter your email address or you did it incorrectly.");  
        uemail.focus();  
        return false;  
    }  
}

function alphanumericMess(mess)  
{   
var letters = /^[0-9a-zA-Z]+$/;  
if(mess.value.match(letters))  
    {
    alert('Form succesfully submitted! Thank you for your message!');  
    window.location.reload(); 
    return true;
    }  
else  
    {  
    alert('Please, enter your message.');  
    mess.focus();  
    return false;  
    }  
}