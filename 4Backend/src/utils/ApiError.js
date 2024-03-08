class ApiError extends Error{
    constructor(
        statusCode, 
        message="somethis went wrong",
        errors=[],
        stack= ''
    ){
            super(message)
            this.statusCode=statusCode
            this.data = null 
            this.success = false
            this.errors = errors

            if(stack){
                this.stack= stack
            }else{
                Error.captureStackTrace(this , this.constructor)
            }
    }
}

// let a = new ApiError(402 , "this is error you  are get" , ['data'] , 'ok')
// console.log(a);

export default ApiError