let target = document.querySelector("#target");
// console.log(target);

function setColor(e) {
    let element = e.currentTarget;
    let style = window.getComputedStyle(element);
    target.style.backgroundColor = style.backgroundColor;
}

let colors = document.querySelectorAll("#colors>button");
for (let color of colors) {
    color.addEventListener("click", setColor);
}

let styleBorders = document.querySelectorAll("#border-style>button");
for (let styleBorder of styleBorders) {
    styleBorder.addEventListener("click", setStyleBorder);
}

function setStyleBorder(e) {
    let element = e.currentTarget;
    target.style.border = element.style.border;
}

let topBorders = document.querySelectorAll("#border-top>button");
for (let topBorder of topBorders) {
    topBorder.addEventListener("click", setTopBorder);
}

function setTopBorder(e) {
    let element = e.currentTarget;
    let style = window.getComputedStyle(element);
    target.style.borderTop = style.borderTop;
}

let inputColor = document.querySelector("#second input[type='color']");
inputColor.addEventListener("change", (e) => {
    target.style.backgroundColor = inputColor.value;
});

let borderSizes = document.querySelectorAll("#border-size input");
for (let borderSize of borderSizes) {
    borderSize.addEventListener("change", setBorderSize);
}

function setBorderSize(e) {
    let element = e.currentTarget;
    let value = "solid " + element.value + "px";
    let i = [...borderSizes].indexOf(element);
    switch (i) {
        case 0:
            target.style.borderTop = value;
            break;
        case 1:
            target.style.borderRight = value;
            break;
        case 2:
            target.style.border = value;
            break;
        case 3:
            target.style.borderBottom = value;
            break;
        default:
            target.style.borderLeft = value;
    }
}

let borderRadius = document.querySelectorAll("#third input");
let i = 1;
for (let radius of borderRadius) {
    radius.addEventListener("change", window["setBorderSize" + i]);
    i++;
}

function setBorderSize1(e) {
    let element = e.currentTarget;
    let value = element.value + "px";
    target.style.borderRadius = value;
}
function setBorderSize2(e) {
    let element = e.currentTarget;
    let value = element.value + "px";
    target.style.borderTopLeftRadius = value;
}
function setBorderSize3(e) {
    let element = e.currentTarget;
    let value = element.value + "px";
    target.style.borderTopRightRadius = value;
}
function setBorderSize4(e) {
    let element = e.currentTarget;
    let value = element.value + "px";
    target.style.borderBottomRightRadius = value;
}
function setBorderSize5(e) {
    let element = e.currentTarget;
    let value = element.value + "px";
    target.style.borderBottomLeftRadius = value;
}