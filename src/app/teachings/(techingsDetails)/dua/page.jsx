import TeachingPage from "@/components/TeachingPage";
import dua from "../../../../assets/images/dua.png";
const Dua = () => {
  const articlesOfFaithStyles = {
    containerClass: "p-4 md:h-[75vh]",
    titleClass: "text-center text-[#0802A3] font-bold text-2xl",
    contentClass: "md:mt-4 md:mx-60 text-[#121214]",
    subtitleClass: "text-[#0802A3] font-semibold text-lg ",
    paragraphClass: "mt-2 md:mt-5 ",
    listClass: "list-inside list-decimal mt-4 pl-4",
    listItemClass: "mb-2",
    imageClass: "md:w-96 md:h-fit md:mx-0",
    imageContainer:
      "md:flex items-center justify-center md:p-20 p-10 md:mt-0 mt-5",
  };

  const articlesOfFaithProps = {
    mainTitle: "Du’a",
    title: "",
    imageSrc: dua,
    content:
      "Du’a refers to the act of calling upon or praying to a Allah. It is also a means of seeking  Allah’s  guidance, protection, or blessings",
    listItems: [
      // "Belief in the Oneness of Allah",
      // "Belief in the Angels",
      // "Belief in the Prophets",
      // "Belief in the Holy Book",
      // "Belief in the Day of Judgement",
      // "Belief in Destiny (Qadar)",
    ],
    ...articlesOfFaithStyles,
  };

  return <TeachingPage {...articlesOfFaithProps} />;
};

export default Dua;
