// LIVE

console.log("Successfully loaded GitHub VSCode Rewrite extension");

var vscodeBTN = document.querySelectorAll('.get-repo-btn')[1];
var cloneURL = document.querySelectorAll(".input-group")[1].querySelector(".form-control").value;
vscodeBTN.setAttribute('data-open-app', "visual-studio-code");

var currentLabel = vscodeBTN.getAttribute('aria-label');
currentLabel = currentLabel.substring(0, currentLabel.length - 1);
currentLabel = currentLabel + " Code.";
vscodeBTN.setAttribute('aria-label', currentLabel);

vscodeBTN.innerText = vscodeBTN.innerText + " Code";

protocolURL = "vscode://vscode.git/clone?url=" + encodeURI(cloneURL);
vscodeBTN.href = protocolURL;