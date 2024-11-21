import { CopyMethod } from "./types";

const domCopy:CopyMethod = (text,successCallback,failureCallback) => {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        if (successCallback) {
            successCallback();
        }
    }
    catch (err) {
        if (failureCallback) {
            failureCallback(err);
        }
    }
    document.body.removeChild(textArea);
}

export default domCopy;