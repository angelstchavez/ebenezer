import { LoginForm } from "@/components/login/login-form";

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#BCBCBC,#ffffff_100%)] overflow-x-clip">
      <LoginForm />
    </div>
  );
}
