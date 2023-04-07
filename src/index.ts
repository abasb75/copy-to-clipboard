// @ts-nocheck

export default function copy(text:string,success:Function|null=null,error:Function|null=null){
    if (navigator && navigator.clipboard ) {
        navigator.clipboard.writeText(text).then(
            ()=>{
                if(success){
                    success();
                }
            }
        ).catch(
            (err)=>{
                if(error){
                    error(err);
                }
            }
        );
    }
    else if(window && window.clipboardData !== undefined) {
        window.clipboardData.setData("Text", text);
        if(success){
            success();
        }
    }
    else {
        fallbackCopyTextToClipboard(text,success,error);
        if(success) { success(); }
    }

}

function fallbackCopyTextToClipboard(text:string,success:Function|null=null,error:Function|null=null) {
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
        if(success){ 
            success(); 
        }
    } catch (err) {
        if(error){
            error(err);
        }
    }
  
    document.body.removeChild(textArea);
  }