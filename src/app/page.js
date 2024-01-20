"use client"
import GetStarted from "@/components/GetStarted";
import SuccessModal from "@/components/Modals/RegisterModal";
import Slider from "@/components/Slider";
import Teachings from "@/components/Teachings";
import WhyUs from "@/components/WhyUs";
import { useState } from "react";


export default function Home() {
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const handleOpenModal = () => {
    setSuccessModalOpen(true);
  };
  return (

    <>
      {/* <button onClick={handleOpenModal}>Open Modal</button> */}

      <Slider />
      <WhyUs />
      <Teachings />
      <GetStarted />
      {successModalOpen && (
        <SuccessModal
          open={successModalOpen}
          onClose={() => setSuccessModalOpen(false)}
          center
          // closeIcon={closeIcon} // Make sure closeIcon is defined
          aria-labelledby="success-modal-title"
          styles={{ modal: { width: '100%', backgroundColor: '#F6F8FB' } }}
        />
      )}
    </>
  )
}
