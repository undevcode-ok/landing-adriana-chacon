"use client";
import { useState } from "react";

export function useNewsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (!email.trim()) return;
    // Aquí iría la lógica real de suscripción
    setSent(true);
    setEmail("");
  };

  return { email, setEmail, sent, submit };
}