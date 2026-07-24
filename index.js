let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
    const para = document.getElementById("save-el");
    para.style.backgroundColor = "#001f3f";
    para.style.color = "white";
    para.style.textShadow = "2px 2px 4px rgba(0,0,0,0.6)";
    para.style.padding = "12px 20px";
    para.style.borderRadius = "4px";
    para.style.fontSize = "18px";
    para.style.fontFamily = "Segoe UI, sans-serif";