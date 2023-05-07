export interface IUser {
  id: string;
  name: string;
  email: string;
}

export type UserProps = {
  user: IUser | null;
  onEditUser?: (user: IUser) => void;
  onRemoveUser?: (userId: string) => void;
};
