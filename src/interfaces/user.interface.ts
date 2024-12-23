export interface NewUserInterface {
    username: string;
    email: string;
    password: string;
    date?: Date;
}

export interface UserInterface {
    email: string;
    password: string;
}

export interface AuthResponseInterface  {
    id: string;
    username: string;
    email: string;
    accessToken: string;
}