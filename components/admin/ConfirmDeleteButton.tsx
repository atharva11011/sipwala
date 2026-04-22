"use client";

import { useFormStatus } from "react-dom";

type Props = {
  id: string;
  redirectTo: string;
  action: (formData: FormData) => void | Promise<void>;
  className?: string;
  confirmMessage?: string;
  icon?: string;
  children?: React.ReactNode;
};

function DeleteSubmitButton({
  className,
  confirmMessage,
  icon,
  children,
}: {
  className?: string;
  confirmMessage: string;
  icon: string;
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      onClick={(e) => {
        if (pending) return;
        const ok = window.confirm(confirmMessage);
        if (!ok) e.preventDefault();
      }}
      className={className}
    >
      <span className="material-symbols-outlined text-[16px]">{icon}</span>
      {children}
    </button>
  );
}

export default function ConfirmDeleteButton({
  id,
  redirectTo,
  action,
  className,
  confirmMessage = "Delete this blog post? This action can't be undone.",
  icon = "delete",
  children = "Delete",
}: Props) {
  return (
    <form action={action} className="inline-flex">
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="redirectTo" value={redirectTo} />
      <DeleteSubmitButton className={className} confirmMessage={confirmMessage} icon={icon}>
        {children}
      </DeleteSubmitButton>
    </form>
  );
}
