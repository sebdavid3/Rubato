import React from "react";

interface BotonPrincipalProps {
  texto: string;
  onClick?: () => void;
  url?: string;
  disabled?: boolean;
  tipo?: "primario" | "secundario";
}

const BotonPrincipal: React.FC<BotonPrincipalProps> = ({ texto, onClick, url, disabled, tipo = "primario" }) => {
  const base =
    "px-6 py-2 rounded font-bold transition-colors duration-200 focus:outline-none ";
  const primario = "bg-primary text-white hover:bg-primary/90";
  const secundario = "border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white";
  const classes = `${base} ${tipo === "primario" ? primario : secundario}`;

  if (url) {
    return (
      <a href={url} className={classes} aria-disabled={disabled} tabIndex={disabled ? -1 : 0}>
        {texto}
      </a>
    );
  }
  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {texto}
    </button>
  );
};

export default BotonPrincipal;
