export interface ChildrenProp {
  children: React.ReactNode;
}

export interface UserModel {
  name: string;
  age: number;
  email: string;
  newsletter: 'daily' | 'weekly' | 'monthly'
}

export interface InputErrorModel {
  field: string;
  message: string;
}