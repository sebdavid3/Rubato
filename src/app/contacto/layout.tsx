import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fundación Rubato | Contáctanos",
  description: "Ponte en contacto con la Fundación Rubato. Estamos ubicados en Barranquilla, Atlántico. Resolvemos tus dudas sobre nuestros programas musicales.",
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
