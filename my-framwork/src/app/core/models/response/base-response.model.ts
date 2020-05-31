export interface BaseResponse<T> {
    data: T,
    status: String,
    message: String
}
