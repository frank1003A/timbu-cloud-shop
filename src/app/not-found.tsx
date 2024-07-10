import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function custom404() {
  return (
    <div className="w-full h-full bg-wsecondary flex flex-col gap-5 items-center justify-center py-20 px-[150px]">
      <h2 className="text-2xl font-bold text-center text-wprimary">
        404 - Page Not FOund
      </h2>
      <Link href={"/"}>
        <Button className="bg-wprimary hover:bg-wprimary text-white hover:text-white">
          Try again
        </Button>
      </Link>
    </div>
  );
}
