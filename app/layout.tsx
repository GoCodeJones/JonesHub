import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "JonesHub",
  description: "Software Engineer & Independent Creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b border-[#111] p-4 flex justify-between">
          <div className="font-bold text-xl text-[#FFC400]">
            <Link href="/">JONESHUB</Link>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/feed">Feed</Link>
            <Link href="/videos">Vídeos</Link>
            <Link href="/links">Links</Link>
            <Link href="/contribuicao">Contribuição</Link>
            <Link href="/contato">Contato</Link>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
