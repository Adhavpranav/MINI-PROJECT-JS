let range=12;
let counter = 0;
pass_length.addEventListener("input", updateCount);
function updateCount() {
    range = pass_length.value;
    count.innerHTML = range;
}
function show() {
    let points = [];
    if (document.getElementById("Lowercase").checked) {
        points.push("abcdefghijklmnopqrstuvwxyz");
        counter++;
    }
    if (document.getElementById("Uppercase").checked) {
        points.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        counter++;
    }
    if (document.getElementById("Numbers").checked) {
        points.push("0123456789");
        counter++;
    }
    if (document.getElementById("Symbols").checked) {
        counter++;
        points.push("!@#$%^&*()_+~`|}{[]:;?><,./-=");
    }
    let string = "";
    for (let i = 0; i < points.length; i++) {
        string = string + points[i];
    } let result = "";
    for (let i = 0; i < range; i++) {
        let randomIndex = Math.floor(Math.random() * string.length);
        result += string[randomIndex];
    }
    if (counter != 0)
        disp.value = result;
    else
    {
        disp.value="Error "
    }
    counter=0;
    string = "";
    points = [];
}