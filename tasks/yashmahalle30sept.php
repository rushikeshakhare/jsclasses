<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Dom Practice</title>
</head>

<body>
    <div class="container">
        <div class="container-header">
            <button id="restart" type="button"> Restart</button>
            <button id="previous" type="button">Previous</button>
            <button id="next" type="button">Next</button>
        </div>
        <div id="container-content" class="container-content">
            <h3 id="slide"></h3>
            <h1 id="title"></h1>
            <p id="text"></p>
        </div>
    </div>

    <script>
        const restart = document.getElementById("restart");
        const previous = document.getElementById("previous");
        const next = document.getElementById("next");
        const title = document.getElementById("title");
        const text = document.getElementById("text");
        const slideNo = document.getElementById("slide");
        const content = document.getElementById("container-content");
        let ArrayCount = 0;
        const contentArray = [{
            title: "c progamming",
            content: "It is a very funny Language"
        }, {
            title: "Java",
            content: "It is a interesting Language"
        }, {
            title: "Python",
            content: "It is a english language"
        }, {
            title: "C++",
            content: "It is an Object Oriented language"
        }]
        const getCurrentContent = () => {
            return contentArray[ArrayCount];
        }
        const setCurrentContent = () => {
            contentObjecct = getCurrentContent();
            title.textContent = contentObjecct.title
            text.textContent = contentObjecct.content
            slideNo.textContent = `Slide #${ArrayCount+1}`
        }
        const ButtonStatus = () => {
            if (ArrayCount === 0) {
                restart.setAttribute('disabled', true);
                previous.setAttribute('disabled', true);
            } else if (ArrayCount === contentArray.length - 1) {
                next.setAttribute('disabled', true);
            } else {
                restart.removeAttribute('disabled');
                previous.removeAttribute('disabled');
                next.removeAttribute('disabled');
            }
        }
        const onNextClick = () => {
            ArrayCount++;
              
            setCurrentContent();
            ButtonStatus();
        }
        const onPreviousClick = () => {
            ArrayCount--;
            setCurrentContent();
            ButtonStatus();
        }
        const onRestartClick = () => {
            ArrayCount = 0;
            setCurrentContent();
            ButtonStatus();
        }
        const onPageLoad = () => {
            console.log(ArrayCount, contentArray.length)
            setCurrentContent();
            ButtonStatus();
        }
        window.onload = onPageLoad;
        next.onclick = onNextClick;
        previous.onclick = onPreviousClick;
        restart.onclick = onRestartClick;
    </script>
</body>

</html>