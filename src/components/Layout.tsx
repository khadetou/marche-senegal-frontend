import Aos from "aos";
import { FC, useEffect } from "react";

interface LayoutProp {
  children: React.ReactNode;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

const Layout: FC<LayoutProp> = ({ children, isOpen, setIsOpen }) => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
