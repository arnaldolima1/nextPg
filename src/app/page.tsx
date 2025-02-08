"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { IconDatabase } from "@tabler/icons-react";
import { Container } from "@/components/core/container";
import { BottomGradient } from "@/components/ui/button-gradient";
import { Button } from "@/components/ui/button";
import { LabelInputContainer } from "@/components/ui/label-container";
import Link from "next/link";

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <Container>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <div className="flex items-center space-x-2 mb-4">
          <IconDatabase className="h-8 w-8 text-blue-500" />
          <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
            NextPG
          </h2>
        </div>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Faça login para gerenciar seus bancos de dados PostgreSQL de forma
          simples e eficiente
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="username">Nome de usuário</Label>
            <Input id="username" placeholder="usuário" type="text" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-8">
            <div className="flex items-center justify-between">
              
              <Label htmlFor="password">Senha</Label>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-blue-400"
              >
                Esqueceu?
              </Link>
            </div>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <Button
            className="bg-gradient-to-br relative group/btn from-blue-500 to-blue-800 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Entrar 
            <BottomGradient />
          </Button>

          {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}

          <div className="text-center text-sm  mt-4">
            Não tem uma conta?{" "}
            <Link href="#" className="text-muted-foreground hover:text-blue-400">
              Criar conta
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
}
