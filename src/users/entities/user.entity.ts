import { Role } from '../enums/role.enum';

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  age?: number;
  roles: Role[];
  createdAt: Date;
  updatedAt: Date;
}
