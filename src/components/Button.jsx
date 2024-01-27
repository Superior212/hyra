import Image from "next/image";

const Button = ({ text, style, image, onClick, type }) => {
  return (
    <>
      <button className={style} onClick={onClick} type={type}>
        {text}
        {image && <Image src={image} alt="Arrow" className="mr-2" />}
      </button>
    </>
  );
};

export default Button;
