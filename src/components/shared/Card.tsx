const Card = (props: any) => {
  return (
    <div className={`rounded-2xl ${props.className}`}>{props.children}</div>
  );
};

export default Card;
