export type UserReduxState = {
  user: User;
};

export type User = {
  type: UserType;
  wallet: string;
};

export enum UserType {
  user = "user",
  admin = "admin",
}
