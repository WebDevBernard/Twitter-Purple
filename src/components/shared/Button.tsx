import { FC } from "react";

interface IProps {
  type?: "submit";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: FC<IProps> = (props) => {
  return (
    <button
      type={props.type || "submit"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`text-white disabled:bg-violet-200 disabled:hover:bg-violet-200 disabled:active:scale-100 bg-violet-500 hover:bg-violet-600 dark:bg-violet-500 dark:hover:bg-violet-600 dark:focus:ring-purple-900 text-lg font-bold block select-none duration-150 ease-out active:scale-95 active:shadow-sm ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
