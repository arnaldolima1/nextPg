import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function ToggleLocation() {
  const router = useRouter();
  const [locale, setLocale] = useState<string>("");

  const getCookie = () => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("APP_LOCALE="))
      ?.split("=")[1];
    return cookieLocale;
  };

  const createCookie = (locale?: string) => {
    if (locale) {
      setLocale(locale);
      document.cookie = `APP_LOCALE=${locale};`;
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `APP_LOCALE=${browserLocale};`;
    }
    router.refresh();
  };

  const changeLocale = (locale: string) => {
    createCookie(locale);
  };

  useEffect(() => {
    const cookie = getCookie();

    if (cookie) {
      setLocale(cookie);
    } else {
      createCookie();
    }
  }, [router]);

  return (
    <div className="flex gap-2 items-center my-2">
      <Button onClick={() => changeLocale("pt")}>PT</Button>

      <Button onClick={() => changeLocale("en")}>En</Button>
    </div>
  );
}
