import Image from "next/image";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";
import about4 from "../../assets/images/about4.png";
import playstore from "../../assets/images/playstore.png";

const About = () => {
  return (
    <div>
      {/* section 1 */}
      <section className="md:flex items-center justify-center mb-8 p-8">
        {/* Image */}
        <div className="md:w-1/2 md:mt-8 mt-4 md:flex md:items-center md:justify-center md:order-2">
          <Image src={about1} className="md:w-[30rem] md:mr-36" alt="" />
        </div>

        {/* Content */}
        <div className="md:w-1/2 md:mx-36 md:order-1">
          <h1 className="font-[700] mt-5 text-[20px] md:text-[30px] md:mr-[18rem] md:mb-4 mb-2 text-center md:text-left">
            Hyra Islamic Stories for Kids
          </h1>
          <p className="md:text-[20px] md:mr-[13rem] md:mt-8 mt-4 px-8 md:px-0 text-center md:text-left">
            Hyra Islamic Stories for Kids is an engaging and interactive
            Educational app designed to introduce Islamic teachings to children.
          </p>
        </div>
      </section>

      {/* secction 2 */}

      <section className="bg-[#0802A3CC] md:flex items-center justify-center text-white p-8">
        <div className="md:w-1/2">
          <Image src={about2} className="md:w-[25rem] md:ml-36" alt="" />
        </div>

        <div className="md:w-1/2 md:mx-36 mt-8 md:mt-0">
          <p className="md:text-[20px] md:ml-40 md:mr-[5rem]">
            It has been observed that some children lack proper fundamentals of
            Islamic teachings. Hyra is introduced to help kids know about the
            Islamic Teachings.
          </p>
        </div>
      </section>

      {/* section 3 */}

      <section className="md:flex items-center justify-center mb-8 p-8">
        {/* Image */}
        <div className="md:w-1/2 md:mt-8 mt-4 md:flex md:items-center md:justify-center md:order-2">
          <Image
            src={about3}
            className="md:w-[30rem] w-[25rem] md:mr-36"
            alt=""
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 md:mx-36 md:order-1 mt-8 md:mt-0">
          <p className="md:text-[20px] md:mr-[13rem] md:mt-8 mt-4 px-8 md:px-0 text-center md:text-left">
            The target audience for this app is kids between the ages of 7-12
          </p>
        </div>
      </section>

      {/* section 4 */}

      <section className="bg-[#FF4B91] md:flex items-center justify-center text-white p-8">
        <div className="md:w-1/2">
          <Image src={about4} className="md:w-[25rem] md:ml-36" alt="" />
        </div>

        <div className="md:w-1/2 md:mx-36 mt-8 md:mt-0">
          <p className="md:text-[20px] md:ml-40 md:mr-[5rem]">
            The app combines Islamic teaching, Stories of the Prophet, Stories
            of the Companion, Du’a, quizzes and interactive activities to make
            learning about Islam enjoyable and fun for young mind
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center p-10">
        <Image src={playstore} className="md:w-[17rem] w-[12rem]" />
      </section>
    </div>
  );
};

export default About;
