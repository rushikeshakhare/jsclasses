const form = document.getElementById("form");
const submitButton = document.getElementById("submit-button");
const dataList = document.getElementById("dataList");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const contact = document.getElementById("Contact");
const aadhar = document.getElementById("Aadhar");
const pan = document.getElementById("pan");
const address= document.getElementById("Address");
const alertBox = document.getElementById("toast");
const errorList = document.getElementById("message");
alertBox.style.display = "none";
alertBox.style.transform = "scale(0)";
const Errors = [];
const showToast = () => {
    errorList.innerHTML = "";
    alertBox.style.display = "";
    alertBox.style.transform = "scale(1)";
    alertBox.style.background = "rgb(228, 57, 57)";
    Errors.forEach((error) => {
        const newElement = document.createElement("li");
        newElement.textContent = error.message;
        errorList.appendChild(newElement);
    });
    setTimeout(() => {
        document.getElementById("toast").remove();
    }, 2000)
}
const countDigits = (number) => {
    if (number < 0) {
        Errors.push({
            message: "Entered Number Must be Positive"
        });
        return;
    }
    let count = 0;
    if (number >= 1) ++count;

    while (number / 10 >= 1) {
        number /= 10;
        ++count;
    }

    return count;
}
//const showData = (data) => {
   // data.innerHTML= `
   // <h1><u>Name :</u> 
   // ${data.fname} ${data.lname}</h1>
    
    //<h1><u>Contact no. :</u>
    //${data.contact}</h1>
    
    //<h1><u>Aadhar card no. :<u>
    //${data.aadhar}<h1>
    
    //<h1><u>Pan card no. :</u>
    //${data.pan}</h1>
    
    //<h1><u>Address :<u>
    //${data.address}</h1>`

    //data.style.transition = "500ms";
    //data.style.transform = "scale(1)";
//}
const showData = (data) => {

    dataList.innerHTML = `<table>
            <tr>
                <th>Name</th>
                <th>:</th>
                <td>${data.fname} ${data.lname}</td>
            </tr>
            <tr>
                <th>Contact No</th>
                <th>:</th>
                <td>${data.contact}</td>
            </tr>
            <tr>
                <th>Aadhar Card No</th>
                <th>:</th>
                <td>${data.aadhar}</td>
            </tr>
            <tr>
                <th>Pan Card No</th>
                <th>:</th>
                <td>${data.pan}</td>
            </tr>
            <tr>
                <th>Address</th>
                <th>:</th>
                <td>${data.address}</td>
            </tr>
        </table>`
    dataList.style.transition = "500ms";
    dataList.style.transform = "scale(1)";

}

const onFormSubmit =() => {
    if(fname.value == ""  ||  lname.value=="" || contact.value == "" || aadhar.value == "" || pan.value == "" || address.value == "") {
        Errors.push({
            message: "Please fill all the information"
        });
        showToast();
        return;
    }
    const fnameValue = fname.value;
    const lnameValue = lname.value;
    const contactValue = contact.value;
    const aadharValue = aadhar.value;
    const PanValue = pan.value;
    const addressValue = address.value;
    const contactDigits = contactValue.length;
    const aadharDigits = aadharValue.length;
    const panLength = PanValue.length;

    if (contactDigits != 10) {
        Errors.push({
            message: "Contact Number must include 10 digits"
        });
    }
    if (contactValue < 0) {
        Errors.push({
            message: "contact no is not valid"
        });
    }
    if (aadharValue < 0) {
        Errors.push({
            message: "please enter positive number"
        });
    }
    if (aadharDigits != 12) {
        Errors.push({
            message: " Adhar Card Number must include 12 digits ."
        });
    }
    if (panLength != 10) {
        Errors.push({
            message: " Pan Card Number must include 10 digits ."
        });
    }

    if (Errors.length) {
        showToast();
    } else {
        const data = { fname: fnameValue , lname: lnameValue, contact: contactValue, aadhar: aadharValue, pan: PanValue, address: addressValue };
        form.remove();
        showData(data);

    }

}
submitButton.onclick = onFormSubmit;

