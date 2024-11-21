import { CopyMethod } from "./types";

const modernCopy:CopyMethod = (text,successCallback,failureCallback) => {
    navigator.clipboard.writeText(text).then(
        ()=>{
            if(successCallback){
                successCallback();
            }
        }
    ).catch(
        err=>{
            if(failureCallback){
                failureCallback(err);
            }
        }
    );
}

export default modernCopy;