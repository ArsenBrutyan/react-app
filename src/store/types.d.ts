export type ApplicationState = {
    posts: IPosts[];
    isDarkMode: boolean;
};

export type RootState = {
    application: ApplicationState;
};

export interface IPosts {
    userId: number;
    id?: number;
    title: string;
    body: string;
}

export interface IStaticUsers {
    id: number;
    name: string;
    fullName: string;
    email: string;
    age: number;
    actions: string;
    address: string;
    image: string;
}
