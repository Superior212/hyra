import Image from "next/image";

const ChooseUsCard = ({ imageUrl, title, description, id, style }) => {
  return (
    <div
      style={style}
      className="md:p-4 p-2 rounded-md mx-3  w-[170px] md:w-[200px] my-5">
      <Image
        className="w-[8rem] h-[6rem] mx-auto"
        src={imageUrl}
        alt={id}
        priority={false}
      />
      <p className="text-white  mt-4 mx-auto text-[16px]">{description}</p>
    </div>
  );
};

export default ChooseUsCard;
