import React from 'react';

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
  imageUrl?: string;
}

const RadioBank: React.FC<RadioButtonProps> = ({ id, name, value, checked, onChange, label, imageUrl }) => (
  <label
    htmlFor={id}
    className="max-w-md flex justify-between items-center p-3 w-full shadow-lg bg-white border border-gray-200 rounded-xl text-sm focus:border-[#464BD8] focus:ring-[#464BD8] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
  >
    <div className="flex items-center">
      {imageUrl && <img src={imageUrl} alt={label} className="w-24 h-6 mr-3" />}
      <span className="text-sm text-gray-500 dark:text-neutral-400">{label}</span>
    </div>
    <input
      type="radio"
      name={name}
      value={value}
      id={id}
      checked={checked}
      onChange={() => onChange(value)}
      className="shrink-0 border-gray-200 rounded-full text-[#464BD8] focus:ring-[#464BD8] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#464BD8] dark:checked:border-[#464BD8] dark:focus:ring-offset-gray-800"
      style={{ width: '3rem' , height: '1.5rem' }}
    />
  </label>
);

export default RadioBank;
