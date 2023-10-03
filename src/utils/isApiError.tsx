export type ApiError = {
  status: number;
  data: { code: string; detail?: string; password?: string; email?: string };
};

export function isApiError(error: unknown): error is ApiError {
  return typeof error === 'object' && error != null && 'status' in error && typeof error.status === 'number';
}
