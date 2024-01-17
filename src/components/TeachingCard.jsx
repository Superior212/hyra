const TeachingCard = ({ title, style, textStyle }) => {
  return (
    <div>
      <div className={style}>
        <h1 className={textStyle}>{title}</h1>
      </div>
    </div>
  );
};

export default TeachingCard;
