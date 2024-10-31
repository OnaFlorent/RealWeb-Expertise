import { Github, Linkedin, Paperclip } from "lucide-react";
import { Container } from "./Container";
import { ElipseBlueBur } from "./theme/Header";

export const Header = () => {
  return (
    <div className="border-b border-stroke-1">
      <Container className={"relative bg-n-9"}>
        <div className="relative z-10 flex items-center justify-between py-4 lg:py-6">
          <div className="flex items-center space-x-4">
            <h3 className="h3 relative after:bg-p-3 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-1000 cursor-pointer">RealWeb Studio</h3>
          </div>
          <div className="flex items-center space-x-4">
            <Linkedin width={25} height={25} alt="Linkedin"  className="cursor-pointer hover:text-p-3 animate" />
            <Github width={25} height={25} alt="Github"  className="cursor-pointer hover:text-p-3 animate" />
            <Paperclip width={25} height={25} alt="CV_download" className="cursor-pointer hover:text-p-3 animate" />
          </div>
        </div>
        <ElipseBlueBur />
      </Container>
    </div>
  );
};
