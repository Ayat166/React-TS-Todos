import type { IRegisterForm } from "../interfaces";

export const RegisterForm : IRegisterForm[] = [ 
    {
        name:"username",
        type:"text",
        placeholder:"Username",
        validation:{
            required:"Username is required",
            minLength:{
                value:3,
                message:"Username must be at least 3 characters long",
            }
        }
    },
    {
        name:"email",
        type:"email",
        placeholder:"Email",
        validation:{
            required:"Email is required",
            pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:"Email is invalid",
            }
        }
    },
    {
        name:"password",
        type:"password",
        placeholder:"Password",
        validation:{
            required:"Password is required",
            minLength:{
                value:6,
                message:"Password must be at least 6 characters long",
            }
        }       
    },
    {
        name:"confirmPassword",
        type:"password",
        placeholder:"Confirm Password",
        validation:{
            required:"Confirm Password is required",
            minLength:{
                value:6,
                message:"Confirm Password must be at least 6 characters long",
            },
        }
    },
]