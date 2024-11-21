type SuccessCallback = (text?:string)=>void;
type FailureCallback = (error:any)=>void;
export type CopyMethod = (textForCopy:string,successCallback?:null|SuccessCallback,failureCallback?:FailureCallback)=>Promise<string>|void;