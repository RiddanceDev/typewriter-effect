if (typeof typeWriteOptions == "undefined") {
    const typeWriteOptions = {
        "deleteSpeed": 50, // 0.2 seconds between deleting each character
        "typeSpeed": 100, // 0.4 seconds between each character
        "addRandomToType": false, // add a random amount of time to delete & type speeds
        "blinkSpeed": 600, // how often the blinker changes from blinkerColor to transparent
        "blinkerEnabled": true, // should a blinker be added after the inner text
        "beforeDeleteDelay": 1000 // once fully typed, 1 second until it deletes 
    };
};

Array.from(document.getElementsByClassName("typewriter-effect")).forEach((element) => {
    let innerText = element.innerText;
    let currentIndex = 0;
    let beginDelete = false;
    let holderDiv = document.createElement("div");
    holderDiv.style.display = "flex";
    holderDiv.style.alignItems = "center";
    holderDiv.style.flexDirection = "row";
    holderDiv.style.gap = "1px";
    let typingElement = document.createElement("a");
    typingElement.innerText = innerText.substring(0, currentIndex);
    holderDiv.appendChild(typingElement);
    element.innerHTML = "";
    if (typeWriteOptions.blinkerEnabled) {
        let blinkerElement = document.createElement("div");
        blinkerElement.style.width = "1px";
        blinkerElement.style.height = window.getComputedStyle(element)["font-size"];
        blinkerElement.style.background = "transparent";
        let currentTransparent = true;
        setInterval(() => {
            if (currentTransparent) {
                currentTransparent = false;
                blinkerElement.style.background = window.getComputedStyle(element)["color"]
            } else {
                currentTransparent = true;
                blinkerElement.style.background = "transparent"
            };
        }, typeWriteOptions.blinkSpeed);
        holderDiv.appendChild(blinkerElement);
    };
    element.appendChild(holderDiv);
    function increaseIndex() {
        let typingSpeed = typeWriteOptions.typeSpeed;
        if (typeWriteOptions.addRandomToType) {
            typingSpeed = typingSpeed + Math.floor(Math.random() * (200 - 100 + 1)) + 100;
        };
        setTimeout(() => {
            if (currentIndex >= innerText.length) {
                setTimeout(() => {
                    function deleteText() {
                        if (currentIndex > 0) {
                            setTimeout(() => {
                                currentIndex = currentIndex - 1;
                                let displayText = innerText.substring(0, currentIndex);
                                typingElement.innerText = displayText;
                                if (displayText.length <= 0) {
                                    typingElement.innerHTML = "&#8205;"
                                }
                                deleteText();
                            }, typeWriteOptions.deleteSpeed)
                        } else {
                            increaseIndex();
                        }
                    };
                    deleteText();
                }, typeWriteOptions.beforeDeleteDelay)
            } else {
                currentIndex = currentIndex + 1;
                let displayText = innerText.substring(0, currentIndex);
                typingElement.innerText = displayText;
                if (displayText.length <= 0) {
                    typingElement.innerHTML = "&#8205;"
                }
                increaseIndex();
            }
        }, typingSpeed);
    };
    increaseIndex();
});
