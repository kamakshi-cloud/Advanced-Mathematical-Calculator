// DARK MODE (FIXED)
function toggleMode() {
    document.body.classList.toggle("dark");

    let btns = document.querySelectorAll(".toggle");
    btns.forEach(btn => {
        btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
}

// SCIENTIFIC
function append(v){
    document.getElementById("display").value += v;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function del(){
    let val = document.getElementById("display").value;
    document.getElementById("display").value = val.slice(0,-1);
}

function calculate(){
    try{
        let exp = document.getElementById("display").value;
        document.getElementById("display").value = eval(exp);
    }catch{
        alert("Error");
    }
}
// STATISTICS
function calculateStats(){
    let input = document.getElementById("numbers").value.trim();

    // Check empty input
    if(input === ""){
        alert("Please enter numbers");
        return;
    }

    // Convert input to array
    let arr = input.split(",").map(num => parseFloat(num.trim()));

    // Check invalid numbers
    if(arr.some(isNaN)){
        alert("Enter valid numbers only");
        return;
    }

    // Mean
    let sum = arr.reduce((a,b)=>a+b,0);
    let mean = sum / arr.length;

    // Median
    arr.sort((a,b)=>a-b);
    let median = arr.length % 2 === 0 ?
        (arr[arr.length/2 - 1] + arr[arr.length/2]) / 2 :
        arr[Math.floor(arr.length/2)];

    // Mode
    let freq = {};
    let maxCount = 0;
    let mode = [];

    arr.forEach(num => {
        freq[num] = (freq[num] || 0) + 1;

        if(freq[num] > maxCount){
            maxCount = freq[num];
            mode = [num];
        } else if(freq[num] === maxCount){
            mode.push(num);
        }
    });

    // Remove duplicates in mode
    mode = [...new Set(mode)];

    document.getElementById("result").innerHTML =
        `Mean: ${mean.toFixed(2)} <br>
         Median: ${median} <br>
         Mode: ${mode.join(", ")}`;
}
function calculateTrig(func){
    let val = parseFloat(document.getElementById("display").value);

    if(isNaN(val)){
        alert("Enter a number first");
        return;
    }

    let result;

    // Convert degree → radian
    let rad = val * (Math.PI / 180);

    if(func === "sin") result = Math.sin(rad);
    if(func === "cos") result = Math.cos(rad);
    if(func === "tan") result = Math.tan(rad);

    document.getElementById("display").value = result.toFixed(4);
}