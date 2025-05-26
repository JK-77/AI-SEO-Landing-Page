import React from "react";

// Add className prop to Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button = ({ className = "", children, ...rest }: ButtonProps) => {
  return (
    <button
      className={`relative py-2 px-3 font-medium text-sm rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] ${className}`}
      {...rest}
    >
      <div className="absolute inset-0">
        <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="border rounded-lg border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7 )_inset] rounded-lg"></div>
      </div>
      <span>{children}</span>
    </button>
  );
};

export default Button;
