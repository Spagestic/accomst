"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import SignInWithGoogleButton from "./SignInWithGoogleButton";

export function LoginForm({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInError) {
        throw signInError;
      }
      // Update this route to redirect to an authenticated route. The user already has an active session.
      router.push("/dashboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleLogin}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <Link className="flex flex-col items-center gap-2 font-medium" href="/">
          <div className="flex aspect-square items-center justify-center rounded-md">
            <Image
              alt="Logo"
              className="aspect-square size-14"
              height={64}
              src={"/logo_light.png"}
              width={64}
            />
          </div>
          <span className="sr-only">Accomst</span>
        </Link>
        <h1 className="font-bold text-xl">Welcome to Accomst</h1>
      </div>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="m@example.com"
            required
            type="email"
            value={email}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              href="/auth/forgot-password"
            >
              Forgot your password?
            </Link>
          </div>
          <Input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            value={password}
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button className="w-full" disabled={isLoading} type="submit">
          {isLoading ? "Logging in..." : "Login"}
        </Button>
        <FieldSeparator>Or continue with</FieldSeparator>
        <SignInWithGoogleButton />
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link className="underline underline-offset-4" href="/auth/sign-up">
          Sign up
        </Link>
      </div>
    </form>
  );
}
