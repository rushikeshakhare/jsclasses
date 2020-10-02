const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const person =  document.getElementById('person');

const movementSize = 150;
const onUpButtonClick = () => {
    const personMarginTop = person.style.marginTop;

    if(!personMarginTop){
        person.style.marginTop = `${-movementSize}px`;
    }else {
        const getNumberFromString = parseInt(person.style.marginTop);
        person.style.marginTop = `${getNumberFromString - movementSize}px`;
  
    }
}

const onDownButtonClick = () => {
    const personMarginDown = person.style.marginBottom;

    if(!personMarginDown){
        person.style.marginBottom =  `${-movementSize}px`;
    }else {
        const getNumberFromString = parseInt(person.style.marginBottom);
        person.style.marginBottom = `${getNumberFromString - movementSize}px`;
    }
}
const onRightButtonClick = () => {
    const personMarginRight = person.style.marginRight;

    if(!personMarginRight){
        person.style.marginRight =`${-movementSize}px`;
    }else {
        const getNumberFromString = parseInt(person.style.marginRight);
        person.style.marginRight = `${getNumberFromString - movementSize}px`;
    }
}

const onLeftButtonClick = () => {
    const personMarginLeft = person.style.marginLeft;

    if(!personMarginLeft){
        person.style.marginLeft = `${-movementSize}px`;
    }else {
        const getNumberFromString = parseInt(person.style.marginLeft);
        person.style.marginLeft = `${getNumberFromString - movementSize}px`;
    }
}

upButton.onclick = onUpButtonClick
downButton.onclick = onDownButtonClick
rightButton.onclick = onRightButtonClick
leftButton.onclick = onLeftButtonClick