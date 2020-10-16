function validateForm(){
    document.getElementById('nameErr').innerHTML = "";
    document.getElementById('mobileErr').innerHTML = "";
    document.getElementById('panErr').innerHTML = "";
    document.getElementById('aadharErr').innerHTML = "";
    document.getElementById('addressErr').innerHTML = "";
let userName = document.getElementById('userName').value; 
let pancard = document.getElementById('pancard').value;
let mobile = document.getElementById('mobile').value;
let aadhar = document.getElementById('aadhar').value;
let address = document.getElementById('address').value;
let phoneno = /^\d{10}$/;
console.log(userName.split(" ").length);
console.log( userName.split(" ")[1]);

if(userName){
    document.getElementById('userName').style.border = "2px solid lightgreen";
    document.getElementById('userName').style.boxShadow ="2px 2px 5px lightgreen";
document.getElementById('userName').style.backgroundImage = "url(success.png)";
document.getElementById('userName').style.backgroundSize = "25px 25px";
document.getElementById('userName').style.backgroundPosition = "right";
document.getElementById('userName').style.backgroundRepeat = "no-repeat";
}
if(mobile){
document.getElementById('mobile').style.border = "2px solid lightgreen";
document.getElementById('mobile').style.boxShadow ="2px 2px 5px lightgreen";
document.getElementById('mobile').style.backgroundImage = "url(success.png)";
document.getElementById('mobile').style.backgroundSize = "25px 25px";
document.getElementById('mobile').style.backgroundPosition = "right";
document.getElementById('mobile').style.backgroundRepeat = "no-repeat";

}
if(pancard){
    document.getElementById('pancard').style.border = "2px solid lightgreen";
    document.getElementById('pancard').style.boxShadow ="2px 2px 5px lightgreen";
    document.getElementById('pancard').style.backgroundImage = "";
    document.getElementById('pancard').style.backgroundImage = "url(success.png)";
document.getElementById('pancard').style.backgroundSize = "25px 25px";
document.getElementById('pancard').style.backgroundPosition = "right";
document.getElementById('pancard').style.backgroundRepeat = "no-repeat";  
}
if(aadhar){
    document.getElementById('aadhar').style.border = "2px solid lightgreen";
    document.getElementById('aadhar').style.boxShadow ="2px 2px 5px lightgreen";

    document.getElementById('aadhar').style.backgroundImage = "url(success.png)";
document.getElementById('aadhar').style.backgroundSize = "25px 25px";
document.getElementById('aadhar').style.backgroundPosition = "right";
document.getElementById('aadhar').style.backgroundRepeat = "no-repeat";

}
if(address){
    document.getElementById('address').style.border = "2px solid lightgreen";
    document.getElementById('address').style.boxShadow ="2px 2px 5px lightgreen";
    document.getElementById('address').style.backgroundImage = "url(success.png)";
document.getElementById('address').style.backgroundSize = "25px 25px";
document.getElementById('address').style.backgroundPosition = "right";
document.getElementById('address').style.backgroundRepeat = "no-repeat";  
}

if(!userName){ 
document.getElementById('nameErr').innerHTML = 
"<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Your Name</span>";
document.getElementById('userName').style.border = "2px solid red";
document.getElementById('userName').style.backgroundImage = "url(alert.png)";
document.getElementById('userName').style.backgroundSize = "25px 25px";
document.getElementById('userName').style.backgroundPosition = "right";
document.getElementById('userName').style.backgroundRepeat = "no-repeat";
document.getElementById('userName').style.boxShadow ="";
 validateMobile(mobile);
 validateAadhar(aadhar);
 validatePan(pancard);
 validateAddress(address);
}

if(!isNaN(userName)){ 
document.getElementById('nameErr').innerHTML = 
"<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Valid Name</span>";
document.getElementById('userName').style.border = "2px solid red";
document.getElementById('userName').style.backgroundImage = "url(alert.png)";
document.getElementById('userName').style.backgroundSize = "25px 25px";
document.getElementById('userName').style.backgroundPosition = "right";
document.getElementById('userName').style.backgroundRepeat = "no-repeat";
document.getElementById('userName').style.boxShadow ="";
 validateMobile(mobile);
 validateAadhar(aadhar);
 validatePan(pancard);
 validateAddress(address);
}

else if(!(userName.split(" ").length === 2)){
document.getElementById('nameErr').innerHTML = 
"<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Enter Only Firstname and Lastname</span>";
document.getElementById('userName').style.border = "2px solid red";
document.getElementById('userName').style.backgroundImage = "url(alert.png)";
document.getElementById('userName').style.backgroundSize = "25px 25px";
document.getElementById('userName').style.backgroundPosition = "right";
document.getElementById('userName').style.backgroundRepeat = "no-repeat";
document.getElementById('userName').style.boxShadow ="";
validateMobile(mobile);
validateAadhar(aadhar);
validatePan(pancard);
validateAddress(address);

}

else if(userName.charAt(0) === " " || userName.split(" ")[1] == ""){
document.getElementById('nameErr').innerHTML = 
"<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Enter Only Firstname and Lastname</span>";
document.getElementById('userName').style.border = "2px solid red";
document.getElementById('userName').style.backgroundImage = "url(alert.png)";
document.getElementById('userName').style.backgroundSize = "25px 25px";
document.getElementById('userName').style.backgroundPosition = "right";
document.getElementById('userName').style.backgroundRepeat = "no-repeat";
document.getElementById('userName').style.boxShadow ="";
validateMobile(mobile);
validateAadhar(aadhar);
validatePan(pancard);
validateAddress(address);

}

else if(!mobile){
document.getElementById('mobileErr').innerHTML = 
"<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Your Mobile No</span>";
document.getElementById('mobile').style.border = "2px solid red";
document.getElementById('mobile').style.backgroundImage = "url(alert.png)";
document.getElementById('mobile').style.backgroundSize = "25px 25px";
document.getElementById('mobile').style.backgroundPosition = "right";
document.getElementById('mobile').style.backgroundRepeat = "no-repeat";
document.getElementById('mobile').style.boxShadow ="";
validateAadhar(aadhar);
validatePan(pancard);
validateAddress(address);
}
else if(mobile.length != 10){
document.getElementById('mobileErr').innerHTML = 
"<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Valid Mobile No</span>";
document.getElementById('mobile').style.border = "2px solid red";
document.getElementById('mobile').style.backgroundImage = "url(alert.png)";
document.getElementById('mobile').style.backgroundSize = "25px 25px";
document.getElementById('mobile').style.backgroundPosition = "right";
document.getElementById('mobile').style.backgroundRepeat = "no-repeat";
document.getElementById('mobile').style.boxShadow ="";
validateAadhar(aadhar);
validatePan(pancard);
validateAddress(address);

}
else if(!mobile.match(phoneno)){
document.getElementById('mobileErr').innerHTML =
 "<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Valid Aadhar No</span>";
 document.getElementById('mobile').style.border = "2px solid red";
 document.getElementById('mobile').style.backgroundImage = "url(alert.png)";
document.getElementById('mobile').style.backgroundSize = "25px 25px";
document.getElementById('mobile').style.backgroundPosition = "right";
document.getElementById('mobile').style.backgroundRepeat = "no-repeat";
document.getElementById('mobile').style.boxShadow ="";
validateAadhar(aadhar);
validatePan(pancard);
validateAddress(address);

}
else if(!aadhar){
document.getElementById('aadharErr').innerHTML =
 "<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Your Aadhar No</span>";
 document.getElementById('aadhar').style.border = "2px solid red";
 document.getElementById('aadhar').style.backgroundImage = "url(alert.png)";
document.getElementById('aadhar').style.backgroundSize = "25px 25px";
document.getElementById('aadhar').style.backgroundPosition = "right";
document.getElementById('aadhar').style.backgroundRepeat = "no-repeat";
document.getElementById('aadhar').style.boxShadow ="";
validatePan(pancard);
validateAddress(address);

}
else if(aadhar.length != 12){
document.getElementById('aadharErr').innerHTML =
 "<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter 12 Numbers</span>";
 document.getElementById('aadhar').style.border = "2px solid red";
 document.getElementById('aadhar').style.backgroundImage = "url(alert.png)";
document.getElementById('aadhar').style.backgroundSize = "25px 25px";
document.getElementById('aadhar').style.backgroundPosition = "right";
document.getElementById('aadhar').style.backgroundRepeat = "no-repeat";
document.getElementById('aadhar').style.boxShadow ="";
validatePan(pancard);
validateAddress(address);

}
else if(!aadhar.match(/^\d+/)){
document.getElementById('aadharErr').innerHTML =
 "<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Valid Aadhar No</span>";
 document.getElementById('aadhar').style.border = "2px solid red";
 document.getElementById('aadhar').style.backgroundImage = "url(alert.png)";
document.getElementById('aadhar').style.backgroundSize = "25px 25px";
document.getElementById('aadhar').style.backgroundPosition = "right";
document.getElementById('aadhar').style.backgroundRepeat = "no-repeat";
document.getElementById('aadhar').style.boxShadow ="";
validatePan(pancard);
validateAddress(address);

}

else if(!pancard){
 document.getElementById('panErr').innerHTML = 
"<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Your Pan No</span>";
document.getElementById('pancard').style.border = "2px solid red"; 
document.getElementById('pancard').style.backgroundImage = "url(alert.png)";
document.getElementById('pancard').style.backgroundSize = "25px 25px";
document.getElementById('pancard').style.backgroundPosition = "right";
document.getElementById('pancard').style.backgroundRepeat = "no-repeat";  
document.getElementById('pancard').style.boxShadow ="";
validateAddress(address);

}
else if(pancard.length != 10){
document.getElementById('panErr').innerHTML =
 "<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter 10 Numbers</span>";
 document.getElementById('pancard').style.border = "2px solid red";
 document.getElementById('pancard').style.backgroundImage = "url(alert.png)";
document.getElementById('pancard').style.backgroundSize = "25px 25px";
document.getElementById('pancard').style.backgroundPosition = "right";
document.getElementById('pancard').style.backgroundRepeat = "no-repeat";  
document.getElementById('pancard').style.boxShadow ="";
validateAddress(address);

}
else if(!isNaN(pancard)){
document.getElementById('panErr').innerHTML =
 "<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Valid Pan No</span>";
 document.getElementById('pancard').style.border = "2px solid red";
 document.getElementById('pancard').style.backgroundImage = "url(alert.png)";
document.getElementById('pancard').style.backgroundSize = "25px 25px";
document.getElementById('pancard').style.backgroundPosition = "right";
document.getElementById('pancard').style.backgroundRepeat = "no-repeat";  
document.getElementById('pancard').style.boxShadow ="";
validateAddress(address);

}
else if(!address){
document.getElementById('addressErr').innerHTML = 
"<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Your Address</span>";
document.getElementById('address').style.border = "2px solid red";
document.getElementById('address').style.backgroundImage = "url(alert.png)";
document.getElementById('address').style.backgroundSize = "25px 25px";
document.getElementById('address').style.backgroundPosition = "right";
document.getElementById('address').style.backgroundRepeat = "no-repeat";  
document.getElementById('address').style.boxShadow ="";
}

else{
setTimeout(() => {
const formSuccess = document.getElementById('formSuccess').remove();
},2000)
formSuccess.style.transition = "3s";
formSuccess.innerHTML = 
"<span style= 'background-color:rgb(51, 216, 51);padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;color:white;animation : success 5s infinite;' @keyframes success{0%{opacity:0;}100%{opacity:1;}>Form Submitted Successfully.</span>";

   showTable(userName,aadhar,pancard,mobile,address);
}

function validateMobile(mobile){
 if(!mobile){
document.getElementById('mobileErr').innerHTML = 
"<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;left-5px;'>Please Enter Your Mobile No</span>";
document.getElementById('mobile').style.border = "2px solid red";
document.getElementById('mobile').style.backgroundImage = "url(alert.png)";
document.getElementById('mobile').style.backgroundSize = "25px 25px";
document.getElementById('mobile').style.backgroundPosition = "right";
document.getElementById('mobile').style.backgroundRepeat = "no-repeat";
document.getElementById('mobile').style.boxShadow ="";
}
else if(mobile.length != 10){
document.getElementById('mobileErr').innerHTML = 
"<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Valid Mobile No</span>";
document.getElementById('mobile').style.border = "2px solid red";
document.getElementById('mobile').style.backgroundImage = "url(alert.png)";
document.getElementById('mobile').style.backgroundSize = "25px 25px";
document.getElementById('mobile').style.backgroundPosition = "right";
document.getElementById('mobile').style.backgroundRepeat = "no-repeat";
document.getElementById('mobile').style.boxShadow ="";
}
else if(!mobile.match(phoneno)){
document.getElementById('mobileErr').innerHTML =
 "<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Valid Mobile No</span>";
 document.getElementById('mobile').style.border = "2px solid red";
 document.getElementById('mobile').style.backgroundImage = "url(alert.png)";
document.getElementById('mobile').style.backgroundSize = "25px 25px";
document.getElementById('mobile').style.backgroundPosition = "right";
document.getElementById('mobile').style.backgroundRepeat = "no-repeat";
document.getElementById('mobile').style.boxShadow ="";
}

}
function validateAadhar(aadhar){
 if(!aadhar){
document.getElementById('aadharErr').innerHTML =
 "<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Your Aadhar No</span>";
 document.getElementById('aadhar').style.border = "2px solid red";
 document.getElementById('aadhar').style.backgroundImage = "url(alert.png)";
document.getElementById('aadhar').style.backgroundSize = "25px 25px";
document.getElementById('aadhar').style.backgroundPosition = "right";
document.getElementById('aadhar').style.backgroundRepeat = "no-repeat";
document.getElementById('aadhar').style.boxShadow ="";
}
else if(aadhar.length != 12){
document.getElementById('aadharErr').innerHTML =
 "<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter 12 Numbers</span>";
 document.getElementById('aadhar').style.border = "2px solid red";
 document.getElementById('aadhar').style.backgroundImage = "url(alert.png)";
document.getElementById('aadhar').style.backgroundSize = "25px 25px";
document.getElementById('aadhar').style.backgroundPosition = "right";
document.getElementById('aadhar').style.backgroundRepeat = "no-repeat";
document.getElementById('aadhar').style.boxShadow ="";
}
else if(!aadhar.match(/^\d+/)){
document.getElementById('aadharErr').innerHTML =
 "<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Valid Aadhar No</span>";
 document.getElementById('aadhar').style.border = "2px solid red";
 document.getElementById('aadhar').style.backgroundImage = "url(alert.png)";
document.getElementById('aadhar').style.backgroundSize = "25px 25px";
document.getElementById('aadhar').style.backgroundPosition = "right";
document.getElementById('aadhar').style.backgroundRepeat = "no-repeat";
document.getElementById('aadhar').style.boxShadow ="";
}
}
function validatePan(pancard){
 if(!pancard){
 document.getElementById('panErr').innerHTML = 
"<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Your Pan No</span>";
document.getElementById('pancard').style.border = "2px solid red"; 
document.getElementById('pancard').style.backgroundImage = "url(alert.png)";
document.getElementById('pancard').style.backgroundSize = "25px 25px";
document.getElementById('pancard').style.backgroundPosition = "right";
document.getElementById('pancard').style.backgroundRepeat = "no-repeat";  
document.getElementById('pancard').style.boxShadow ="";
}
else if(pancard.length != 10){
document.getElementById('panErr').innerHTML =
 "<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter 10 Numbers</span>";
 document.getElementById('pancard').style.border = "2px solid red";
 document.getElementById('pancard').style.backgroundImage = "url(alert.png)";
document.getElementById('pancard').style.backgroundSize = "25px 25px";
document.getElementById('pancard').style.backgroundPosition = "right";
document.getElementById('pancard').style.backgroundRepeat = "no-repeat";  
document.getElementById('pancard').style.boxShadow ="";
}
else if(!isNaN(pancard)){
document.getElementById('panErr').innerHTML =
 "<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Valid Pan No</span>";
 document.getElementById('pancard').style.border = "2px solid red";
 document.getElementById('pancard').style.backgroundImage = "url(alert.png)";
document.getElementById('pancard').style.backgroundSize = "25px 25px";
document.getElementById('pancard').style.backgroundPosition = "right";
document.getElementById('pancard').style.backgroundRepeat = "no-repeat";  
document.getElementById('pancard').style.boxShadow ="";
}
}
function validateAddress(address){
 if(!address){
document.getElementById('addressErr').innerHTML = 
"<span style= 'background-color:red;padding:2px 15px;border-radius:8px;border:2px solid rgb(184, 180, 180);position:relative;top:7px;'>Please Enter Your Address</span>";
document.getElementById('address').style.border = "2px solid red";
document.getElementById('address').style.backgroundImage = "url(alert.png)";
document.getElementById('address').style.backgroundSize = "25px 25px";
document.getElementById('address').style.backgroundPosition = "right";
document.getElementById('address').style.backgroundRepeat = "no-repeat";  
document.getElementById('address').style.boxShadow ="";
}
}
}

