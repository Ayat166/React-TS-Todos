import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 text-center">Login</h1>
        
        <form className="space-y-4">
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          
          <Button type="submit" title="Login" className="w-full" />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
