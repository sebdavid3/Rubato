import React from "react";

interface EventDescriptionProps {
  contenido: string;
}

const EventDescription: React.FC<EventDescriptionProps> = ({ contenido }) => (
  <div className="prose max-w-none my-6" dangerouslySetInnerHTML={{ __html: contenido }} />
);

export default EventDescription;
