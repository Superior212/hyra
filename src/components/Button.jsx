import Image from "next/image";

const Button = ({ text, style,  image }) => {
  return (
    <>
      <button className={style}>
        {text}
        {image && <Image src={image} alt="Arrow" className="mr-2" />}
      </button>
    </>
  );
};

export default Button;
