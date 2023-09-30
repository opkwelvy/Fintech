import React from 'react';
const generalStyle: React.CSSProperties = {
  color: 'var(--color-2)',
  padding: 'var(--gap-s) .75rem',
  backgroundColor: 'var(--color-4)',
  borderRadius: 'var(--gap)',
};
const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: 'bold',
  fontSize: '1rem',
  ...generalStyle,
};
const inputStyle: React.CSSProperties = {
  border: 'none',
  fontFamily: 'monospace',
  ...generalStyle,
};
type IDateInput = React.ComponentProps<'input'> & {
  label: string;
};

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input style={inputStyle} id={label} type="date" {...props} />
    </div>
  );
};

export default DateInput;
