"use client";

import { useId, useState, type ReactNode } from "react";

type DisclosureProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export default function Disclosure({
  title,
  children,
  defaultOpen = false,
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = useId();

  const buttonId = `disclosure-button-${id}`;
  const panelId = `disclosure-panel-${id}`;

  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className="flex w-full items-center justify-between px-4 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        >
          <span>{title}</span>

          <span aria-hidden="true">
            {isOpen ? "▲" : "▼"}
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="border-t border-slate-200 px-4 py-4 text-slate-600"
      >
        {children}
      </div>
    </div>
  );
}