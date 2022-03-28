export type ResponseError<T> = {
  data: T;
  status: number;
  statusText: string;
}

export function isNetworkError<T>(e: any): e is ResponseError<T> {
  return 'statusText' in e;
}
