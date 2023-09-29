"use client";

import { useState } from "react";

export default function CloseNotification({ children }) {
  const [isDisplay, setIsDisplay] = useState(true);
  return (
    <section>
      {isDisplay && (
        <div>
          <button onClick={() => setIsDisplay(!isDisplay)}>Cerrar</button>
          {children}
        </div>
      )}
    </section>
  );
}
