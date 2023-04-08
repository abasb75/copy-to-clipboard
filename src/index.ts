// @ts-nocheck
import modernCopy from "./modernCopy";
import msCopy from "./msCopy";
import domCopy from "./domCopy";
import copyToClipboard from "./copyToClipboard";

function copy(text:string):Promise;
function copy(text:string,success:Function|null):null;
function copy(text:string,success:Function|null=null,error:Function|null=null):null;
function copy(text:string,success:Function|null=null,error:Function|null=null):Promise|null{
    if(success || error){
        copyToClipboard(text,success,error);
        return null;
    }
    return new Promise((resolve,reject)=>{
        try{
           modernCopy(text,resolve,reject);
        }catch(err){
            try{
                msCopy(text);
                resolve();
            }catch(err){
                try{
                    domCopy(text,resolve,reject);
                }catch(err){
                    reject(err);
                }
            }
        }
    });
}

export default copy;