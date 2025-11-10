export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export type UserFormData = Omit<User, "id">;

