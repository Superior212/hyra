import TeachingPage from "@/components/TeachingPage";
import prophets from "../../../../assets/images/prophets.png";
import prophets2 from "../../../../assets/images/prophets2.png";

const WhoAreTheProphets = () => {
  const articlesOfFaithStyles = {
    containerClass: "p-4 md:h-fit",
    titleClass: "text-center text-[#FF4B91] font-bold text-2xl",
    contentClass: "mt-4 mx-60 md:mx-10 lg:mx-20",
    contentClass2: "mt-4 mx-0 md:mx-10 lg:mx-20",
    subtitleClass2: "text-[#FF4B91] font-semibold text-lg ",
    paragraphClass: "mt-2 md:mt-5 ",
    paragraphClass2: "mt-2 md:mt-5 ",
    listClass: "list-inside list-decimal mt-4 pl-4",
    listItemClass: "mb-2",
    imageClass: "md:w-96 md:h-fit md:mx-0",
    imageClass2: "md:w-96 md:h-fit md:mx-0",
    imageContainer:
      "md:flex items-center justify-center md:p-20 p-8 md:mt-0 mt-5",
    imageContainer2:
      "md:flex items-center justify-center md:p-20 p-8 md:mt-0 mt-1 flex flex-col-reverse md:flex-row-reverse",
  };

  const articlesOfFaithProps = {
    mainTitle: "Who are the Prophets?",
    title2: "How do you show respect to the prophets?",
    imageSrc: prophets,
    imageSrc2: prophets2,
    content:
      "Prophets are special people chosen by Allah to guide and teach mankind. Each prophet faced challenges but stayed strong in their faith. They performed miracles as a sign of Allah's power. Prophets taught people to worship and obey Allah.",
    content2:
      "When the name of the Prophets is mentioned, we should say 'Allahi salatu wa salam,' meaning 'Peace and Blessings of Allah be upon him'.\nWhen the name of Prophet Muhammad is mentioned, we should say 'Sallallahu alayhi Wasallam,' meaning 'May the peace and blessings of Allah be upon him'.",
    // listItems: ["", "", "", ""],
    ...articlesOfFaithStyles,
  };

  return <TeachingPage {...articlesOfFaithProps} />;
};
export default WhoAreTheProphets;
