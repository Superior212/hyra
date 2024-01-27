import Image from "next/image";

const TeachingPage = ({
  title,
  imageSrc,
  content,
  listItems,
  containerClass,
  titleClass,
  contentClass,
  subtitleClass,
  paragraphClass,
  listClass,
  listItemClass,
  imageClass,
  imageContainer,
  mainTitle,
  title2,
  imageSrc2,
  content2,
  listItems2,
  containerClass2,
  titleClass2,
  contentClass2,
  subtitleClass2,
  paragraphClass2,
  listClass2,
  listItemClass2,
  imageClass2,
  imageContainer2,
}) => {
  return (
    <div className={` ${containerClass}`}>
      <h1 className={`${titleClass}`}>{mainTitle}</h1>
      <div className={`${imageContainer}`} alt={title}>
        {imageSrc && (
          <div className="md:w-1/2 md:order-2">
            <Image src={imageSrc} className={`${imageClass}`} alt={title} />
          </div>
        )}
        <div
          className={`md:w-1/2 ${
            imageSrc ? "md:mx-40 mx-0" : "md:mx-52"
          } md:mt-0 mt-10 md:pb-12 pb-4 ${contentClass}`}>
          <div>
            <h2 className={` ${subtitleClass}`}>{title}</h2>
            <p className={`${paragraphClass}`}>{content}</p>
            {listItems && (
              <ol className={`${listClass}`}>
                {listItems.map((item, index) => (
                  <li key={index} className={`${listItemClass}`}>
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
      {/* section2 */}
      <div className={`${imageContainer2}`} alt={title2}>
        <div
          className={`md:w-1/2 ${
            imageSrc2 ? "md:mx-40 mx-0" : "md:mx-52"
          } md:mt-0 mt-10 pb-12 ${contentClass2}`}>
          <div>
            <h2 className={` ${subtitleClass2}`}>{title2}</h2>
            <p className={`${paragraphClass2}`}>{content2}</p>
            {listItems2 && (
              <ol className={`${listClass2}`}>
                {listItems2.map((item2, index2) => (
                  <li key={index2} className={`${listItemClass2}`}>
                    {item2}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
        {imageSrc2 && (
          <div className="md:w-1/2 md:order-2">
            <Image src={imageSrc2} className={`${imageClass2}`} alt={title2  } />
          </div>
        )}
      </div>
    </div>
  );
};

export default TeachingPage;
