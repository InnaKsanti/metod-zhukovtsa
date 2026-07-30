import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const image = new URL("/og.png", base).toString();

  return {
    metadataBase: base,
    title: "Метод Жуковца — телесно-ориентированная терапия",
    description:
      "Авторский метод работы с глубокими мышечными напряжениями. О методе, ходе сеанса и сертифицированных специалистах.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Метод Жуковца — свобода через тело",
      description:
        "Телесно-ориентированная терапия: о методе, ходе сеанса и сертифицированных специалистах.",
      type: "website",
      locale: "ru_RU",
      images: [{ url: image, width: 1200, height: 630, alt: "Метод Жуковца — свобода через тело" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Метод Жуковца — свобода через тело",
      description: "Телесно-ориентированная терапия и работа с глубокими мышечными напряжениями.",
      images: [image],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
