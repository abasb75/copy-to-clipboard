// @ts-nocheck

function modernCopy(text:string,success:Function|null=null,error:Function|null=null) {
    navigator.clipboard.writeText(text).then(
        ()=>{
            if(success){
                success();
            }
        }
    ).catch(
        err=>{
            if(error){
                error(err);
            }
        }
    );
}

export default modernCopy;