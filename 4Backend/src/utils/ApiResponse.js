class ApiResponse {
    constructor(statusCode , data , message="success" ){
        this.statusCode= statusCode , 
        this.data = data ,
        this.message = message,
        this.success = statusCode<400
    }
}

let a = new ApiResponse(220 , "hello " , "mysuccess")
console.log(a);


export {ApiResponse}