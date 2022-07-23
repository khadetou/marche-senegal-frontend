import React, {
  FC,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalInterface {
  children: any;
  ref: any;
}

const Modal: FC<ModalInterface> = forwardRef(({ children }, ref) => {
  const [open, setOpen] = useState(true);
  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    };
  });
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
            onClick={() => setOpen(false)}
            className="modal-backdrop -z-10 fixed h-screen w-screen top-0 left-0 bg-[#00000060]"
          ></motion.div>

          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.3,
              },
            }}
            className="modal-content-wrapper fixed w-[300px] h-[300px] bg-white m-auto top-0 bottom-0 left-0 right-0 p-[50px]"
          >
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                },
              }}
              exit={{
                x: 100,
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              onClick={() => setOpen(false)}
              className="modal-content"
            >
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

const modal = () => {
  const modalRef = useRef<any>();
  return (
    <div className="relative">
      <button onClick={() => modalRef.current!.open()}>Open Modal</button>
      <Modal ref={modalRef}>Hello world!</Modal>
    </div>
  );
};

export default modal;
