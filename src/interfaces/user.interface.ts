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