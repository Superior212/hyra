import Image from "next/image";
import Link from "next/link";

const ChooseUsCard = ({
  imageUrl,
  title,
  description,
  id,
  style,
  cta,
  titleStyle,
  desStyle,
  imgStyle,
}) => {
  return (
    <div
      style={style}
      className="md:p-4 p-2 rounded-md mx-3  w-[170px] md:w-[200px] my-5">
      <Image
        style={imgStyle}
        className="mx-auto"
        src={imageUrl}
        alt={id}
        priority={false}
      />
      <p style={titleStyle}>{title}</p>
      <p style={desStyle}>{description}</p>
      <Link href="/" className="">
        {cta}
      </Link>
    </div>
  );
};

export default ChooseUsCard;
