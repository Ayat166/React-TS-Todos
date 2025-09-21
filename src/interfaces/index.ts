export interface IRegisterForm {
    name: 'username' | 'email' | 'password' | 'confirmPassword';
    type: string;
    placeholder: string;
    validation?: {
        required?: string;
        minLength?: {
            value: number;
            message: string;
        };
        pattern?: {
            value: RegExp;
            message: string;
        };
    };
}

