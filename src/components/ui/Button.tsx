export function FormButton({
  children,
  type = "submit",
  className = "",
  title = "",
  onClick,
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  title?: string;
  onClick?: () => void;
}) {
  return (
    <button type={type} className={className} title={title} onClick={onClick}>
      {children}
    </button>
  );
}
