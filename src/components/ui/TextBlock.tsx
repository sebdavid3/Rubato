import React from "react";

interface TextBlockProps {
  titulo: string;
  children: React.ReactNode;
}

const TextBlock: React.FC<TextBlockProps> = ({ titulo, children }) => (
  <section className="my-8 flex flex-col items-center justify-center bg-bgSection rounded-lg py-12 px-6 mx-4 shadow-md border border-primary/10">
    <h2 className="text-3xl font-bold text-primary mb-6 text-center font-cinzel uppercase">
      {titulo}
    </h2>
    <div className="text-lg text-textDark text-center max-w-3xl font-montserrat leading-relaxed">
      {children}
    </div>
  </section>
);

export default TextBlock;
