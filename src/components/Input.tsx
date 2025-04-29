type InputProps = {
  value: string;
  placeHolder?: string;
  type?: string;

  errorMsg: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  value,
  onChange,
  placeHolder,
  type = "text",

  errorMsg,
}: InputProps) {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        type={type}
        style={{
          padding: "8px 16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
        }}
      />
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
    </>
  );
}
