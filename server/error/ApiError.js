class ApiError extends Error{
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }
    
    static badRequest(messgae) {
        return new ApiError(404, messgae)
    }

    static internal(messgae) {
        return new ApiError(500, messgae)
    }

    static forbidden(messgae) {
        return new ApiError(403, messgae)
    }
}

module.exports = ApiError