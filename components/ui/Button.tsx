type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
  };
  
  export default function Button({
    children,
    variant = "primary",
  }: ButtonProps) {
    return (
      <button
        className={
          variant === "primary"
            ? "rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
            : "rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
        }
      >
        {children}
      </button>
    );
  }