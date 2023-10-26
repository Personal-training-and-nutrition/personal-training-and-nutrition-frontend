export type TResponse = {
  status: string;
  message: string;
  filter: () => object[];
  map: () => object[];
};

export type TTokensResponse = {
  access: string;
  refresh: string;
};

export type TRefreshResponse = {
  access: string;
};
