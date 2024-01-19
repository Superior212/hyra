import TeachingPage from "@/components/TeachingPage";
import allahnames from "../../../../assets/images/allahnames.png";

const NameOfAllah = () => {
  const articlesOfFaithStyles = {
    containerClass: "p-4 md:h-[75vh]",
    titleClass: "text-center text-[#FF7676] font-bold text-2xl",
    contentClass: "mt-4 mx-60 text-[#121214]",
    subtitleClass: "text-[#0802A3] font-semibold text-lg ",
    paragraphClass: "mt-2 md:mt-5 ",
    listClass: "list-inside list-decimal mt-4 pl-4",
    listItemClass: "mb-2",
    imageClass: "md:w-96 md:h-fit md:mx-0",
    imageContainer:
      "md:flex items-center justify-center md:p-20 p-10 md:mt-0 mt-5",
  };

  const articlesOfFaithProps = {
    mainTitle:"What are the 99 Names of Allah",
    title: "",
    imageSrc: allahnames,
    content:
      "The 99 Names of Allah, also known as Asma-ul-Husna (The Most Beautiful Names), are mentioned in various verses of the Quran. Each name reflects a different attribute or characteristic of Allah.",
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

export default NameOfAllah;
