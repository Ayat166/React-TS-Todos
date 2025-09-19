import Button from "../components/ui/Button";
import Input from "../components/ui/Input";


function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 text-center">
          Register
        </h1>

        <form className="space-y-4">
          <Input type="text" placeholder="Full Name" required />
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <Input type="password" placeholder="Confirm Password" required />

          <Button type="submit" title="Register" className="w-full" />
        </form>
      </div>
    </div>
  );
}

export default Register;
