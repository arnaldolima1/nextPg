"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { CreateUser } from "@/actions/user";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { createUser } from "@/lib/types/user";
import { IconDatabase } from "@tabler/icons-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleToast } from "@/components/core/toast";
import { Container } from "@/components/core/container";
import { createUserSchema } from "@/lib/types/schemas/user";
import { BottomGradient } from "@/components/ui/button-gradient";
import { BackgroundLines } from "@/components/ui/background-lines";
import { LabelInputContainer } from "@/components/ui/label-container";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function SignUpForm() {
  const t = useTranslations("AccountPage");

  const form = useForm<createUser>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: createUser) => {
    await handleToast({
      action: () => CreateUser(data),
      loadingMessage: t("toast.loading"),
      successMessage: t("toast.success"),
      errorMessage: t("toast.error"),
      getErrorDescription: (response) =>
        !response.success ? response.message : undefined,
    });
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

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 mt-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <LabelInputContainer>
                      <FormLabel>{t("email.label")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("email.placeholder")}
                          {...field}
                        />
                      </FormControl>
                    </LabelInputContainer>
                    <FormMessage onInvalid={() => console.log("invalido")} />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <LabelInputContainer>
                      <FormLabel>{t("username.label")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("username.placeholder")}
                          {...field}
                        />
                      </FormControl>
                    </LabelInputContainer>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <LabelInputContainer>
                      <FormLabel>{t("password.label")}</FormLabel>
                      <FormControl>
                        <Input placeholder="********" {...field} />
                      </FormControl>
                    </LabelInputContainer>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="bg-gradient-to-br relative group/btn from-blue-500 to-blue-400 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                {t("submit")}
                <BottomGradient />
              </Button>
            </form>
          </Form>

          <div className="text-center text-sm mt-5">
            {t("haveAccount")}{" "}
            <Link
              href="/"
              className="text-muted-foreground hover:text-blue-400"
            >
              {t("link")}
            </Link>
          </div>
        </div>
      </BackgroundLines>
    </Container>
  );
}
