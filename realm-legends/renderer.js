const ipc = require('electron').ipcRenderer;

var input = document.getElementById("input_control");
input.addEventListener("onkeydown", function (event) {
    if (event.keyCode === 13) {
        ipc.send('cmdSubmit', input.value);
        input.value = "";
    }
}, false);