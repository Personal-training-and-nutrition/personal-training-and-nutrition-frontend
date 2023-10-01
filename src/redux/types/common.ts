type TResponse = {
  status: string;
  message: string;
};

type TTokensResponse = TResponse & {
  access: string;
  refresh: string;
};

type TRefreshResponse = TResponse & {
  access: string;
};
