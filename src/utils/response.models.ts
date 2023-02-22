export interface ResponseModel<T> {
  success: boolean;
  data: T;
}

export function emptySuccessResponse<T>(): ResponseModel<T> {
  return {
    success: true,
    data: undefined,
  };
}

export function successResponse<T>(data: T): ResponseModel<T> {
  return {
    success: true,
    data: data,
  };
}
