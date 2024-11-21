// Type definitions for @abasb75/copy-to-clipboard
// Project: @abasb75/copy-to-clipboard
// Definitions by: Abbas Bagheri <https://abasbagheri.ir>

 export as namespace copyToClipboard;

 export function copy(copyToTex:string,successCallback?:()=>void|null,failureCallback?:(err:any)=>void):Promise<string>|void;