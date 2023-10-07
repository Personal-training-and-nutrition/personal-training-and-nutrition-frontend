type TResponse = {
  status: string;
  message: string;
  filter: () => object[];
  map: () => object[];
};

type TTokensResponse = {
  access: string;
  refresh: string;
};

type TRefreshResponse = {
  access: string;
};
