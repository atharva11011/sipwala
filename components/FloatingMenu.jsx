"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { openWhatsAppLead } from "@/lib/whatsapp";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      key: "whatsapp",
      label: "WhatsApp",
      Icon: FaWhatsapp,
      // onClick will call the shared helper to open WhatsApp with a prefilled lead message.
      onClick: () =>
        openWhatsAppLead({
          name: "",
          email: "",
          phone: "",
          interest: "Website Enquiry",
          message: "",
        }),
      color: "bg-[var(--green-500)]",
    },
    {
      key: "contact",
      label: "Contact",
      Icon: FiMail,
      href: "/contact",
      external: false,
      color: "bg-[var(--blue-600)]",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div className="flex flex-col gap-3 mb-2">
            {actions.map((action, index) => {
              const commonProps = {
                key: action.key,
                initial: { opacity: 0, y: 20, scale: 0 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, y: 20, scale: 0 },
                transition: { delay: index * 0.05 },
                className: `${action.color} w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg hover:scale-110 transition-transform`,
                "aria-label": action.label,
              };

              if (action.onClick) {
                return (
                  <motion.button
                    {...commonProps}
                    type="button"
                    onClick={() => {
                      action.onClick();
                      setIsOpen(false);
                    }}
                  >
                    <action.Icon size={18} />
                  </motion.button>
                );
              }

              return (
                <motion.a
                  {...commonProps}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                >
                  <action.Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen((s) => !s)}
        className="bg-[var(--blue-700)] text-[var(--text-white)] w-12 h-12 flex items-center justify-center rounded-full shadow-2xl hover:scale-105 transition-transform"
        aria-label="Toggle contact menu"
      >
        {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
      </button>
    </div>
  );
}