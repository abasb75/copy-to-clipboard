// @ts-nocheck

function domCopy(text:string,success:Function|null=null,error:Function|null=null) {
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
        if (success) {
            success();
        }
    }
    catch (err) {
        if (error) {
            error(err);
        }
    }
    document.body.removeChild(textArea);
}

export default domCopy;