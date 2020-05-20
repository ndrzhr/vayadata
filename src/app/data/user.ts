import {UserPermission} from './UserPermission';

export class User{
  UserID: number;
  ScoolID: number;
    Name: string;
    User: string;
    Password: string;
    Permission: Array<UserPermission>;
}
