import { CopyMethod } from "./types";

const msCopy:CopyMethod = (text,successCallback,failureCallback) => {
    (<any>window).clipboardData.setData("Text", text);
    if(successCallback){
        successCallback();
    }else if(failureCallback){
        failureCallback('window.clipboardData is not supported on browser!');
    }
    
}

export default msCopy;