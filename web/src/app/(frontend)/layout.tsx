import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "DinOvo",
  description: "Loja virtual de venda de ovos de dinossauros",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
