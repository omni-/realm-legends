'use strict';
const electron = require('electron');
const ipc = electron.ipcRenderer;

function handleCommand(cmd) {
    //handle in c#
    //send response
    writeLine(cmd, null);
}

function writeLine(text, color) {
    var out = document.getElementById("output");
    var newOut = document.createElement("span");
    newOut.innerText = text;
    out.appendChild(newOut);
}

