"use client";
import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-sm p-4">
        <Card className="border-0 shadow-none bg-foreground text-background">
          <CardHeader className="space-y-2 pb-6">
            <CardTitle className="text-2xl font-medium">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">
                  Email
                </Label>
                <Input id="email" type="email" className="h-11" required />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-sm">
                    Senha
                  </Label>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-800"
                  >
                    Esqueceu?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  className="h-11"
                  required
                />
              </div>
              <Button
                variant="secondary"
                type="submit"
                className="w-full h-11 mt-6"
              >
                Entrar
              </Button>
              <div className="text-center text-sm text-gray-500">
                Não tem uma conta?{" "}
                <Link href="#" className="text-blue-500 underline">
                  Criar conta
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
