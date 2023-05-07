export interface IUser {
  id: string;
  name: string;
  age: number;
}

export type UserProps = {
  user: IUser | null;
  onEditUser?: (user: IUser) => void;
  onRemoveUser?: (userId: string) => void;
};
