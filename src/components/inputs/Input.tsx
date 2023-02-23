interface IInput {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
  readOnly: boolean;
  value: string;
};

export const Input = ({ label, onChange, readOnly, value }: IInput) => {

  return(
    <div className="mt-4">
      <label
        htmlFor="inputHexValue"
        className="block text-md font-medium text-white text-left leading-8 mb-2"
      >
        {label}
      </label>
      <input
        type="text"
        name="inputHexValue"
        readOnly={readOnly}
        defaultValue={value}
        className="border border-gray-300 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
        onChange={onChange}
      />
    </div>
  );
};
