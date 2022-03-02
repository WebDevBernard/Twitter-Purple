import Avatar from "./shared/Avatar";
const LoginButton = (props: any) => {
  return (
    <div className={`flex cursor-pointer ${props.className}`}>
      <Avatar className="h-12 w-12" />
      <div className="ml-4 hidden md:inline-block">
        <p className="font-bold text-purple-500">Bernard</p>
        <p>@WebDevBernard</p>
      </div>
    </div>
  );
};

export default LoginButton;
