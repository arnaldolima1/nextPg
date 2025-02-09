"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconDatabase } from "@tabler/icons-react";
import { Container } from "@/components/core/container";
import { BottomGradient } from "@/components/ui/button-gradient";
import { BackgroundLines } from "@/components/ui/background-lines";
import { LabelInputContainer } from "@/components/ui/label-container";

export default function SignUpForm() {
  const t = useTranslations("AccountPage");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Container>
      <BackgroundLines className="flex justify-center items-center z-0">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-background z-10">
          <div className="flex items-center space-x-2 mb-4">
            <IconDatabase className="h-8 w-8 text-blue-500" />
            <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
              NextPg
            </h2>
          </div>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            {t("description")}
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">{t("email.label")}</Label>
              <Input id="email" placeholder={t("email.placeholder")} type="email" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="username">{t("username.label")}</Label>
              <Input id="username" placeholder={t("username.placeholder")} type="text" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">{t("password.label")}</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-8">
              <Label htmlFor="confirmPassword">{t("password.label2")}</Label>
              <Input id="confirmPassword" placeholder="••••••••" type="password" />
            </LabelInputContainer>

            <Button
              className="bg-gradient-to-br relative group/btn from-blue-500 to-blue-400 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              {t("submit")}
              <BottomGradient />
            </Button>

            <div className="text-center text-sm mt-4">
              {t("haveAccount")}{" "}
              <Link
                href="/"
                className="text-muted-foreground hover:text-blue-400"
              >
                {t("link")}
              </Link>
            </div>
          </form>
        </div>
      </BackgroundLines>
    </Container>
  );
}