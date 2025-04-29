type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

export function Button({ text, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "8px 16px",
        backgroundColor: disabled ? "#ccc" : "#007bff",
        cursor: disabled ? "not-allowed" : "pointer",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
      }}>
      {text}
    </button>
  );
}
