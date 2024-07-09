import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface Links {
  links: string[];
}
const Breadcrumb = ({ links }: Links) => {
  return (
    <div className="flex gap-3">
      <Button
        variant={"outline"}
        className="rounded-full hover:bg-inherit hover:text-wprimary  gap-3 px-4 py-2 bg-transparent text-[#BCBCBC] border border-[#BCBCBC]"
      >
        <ArrowRight />
        Home
      </Button>
      <Button
        variant={"outline"}
        className="rounded-full bg-wprimary text-white hover:bg-wprimary hover:text-white   gap-3 px-4 py-2  border border-[#BCBCBC]"
      >
        <ArrowRight />
        Cart
      </Button>
    </div>
  );
};

export default Breadcrumb;
