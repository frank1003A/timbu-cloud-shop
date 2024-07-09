import HomeComponent from "@/components/page/home";

const Section = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};
export default function Home() {
  return <HomeComponent />;
}
