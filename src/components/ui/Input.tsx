export function TextInput({
  label,
  type,
  name,
  value,
  onChange,
  required,
  step,
  placeholder,
  containerClass,
  labelClass,
  inputClass,
}: {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  step?: string;
  placeholder?: string;
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
}) {
  return (
    <div className={containerClass}>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        step={step}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
        required={required}
      />
    </div>
  );
}
