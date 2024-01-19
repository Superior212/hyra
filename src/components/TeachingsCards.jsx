import Image from "next/image";
import Link from "next/link";

const TeachingsCards = ({
  imageUrl,
  title,
  description,
  id,
  style,
  cta,
  titleStyle,
  desStyle,
  imgStyle,
  ctaHref,
}) => {
  return (
    <div
      style={style}
      className="md:p-4 p-2 rounded-md mx-3  w-[170px] md:w-[200px] my-5">
      <Image
        style={imgStyle}
        className="mx-auto w-[200px] mt-6"
        src={imageUrl}
        alt={id}
        priority={false}
      />
      <p className="mt-4 mx-4" style={titleStyle}>
        {title}
      </p>
      <p className=" mx-4" style={desStyle}>
        {description}
      </p>
      <div className="mt-2">
        <Link href={ctaHref ?? "/"} className="underline mx-4">
          {cta}
        </Link>
      </div>
    </div>
  );
};

export default TeachingsCards;