function showTable(userName,aadhar,pancard,mobile,address) {
   document.getElementById('showName').innerHTML = userName;
   document.getElementById('showMobile').innerHTML = mobile;
   document.getElementById('showPan').innerHTML = pancard;
   document.getElementById('showAadhar').innerHTML = aadhar;
   document.getElementById('showAddress').innerHTML = address;
   document.getElementById('userName').value = "";
   document.getElementById('aadhar').value = "";
   document.getElementById('pancard').value = "";
   document.getElementById('mobile').value = "";
   document.getElementById('address').value = "";

   document.getElementById('userName').style.border = "2px solid rgb(184, 180, 180)";
document.getElementById('userName').style.backgroundImage = "";
document.getElementById('userName').style.boxShadow ="";

 document.getElementById('aadhar').style.border = "2px solid rgb(184, 180, 180)";
document.getElementById('aadhar').style.boxShadow ="";
document.getElementById('aadhar').style.backgroundImage = "";
document.getElementById('mobile').style.backgroundImage = "";
document.getElementById('mobile').style.boxShadow ="";
document.getElementById('mobile').style.border = "2px solid rgb(184, 180, 180)";
document.getElementById('pancard').style.backgroundImage = "";
document.getElementById('pancard').style.boxShadow ="";
document.getElementById('pancard').style.border = "2px solid rgb(184, 180, 180)";
document.getElementById('address').style.backgroundImage = "";
document.getElementById('address').style.boxShadow ="";
document.getElementById('address').style.border = "2px solid rgb(184, 180, 180)";    
}