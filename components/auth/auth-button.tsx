import Link from "next/link";
import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import { UserAvatar } from "./user-avatar";

export function AuthButton() {
  return (
    <Suspense fallback={<ArrowButton link="/auth/login" title="Login" />}>
      <AuthButtonContent />
    </Suspense>
  );
}

async function AuthButtonContent() {
  const supabase = await createClient();

  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;

  return user ? (
    <div className="flex items-center gap-2">
      <ArrowButton link="/dashboard" title="App" />
      <UserAvatar
        className="w-48"
        userEmail={user.email}
        userImageUrl={user.picture}
        userName={
          user.user_metadata?.full_name || user.user_metadata?.email || "User"
        }
      />
    </div>
  ) : (
    <div className="flex gap-2">
      <ArrowButton link="/auth/login" title="Login" />
    </div>
  );
}

function ArrowButton({ title, link }: { title: string; link: string }) {
  return (
    <Link href={link}>
      <div
        className="group relative flex items-center"
        id="gooey-btn"
        style={{ filter: "url(#gooey-filter)" }}
      >
        <button
          className="-translate-x-10 group-hover:-translate-x-19 absolute right-0 z-0 flex h-8 cursor-pointer items-center justify-center rounded-full bg-teal-800 px-2.5 py-2 font-normal text-white text-xs transition-all duration-300 hover:bg-teal-900"
          type="button"
        >
          <svg
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>Login button arrow</title>
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </button>
        <button
          className="z-10 flex h-8 cursor-pointer items-center rounded-full bg-teal-800 px-6 py-2 font-normal text-white text-xs transition-all duration-300 hover:bg-teal-900"
          type="button"
        >
          {title}
        </button>
      </div>
    </Link>
  );
}
