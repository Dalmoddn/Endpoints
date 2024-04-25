export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
  productIds?: number[];
};
export type UserBuy = {
  username: string;
  productIds?: number[];
};