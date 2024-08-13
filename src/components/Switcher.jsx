import { useState } from "react";

const Switcher = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="themeSwitcherThree relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <div className="shadow-card flex h-[46px] w-[82px] items-center justify-center rounded-md bg-white">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded ${
              !isChecked ? "bg-primary text-white" : "text-body-color"
            }`}
          >
            F
          </span>
          <span
            className={`flex h-9 w-9 items-center justify-center rounded ${
              isChecked ? "bg-primary text-white" : "text-body-color"
            }`}
          >
            C
          </span>
        </div>
      </label>
    </>
  );
};

export default Switcher;
