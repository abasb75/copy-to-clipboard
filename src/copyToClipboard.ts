import domCopy from './domCopy';
import modernCopy from './modernCopy';
import msCopy from './msCopy';
import { CopyMethod } from './types';

const copyToClipboard:CopyMethod = (text, successCallback , failureCallback)=>{
    if (navigator && navigator.clipboard) {
        modernCopy(text,successCallback,failureCallback)
    }
    else if (window && (<any>window).clipboardData !== undefined) {
        msCopy(text,successCallback,failureCallback);
    }
    else {
        domCopy(text, successCallback, failureCallback);
    }
}

export default copyToClipboard;