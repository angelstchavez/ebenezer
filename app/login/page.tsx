import { LoginForm } from "@/components/login/login-form";

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4 bg-gradient-to-b from-blue-700 to-blue-200 overflow-x-clip">
      <LoginForm />
    </div>
  );
}
