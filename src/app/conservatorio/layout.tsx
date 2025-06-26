import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fundación Rubato | Conservatorio",
  description: "Formación musical de alta calidad para niños, niñas, jóvenes y adultos que desean ser parte del mundo de la música.",
};

export default function ConservatorioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
