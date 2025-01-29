import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-24 flex items-center justify-center flex-col space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground">
        Sign in to your account
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Sign in to get started
        </p>
      </div>
      <SignIn
        forceRedirectUrl="/dashboard"
        appearance={{
          elements: {
            card: "bg-card border border-border shadow-lg rounded-xl p-6",
            headerTitle: "hidden",
            headerSubtitle: "text-muted-foreground",
            socialButtonsBlockButton__google: "bg-white hover:bg-white/60",
            dividerText: "text-muted-foreground",
            dividerLine: "bg-border",
            formFieldLabel: "text-foreground",
            footer: "hidden",
          },
        }}
      />
      <p className="mt-2 text-lg text-muted-foreground">
        Don&apos;t have an account?
        <Link className="underline" href="/sign-up">
          Sign up
        </Link>
      </p>
    </div>
  );
}
