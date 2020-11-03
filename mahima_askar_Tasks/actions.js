
const inventory = inventoryList();
const addButton = document.getElementById('add-button');
const removeButton = document.getElementById('remove-button');
const updateButton = document.getElementById('update-button');
const itemName = document.getElementById('item-name');
const itemCount = document.getElementById('item-count');
const inventoryBody = document.getElementById('inventory-body');
const ITEM_NAME_ERROR = 'Please Enter Item Name';

const updateInventory = () => {
    inventoryBody.innerHTML = '';
    const inventoryItems = inventory.listAllItems();

    inventoryItems.forEach((inobj) => {
        const tableRow = document.createElement('tr');
        const itemNameData = document.createElement('td');
        itemNameData.textContent = inobj.name;
        const itemCountData = document.createElement('td');
        itemCountData.textContent = inobj.count;
        tableRow.appendChild(itemNameData);
        tableRow.appendChild(itemCountData);
        inventoryBody.appendChild(tableRow);
    })
}

const showResponse = (statusObject) => {
    if(statusObject.status) {
        showToast(statusObject.message);
        updateInventory();
        itemName.value = '';
        itemCount.value = '';
    }
    else showToast(statusObject.message,true)
}

const onRemoveButtonClick = () => {
    const itemNameValue = itemName.value;

    if(!itemNameValue){
        showToast(ITEM_NAME_ERROR,true);
        return;
    }

    const removeStatus = inventory.removeItem(itemNameValue);
    showResponse(removeStatus)
}

const onAddButtonClick = () => {
    const itemNameValue = itemName.value;
    const itemCountValue = itemCount.value;

    if(!itemNameValue){
        showToast(ITEM_NAME_ERROR,true);
        return;
    }
    const addStatus = inventory.add(itemNameValue,itemCountValue ? itemCountValue : 0);  
    showResponse(addStatus)
}

const onUpdateButtonClick = () => {
    const itemNameValue = itemName.value;
    const itemCountValue = itemCount.value;

    if(!itemNameValue){
        showToast(ITEM_NAME_ERROR,true);
        return;
    }

    if(!itemCountValue){
        showToast("Please Enter Item Count",true);
        return;
    }

    const updateStatus = inventory.updateCount(itemNameValue, itemCountValue);
    showResponse(updateStatus)
}

const showToast = (message,error) => {
    const toastElement = document.createElement('div');
    toastElement.setAttribute('id','toast');
    toastElement.classList.add('toast');
    if(error)
        toastElement.classList.add('toast-error');
    else toastElement.classList.add('toast-success');
    toastElement.textContent = message;
    document.body.appendChild(toastElement);
    setTimeout(() => {
        document.getElementById('toast').remove()
    },2000)
}

addButton.onclick = onAddButtonClick;
removeButton.onclick = onRemoveButtonClick;
updateButton.onclick = onUpdateButtonClick;