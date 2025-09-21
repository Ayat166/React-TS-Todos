import InputErrorMessage from "../components/InputErrorMessage";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { RegisterForm } from "../data";
import axiosInstance from "../config/axios.config";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<IRegisterForm>();
  const password = watch("password");
  const [isLoading, setIsLoading] = useState(false);

  //** Handler */
  const onSubmit: SubmitHandler<IRegisterForm> = async(data) => {

    setIsLoading(true);
    const { confirmPassword, ...payload } = data; 
    try{
      const {data,status} = await axiosInstance.post("/auth/local/register", payload);
      if(status === 200){
        toast.success("Registration successful");
      }
    }catch(err){
      if(axios.isAxiosError(err)){
        toast.error(err.response?.data?.error?.message || "Registration failed");
      }
    }finally{
      setIsLoading(false);
    }
  };

  /** Renders */
  const renderFormFields = () => {
    return RegisterForm.map((field , idx) => {
      
      const validation = {
      ...field.validation,
      ...(field.name === "confirmPassword" && {
        validate: (value: string) =>
          value === password || "Passwords do not match",
      }),
    };
      return(
      
      <div key={idx}>
        <Input type={field.type} placeholder={field.placeholder} {...register(field.name, validation)} />
        {errors[field.name] && <InputErrorMessage message={errors[field.name]?.message} />}
      </div>
    )})
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 text-center">
          Register
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {renderFormFields()}
          <Button type="submit" title="Register" className="w-full" isLoading={isLoading} />
        </form>
      </div>
      <Toaster />
    </div>
  );
}



export default Register;
