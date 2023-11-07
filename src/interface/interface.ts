export interface ChildrenProp {
  children: React.ReactNode;
}

export interface UserModel {
  name: string;
  age: number | string;
  email: string;
  newsletter: 'daily' | 'weekly' | 'monthly'
}

export interface InputErrorModel {
  path: string;
  message: string;
}