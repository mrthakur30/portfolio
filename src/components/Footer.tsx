import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center dark:text-gray-100 text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; Mukul Thakur.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion
      </p>
    </footer>
  );
}
