const form = document.getElementById("form");
const submitButton = document.getElementById("submit-button");
const dataPane = document.getElementById("data-pane");
const name = document.getElementById("name");
const contact = document.getElementById("Contact");
const adhar = document.getElementById("Adhar");
const pan = document.getElementById("pan");
const address = document.getElementById("Address");
const alertBox = document.getElementById("Toast");
const errorList = document.getElementById("message-list");
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
        document.getElementById("Toast").remove();
    }, 3000)
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
const showData = (data) => {

        dataPane.innerHTML = `<table>
                <tr>
                    <th>Name</th>
                    <th>:</th>
                    <td>${data.name}</td>
                </tr>
                <tr>
                    <th>Contact No</th>
                    <th>:</th>
                    <td>${data.contact}</td>
                </tr>
                <tr>
                    <th>Adhar Card No</th>
                    <th>:</th>
                    <td>${data.adhar}</td>
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
        dataPane.style.transition = "500ms";
        dataPane.style.transform = "scale(1)";

    }
    // showData("yash", 1232132132, 827364536272, 2984765367, "ewjhrjhwer78");
const onFormSubmit = () => {

    if (name.value == "" || contact.value == "" || adhar.value == "" || pan.value == "" || address.value == "") {
        Errors.push({
            message: "All fields are mandatory"
        });
        showToast();
        return;
    }
    const nameValue = name.value;
    const checkName = nameValue.split(" ");
    console.log(checkName);

    const contactValue = contact.value;
    const adharValue = adhar.value;
    const PanValue = pan.value;
    const addressValue = address.value;
    const contactDigits = contactValue.length;
    const adharDigits = adharValue.length;
    const panLength = PanValue.length;
    if (checkName.length != 2) {
        Errors.push({
            message: "Name must be in the format - FirstName LastName ."
        });
    }
    if (contactDigits != 10) {
        Errors.push({
            message: "Contact Number must include 10 digits ."
        });
    }
    if (contactValue < 0) {
        Errors.push({
            message: " Contact Number must be Positive ."
        });
    }
    if (adharValue < 0) {
        Errors.push({
            message: " Adhar Card Number must be Positive ."
        });
    }
    if (adharDigits != 12) {
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
        const data = { name: nameValue, contact: contactValue, adhar: adharValue, pan: PanValue, address: addressValue };
        form.remove();
        showData(data);

    }

}


submitButton.onclick = onFormSubmit;