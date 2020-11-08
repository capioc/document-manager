import { User } from '../user/user';

export interface Document {
    _id: string;
    name: string;
    path: string;
    size?: string;
    assignees: User[];
    type: string;
}