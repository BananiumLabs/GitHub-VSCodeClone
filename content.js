// LIVE

// document.querySelectorAll("span.d-none.d-md-flex")[1].addEventListener("click", function(){
function updateBtn() {
    if (document.querySelector('[data-open-app="visual-studio"]') !== null) {
        var vscodeBTN = document.querySelector('[data-open-app="visual-studio"]');
        // var vscodeBTN = document.querySelectorAll('.get-repo-modal')[0].querySelectorAll('.d-flex')[1];

        var cloneURL = document.querySelectorAll(".input-group")[1].querySelector(".form-control").value;


        // vscodeBTN.setAttribute('data-open-app', "visual-studio-code");

        // var currentLabel = vscodeBTN.getAttribute('aria-label');
        // currentLabel = currentLabel.substring(0, currentLabel.length - 1);
        // currentLabel = currentLabel + " Code.";
        // vscodeBTN.setAttribute('aria-label', currentLabel);

        while (!vscodeBTN.innerHTML.includes("Visual Studio")) {
        }
        if (!vscodeBTN.innerHTML.endsWith("Code")) {
            console.log(vscodeBTN.innerHTML);
            vscodeBTN.innerHTML = vscodeBTN.innerHTML + " Code";
            console.log(vscodeBTN.innerHTML);
        }

        protocolURL = "vscode://vscode.git/clone?url=" + encodeURI(cloneURL);
        vscodeBTN.href = protocolURL;
        // clearInterval(checkExist);
    }
}

var checkExist = setInterval(updateBtn, 250);

