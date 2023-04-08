// @ts-nocheck

function msCopy(text:string,success:Function|null=null,error:Function|null=null) {
    window.clipboardData.setData("Text", text);
    if(success){
        success();
    }else if(error){
        error('window.clipboardData is not supported on browser!');
    }
    
}

export default msCopy;