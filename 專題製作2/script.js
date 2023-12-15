// PUBLIC_KEY = pzF64yrQ3DOlnHWYn
// Template_ID = template_07csf2g
// Service_ID = service_zkohg9h
function sendMail(){
    var params = {
        from_name :document.getElementById("Name").value, 
        email : document.getElementById("email").value,  
        name : document.getElementById("Name").value,         
        tel : document.getElementById("phone").value,
        message : document.getElementById("message").value
     }
    emailjs.send("service_zkohg9h","template_07csf2g", params).then(function (res){
        alert("成功發送 " + res.status);
    })  
}           