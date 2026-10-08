import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/session";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const dynamic = "force-dynamic";

export default async function RegisterPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/10 text-3xl ring-1 ring-brand-500/20">
            💎
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white">
            BIRRLY
          </h1>
          <p className="mt-2 text-sm font-medium text-white/30">
            Build your streak. Build your rewards.
          </p>
        </div>

        <RegisterForm />

        <p className="mt-8 text-center text-sm font-medium text-white/30">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-bold text-brand-400 hover:text-brand-300 transition-colors"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
