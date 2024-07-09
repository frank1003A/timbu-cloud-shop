import clsx from "clsx";
import { Merriweather } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const merriWeather = Merriweather({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

interface LogoProps extends React.ComponentPropsWithoutRef<"div"> {
  hasText?: boolean;
  textClass?: string;
}
const Logo = ({ hasText, textClass }: LogoProps) => {
  return (
    <Link href={"/"}>
      <div className={clsx(hasText && "flex items-center justify-start gap-3")}>
        <Image
          src={"/assets/logo.png"}
          alt="willowsage_logo"
          width={50}
          height={50}
        />
        {hasText && (
          <span
            className={clsx(
              merriWeather.className,
              textClass,
              "font-bold text-4xl text-wprimary"
            )}
          >
            illowsage
          </span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
