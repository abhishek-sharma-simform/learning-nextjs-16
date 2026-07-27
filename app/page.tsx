import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My App",
  description: "This is my app",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
    </main>
  );
}
