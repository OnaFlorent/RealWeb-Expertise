import { Github, Linkedin, Paperclip } from "lucide-react";
import { Container } from "./Container";
import { ElipseBlueBur } from "./theme/Header";

export const Header = () => {
  return (
    <div className="border-b border-stroke-1">
      <Container className={"relative bg-n-9"}>
        <div className="relative z-10 flex items-center justify-between py-4 lg:py-6">
          <div className="flex items-center space-x-4">
            <h4 className="h4">RéalWeb Expertise</h4>
          </div>
          <div className="flex items-center space-x-4">
            <Linkedin width={20} height={20} alt="Linkedin"  className="cursor-pointer hover:text-p-3 animate" />
            <Github width={20} height={20} alt="Github"  className="cursor-pointer hover:text-p-3 animate" />
            <Paperclip width={20} height={20} alt="CV_download" className="cursor-pointer hover:text-p-3 animate" />
          </div>
        </div>
        <ElipseBlueBur />
      </Container>
    </div>
  );
};
