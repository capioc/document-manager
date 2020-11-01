import { User } from '../user/user';

export interface Document {
    id: string;
    name: string;
    path: string;
    size?: string;
    assignees: User[];
}