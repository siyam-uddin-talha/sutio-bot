"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

import { AuthForm } from "@/components/auth-form";
import { SubmitButton } from "@/components/submit-button";

import {
  login,
  register,
  type LoginActionState,
  RegisterActionState,
} from "../actions";
import { generatePassword, makeMail } from "@/lib/utils";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [state, formAction] = useActionState<LoginActionState, FormData>(
    login,
    {
      status: "idle",
    }
  );

  const [oneClickState, oneClickformAction] = useActionState<
    RegisterActionState,
    FormData
  >(register, {
    status: "idle",
  });

  useEffect(() => {
    if (state.status === "failed") {
      toast.error("Invalid credentials!");
    } else if (state.status === "invalid_data") {
      toast.error("Failed validating your submission!");
    } else if (state.status === "success") {
      setIsSuccessful(true);
      router.refresh();
    }
  }, [state.status, router]);

  useEffect(() => {
    if (oneClickState.status === "user_exists") {
      toast.error("Account already exists");
    } else if (oneClickState.status === "failed") {
      toast.error("Failed to create account");
    } else if (oneClickState.status === "invalid_data") {
      toast.error("Failed validating your submission!");
    } else if (oneClickState.status === "success") {
      toast.success("Account created successfully");
      setIsSuccessful(true);
      router.refresh();
    }
  }, [oneClickState, router]);

  const handleOneSubmit = () => {
    const formData = new FormData();

    formData.set("email", makeMail.email());
    formData.set("password", generatePassword());

    oneClickformAction(formData);
  };

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get("email") as string);
    formAction(formData);
  };

  return (
    <div className="flex h-dvh w-screen items-start pt-12 md:pt-0 md:items-center justify-center bg-background">
      <div className="w-full max-w-md overflow-hidden rounded-2xl flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <h3 className="text-xl font-semibold dark:text-zinc-50">Sign In</h3>
          <p className="text-sm text-gray-500 dark:text-zinc-400">
            Use your email and password to sign in
          </p>
        </div>
        <div className="border-b flex  justify-center pb-10">
          <SubmitButton
            className="w-full"
            isSuccessful={isSuccessful}
            onClick={handleOneSubmit}
          >
            One Click Login
          </SubmitButton>
        </div>

        <AuthForm action={handleSubmit} defaultEmail={email}>
          <SubmitButton isSuccessful={isSuccessful}>Sign in</SubmitButton>
          <p className="text-center text-sm text-gray-600 mt-4 dark:text-zinc-400">
            {"Don't have an account? "}
            <Link
              href="/register"
              className="font-semibold text-gray-800 hover:underline dark:text-zinc-200"
            >
              Sign up
            </Link>
            {" for free."}
          </p>
        </AuthForm>
      </div>
    </div>
  );
}
