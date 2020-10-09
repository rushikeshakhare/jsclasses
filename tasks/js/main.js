    //     ===========Navigator============
    const person = document.getElementById("person");
    const rightButton = document.getElementById("btn-right");
    const leftButton = document.getElementById("btn-left");
    const upButton = document.getElementById("btn-up");
    const downButton = document.getElementById("btn-down");
    const movementSize = 20;
    const onRightButtonClick = () => {
        const personMarginRight = person.style.marginRight;
        if (!personMarginRight) {
            person.style.marginRight = `${-movementSize}px`;
        } else {
            const getNumberFromString = parseInt(person.style.marginRight);
            person.style.marginRight = `${getNumberFromString - movementSize}px`;
        }
    }
    const onLeftButtonClick = () => {
        const personMarginLeft = person.style.marginLeft;
        if (!personMarginLeft) {
            person.style.marginLeft = `${-movementSize}px`;
        } else {
            const getNumberFromString = parseInt(person.style.marginLeft);
            person.style.marginLeft = `${getNumberFromString - movementSize}px`;
        }
    }
    const onUpButtonClick = () => {
        const personMarginUp = person.style.marginTop;
        if (!personMarginUp) {
            person.style.marginTop = `${-movementSize}px`;
        } else {
            const getNumberFromString = parseInt(person.style.marginTop);
            person.style.marginTop = `${getNumberFromString - movementSize}px`;
        }
    }
    const onDownButtonClick = () => {
        const personMarginDown = person.style.marginBottom;
        if (!personMarginDown) {
            person.style.marginBottom = `${-movementSize}px`;
        } else {
            const getNumberFromString = parseInt(person.style.marginBottom);
            person.style.marginBottom = `${getNumberFromString - movementSize}px`;
        }
    }

    rightButton.onclick = onRightButtonClick;
    leftButton.onclick = onLeftButtonClick;
    upButton.onclick = onUpButtonClick;
    downButton.onclick = onDownButtonClick;