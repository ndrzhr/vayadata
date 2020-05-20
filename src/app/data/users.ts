import {UserPermission} from './UserPermission'

export class Users{
    UserID : number
    Name  : string
    User : string
    Password : string
    Permission : Array<UserPermission>
}