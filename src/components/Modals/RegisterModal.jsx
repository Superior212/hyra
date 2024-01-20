import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Link from "next/link";
import regSuccess from "../../assets/images/regSuccess.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedTick from "./AnimatedTick";

const SuccessModal = ({ open, onClose }) => {
  const [resetAnimation, setResetAnimation] = useState(false);

  useEffect(() => {
    if (open) {
      setResetAnimation(true);
    }
  }, [open]);
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          onClose();
          setResetAnimation(false);
        }}
        center
        aria-labelledby="my-modal-title"
        styles={{ modal: { width: "100%", backgroundColor: "#F6F8FB" } }}>
        <div className="p-[80px]">
          <div className="flex justify-center items-center flex-col">
            <p className="p-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
                key={resetAnimation}>
                <AnimatedTick />
              </motion.div>
              <p className="font-bold mx-3 text-center">
                Registration Successful
              </p>
            </p>
            <Link
              href="/login"
              className="bg-[#FFCD4B] text-white p-2 px-12 rounded-md mt-[32px]">
              Log In
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default SuccessModal;
