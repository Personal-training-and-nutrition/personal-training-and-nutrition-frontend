export type ApiError = {
  status: number;
  data: {
    errors: { code: string; detail?: string }[];
  };
};

export function isApiError(error: unknown): error is ApiError {
  return typeof error === 'object' && error != null && 'status' in error && typeof error.status === 'number';
}
