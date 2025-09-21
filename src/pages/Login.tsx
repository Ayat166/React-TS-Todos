import toast from "react-hot-toast";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import axiosInstance from "../config/axios.config";
import { useForm, type SubmitHandler } from "react-hook-form";
import { LoginForm } from "../data";
import InputErrorMessage from "../components/InputErrorMessage";
import { useState } from "react";
import axios from "axios";
interface ILoginForm {
  identifier: string;
  password: string;
}

function LoginPage() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<ILoginForm>();
    const [isLoading, setIsLoading] = useState(false);
    //** Handler */
    const onSubmit: SubmitHandler<ILoginForm> = async(data) => {

    setIsLoading(true);
    try{
      const {status} = await axiosInstance.post("/auth/local", data);
      if(status === 200){
        toast.success("Login successful");
      }
    }catch(err){
      if(axios.isAxiosError(err)){
        toast.error(err.response?.data?.error?.message || "Login failed");
      }
    }finally{
      setIsLoading(false);
    }
  };

  /** Renders */
  const renderFormFields = () => {
    return LoginForm.map((field , idx) => (
      
      <div key={idx}>
        <Input type={field.type} placeholder={field.placeholder} {...register(field.name, field.validation)} />
        {errors[field.name] && <InputErrorMessage message={errors[field.name]?.message} />}
      </div>
    ))
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 text-center">Login</h1>
        
        <form className="space-y-4"  onSubmit={handleSubmit(onSubmit)}>
          {renderFormFields()}
          <Button type="submit" title="Login" className="w-full" isLoading={isLoading} />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
