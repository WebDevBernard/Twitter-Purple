const Button = (props: any) => {
  return (
    <button
      type={props.type || "submit"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`text-white bg-violet-500 hover:bg-violet-600 dark:bg-violet-500 dark:hover:bg-violet-600 dark:focus:ring-purple-900 text-lg font-bold block select-none rounded-3xl duration-150 ease-out active:scale-95 active:shadow-sm ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
