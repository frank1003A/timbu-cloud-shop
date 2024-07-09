import clsx from "clsx";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Merriweather } from "next/font/google";
import Logo from "./Logo";
import { Button } from "./ui/button";

const merriWeather = Merriweather({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

const CustomLi = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="hover:text-wprimary hover:underline cursor-pointer">
      {children}
    </li>
  );
};
const Footer = () => {
  return (
    <footer className="w-full bg-wfooter ">
      <div className="grid  grid-cols-1 lg:grid-cols-4 gap-x-10 py-20 px-6 lg:px-[120px] justify-items-center items-center ">
        <div className="flex flex-col gap-5  items-left lg:items-start justify-center lg:justify-start col-span-1">
          <Logo hasText textClass="ml-0 text-[40px]" />
          <span className="text-[#9D9D9D] text-left lg:text-start">
            Glow with confidence, embrace your natural beauty. Discover the
            power of premium skincare with us.
          </span>
          <div className="flex gap-2">
            <Button
              variant={"outline"}
              className="w-[30px] h-[30px] bg-transparent rounded-full text-[#9D9D9D] hover:bg-wprimary hover:text-white p-1"
              size={"sm"}
            >
              <Facebook className="h-6 w-6" />
            </Button>
            <Button
              variant={"outline"}
              className="w-[30px] h-[30px] bg-transparent rounded-full text-[#9D9D9D] hover:bg-wprimary hover:text-white p-1"
              size={"sm"}
            >
              <Instagram className="h-6 w-6" />
            </Button>
            <Button
              variant={"outline"}
              className="w-[30px] h-[30px] bg-transparent rounded-full text-[#9D9D9D] hover:bg-wprimary hover:text-white p-1"
              size={"sm"}
            >
              <Twitter className="h-6 w-6 fill-inherit" />
            </Button>
            <Button
              variant={"outline"}
              className="w-[30px] h-[30px] bg-transparent rounded-full text-[#9D9D9D] hover:bg-wprimary hover:text-white p-1"
              size={"sm"}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col mt-10 lg:mt-0 gap-6 lg:gap-0 text-left lg:text-start lg:flex-row col-span-1 lg:col-span-3 w-full justify-evenly">
          <div
            className={clsx(
              merriWeather.className,
              "flex flex-col justify-start gap-4"
            )}
          >
            <h4 className="text-[#F0C0CD] font-semibold">Quick links</h4>
            <ul className="*:text-[#9D9D9D] *:font-normal *:text-[16px] flex flex-col gap-3">
              <CustomLi>Home</CustomLi>
              <CustomLi>About</CustomLi>
              <CustomLi>Appointment</CustomLi>
              <CustomLi>Blog</CustomLi>
              <CustomLi>Contact</CustomLi>
            </ul>
          </div>
          <div
            className={clsx(
              merriWeather.className,
              "flex flex-col justify-start gap-4"
            )}
          >
            <h4 className="text-[#F0C0CD] font-semibold">Company</h4>
            <ul className="*:text-[#9D9D9D] *:font-normal *:text-[16px] flex flex-col gap-3">
              <CustomLi>About</CustomLi>
              <CustomLi>Contact</CustomLi>
              <CustomLi>Careers</CustomLi>
              <CustomLi>Press</CustomLi>
            </ul>
          </div>
          <div
            className={clsx(
              merriWeather.className,
              "flex flex-col justify-start gap-4"
            )}
          >
            <h4 className="text-[#F0C0CD] font-semibold">Information</h4>
            <ul className="*:text-[#9D9D9D] *:font-normal *:text-[16px] flex flex-col gap-3">
              <CustomLi>Privacy</CustomLi>
              <CustomLi>Terms & Condition</CustomLi>
              <CustomLi>FAQ</CustomLi>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
