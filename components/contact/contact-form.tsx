"use client";

import { Send } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mnjkwwlz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setState("error");
      setErrorMsg(
        "Something went wrong. Please try emailing directly instead.",
      );
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-[var(--radius-md)] border border-border bg-surface p-8 text-center">
        <p className="text-lg font-semibold">Message sent!</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks for reaching out. I&apos;ll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-[var(--radius-lg)] border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-sm font-medium">
            Name <span aria-hidden>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="h-11 rounded-[var(--radius-sm)] border border-border bg-surface-subtle px-3 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-50"
            disabled={state === "submitting"}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-sm font-medium">
            Email <span aria-hidden>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="h-11 rounded-[var(--radius-sm)] border border-border bg-surface-subtle px-3 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-50"
            disabled={state === "submitting"}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          autoComplete="off"
          placeholder="What's this about?"
          className="h-11 rounded-[var(--radius-sm)] border border-border bg-surface-subtle px-3 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-50"
          disabled={state === "submitting"}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message <span aria-hidden>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Your message..."
          className="resize-y rounded-[var(--radius-sm)] border border-border bg-surface-subtle px-3 py-2.5 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-50"
          disabled={state === "submitting"}
        />
      </div>

      {errorMsg && (
        <p role="alert" className="text-sm text-danger">
          {errorMsg}
        </p>
      )}

      <Button type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? (
          "Sending…"
        ) : (
          <>
            Send message <Send className="size-4" aria-hidden />
          </>
        )}
      </Button>
    </form>
  );
}
