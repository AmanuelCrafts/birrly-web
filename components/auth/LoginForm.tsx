"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { AuthLoadingOverlay } from "./AuthLoadingOverlay";

export function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/");
        router.refresh();
      } else {
        setError(data.error ?? "Invalid username or password.");
        setIsLoading(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  }

  return (
    <>
      <AuthLoadingOverlay isLoading={isLoading} />
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          autoComplete="username"
          required
        />

        <div className="relative">
          <Input
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            autoComplete="current-password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[42px] text-[10px] font-black uppercase tracking-wider text-white/40 hover:text-white/60 transition-colors cursor-pointer"
          >
            {showPassword ? "HIDE" : "SHOW"}
          </button>
        </div>

        {error && (
          <p className="rounded-lg border-2 border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-bold text-red-400">
            {error}
          </p>
        )}

        <Button type="submit" isLoading={isLoading} className="w-full" size="lg">
          Log In
        </Button>
      </form>
    </>
  );
}
