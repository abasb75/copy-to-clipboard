
import modernCopy from "./modernCopy";
import msCopy from "./msCopy";
import domCopy from "./domCopy";
import copyToClipboard from "./copyToClipboard";
import { CopyMethod } from "./types";

const copy:CopyMethod = (text,succussCallback,failureCallback):Promise<string>|void=>{
    if(succussCallback || failureCallback){
        copyToClipboard(text,succussCallback,failureCallback);
        return;
    }
    return new Promise<string>((resolve,reject)=>{
        try{
           modernCopy(text,()=>resolve('copied'),reject);
        }catch(err){
            try{
                msCopy(text);
                resolve('copied');
            }catch(err){
                try{
                    domCopy(text,()=>resolve('copied'),reject);
                }catch(err){
                    reject(err);
                }
            }
        }
    });
}

export default copy;