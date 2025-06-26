import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fundación Rubato | Filarmónica Juvenil de Barranquilla",
  description: "La Filarmónica Juvenil de Barranquilla brinda la oportunidad a jóvenes de participar en el mundo sinfónico y desarrollar la excelencia musical.",
};

export default function FilarmonicaJuvenilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
