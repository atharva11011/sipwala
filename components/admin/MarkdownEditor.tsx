"use client";

import { useCallback, useRef, useState } from "react";

type Props = {
  name: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
};
 
function wrapSelection(
  el: HTMLTextAreaElement,
  before: string,
  after: string,
): { nextValue: string; nextSelectionStart: number; nextSelectionEnd: number } {
  const value = el.value;
  const start = el.selectionStart ?? 0;
  const end = el.selectionEnd ?? 0;

  const selected = value.slice(start, end);
  const nextValue = `${value.slice(0, start)}${before}${selected}${after}${value.slice(end)}`;

  const nextSelectionStart = start + before.length;
  const nextSelectionEnd = end + before.length;

  return { nextValue, nextSelectionStart, nextSelectionEnd };
}

export default function MarkdownEditor({
  name,
  required,
  rows = 12,
  placeholder,
  defaultValue = "",
  className,
}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState(defaultValue);

  const applyWrap = useCallback((before: string, after: string) => {
    const el = textareaRef.current;
    if (!el) return;

    const { nextValue, nextSelectionStart, nextSelectionEnd } = wrapSelection(
      el,
      before,
      after,
    );

    setValue(nextValue);

    requestAnimationFrame(() => {
      el.focus();
      el.selectionStart = nextSelectionStart;
      el.selectionEnd = nextSelectionEnd;
    });
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => applyWrap("**", "**")}
          className="inline-flex items-center justify-center h-9 px-3 rounded-lg border border-[var(--borderSoft)] bg-[var(--surface)] text-[12px] font-bold tracking-wide text-[var(--text-secondary)] hover:bg-[var(--surfaceAlt)] transition-colors"
          aria-label="Bold"
          title="Bold"
        >
          B
        </button>

        <button
          type="button"
          onClick={() => applyWrap("==", "==")}
          className="inline-flex items-center justify-center h-9 px-3 rounded-lg border border-[var(--borderSoft)] bg-[var(--surface)] text-[12px] font-bold tracking-wide text-[var(--text-secondary)] hover:bg-[var(--surfaceAlt)] transition-colors"
          aria-label="Highlight"
          title="Highlight"
        >
          Highlight
        </button>

        <div className="text-[12px] text-[var(--text-muted)] ml-auto">
          Bold: <span className="font-mono">**text**</span> · Highlight:{" "}
          <span className="font-mono">==text==</span>
        </div>
      </div>

      <textarea
        ref={textareaRef}
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={
          className ??
          "w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 py-3 rounded-xl text-[var(--text-primary)] placeholder:text-[var(--gray-400)] resize-y outline-none text-[14px] leading-[1.75]"
        }
      />
    </div>
  );
}
