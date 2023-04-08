// @ts-nocheck

import domCopy from './domCopy';
import modernCopy from './modernCopy';
import msCopy from './msCopy';

export default function copyToClipboard(text:string, success = null, error = null) {
    if (navigator && navigator.clipboard) {
        modernCopy(text,success,error)
    }
    else if (window && window.clipboardData !== undefined) {
        msCopy(text,success,error);
    }
    else {
        domCopy(text, success, error);
    }
}