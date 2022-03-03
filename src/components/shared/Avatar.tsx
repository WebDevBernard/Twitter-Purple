const Avatar = (props: any) => {
  return (
    <img
      loading="lazy"
      className={` border-border border-2 p-1.5 rounded-full ${props.className}`}
      src={props.avatar}
      alt="avatar"
    />
  );
};

export default Avatar;
