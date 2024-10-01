import { PageProps } from "$fresh/server.ts";
import { Header } from "@/components/Header.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="layout min-h-screen">
      <Header />
      <div>
        <Component />
      </div>
    </div>
  );
}
