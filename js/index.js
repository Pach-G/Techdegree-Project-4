// Create button tag for each bttn
const bttnsArray = ["default", "success", "error", "warning", "info"]

const bttnFunction = (array) => {
    let html = "";
    for (let i = 0; i < bttnsArray.length; i++) {
        html += `<button class="bttn ${bttnsArray[i]}">${bttnsArray[i]}</button>`;
    }
    return html;
};

document.getElementById('bttnsHTML').innerHTML = bttnFunction(bttnsArray);



