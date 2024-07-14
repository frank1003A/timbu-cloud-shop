"use client";
import SliderComponent from "@/components/Slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import useCartStore from "@/zustand/store/cart";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CheckoutPage = () => {
  const carts = useCartStore((state) => state.items);
  const images = carts.map((item) => item.image);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shipTo: "",
    paymentMethod: "option-one",
    cno: "",
    cn: "",
    ed: "",
    sc: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "cno" && (isNaN(Number(value)) || value.length > 12)) {
      return;
    }

    if (name === "sc") {
      if (!/^\d*$/.test(value) || value.length > 3) {
        return;
      }
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePaymentMethodChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, paymentMethod: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if any field is empty
    for (const key in formData) {
      if (!formData[key as keyof typeof formData]) {
        alert("Complete Form");
        return;
      }
    }
    router.push("/thank-you");
  };
  return (
    <main>
      <section className="px-2 lg:px-[120px] py-12">
        <div className="flex flex-wrap items-center gap-1 md:gap-3">
          <Link href={"/"}>
            <Button
              variant={"outline"}
              className="rounded-full hover:bg-inherit hover:text-wprimary  gap-3 px-4 py-2 bg-transparent text-[#BCBCBC] border border-[#BCBCBC]"
            >
              <ArrowLeft />
              Home
            </Button>
          </Link>
          <Link href={"/cart"}>
            <Button
              variant={"outline"}
              className="hidden md:flex rounded-full hover:bg-inherit hover:text-wprimary  gap-3 px-4 py-2 bg-transparent text-[#BCBCBC] border border-[#BCBCBC]"
            >
              <ArrowLeft />
              Cart
            </Button>
          </Link>
          <Button
            variant={"outline"}
            className="rounded-full bg-wprimary text-white hover:bg-wprimary hover:text-white   gap-3 px-4 py-2  border border-[#BCBCBC]"
          >
            <ArrowRight />
            Checkout
          </Button>
        </div>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-x-36 gap-4 mt-10">
          <div className="w-full  flex flex-col px-4 md:px-0">
            <form className="mt-16 flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3">
                <div className="relative group border-b-2 border-b-[#DBDBDB] focus-within:border-b-wprimary py-2 flex items-center gap-1 justify-start w-full">
                  <label className="text-[#8D8D8D]  w-20">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-transparent focus-visible:outline-none"
                  />
                </div>
                <div className="relative group border-b-2 border-b-[#DBDBDB] focus-within:border-b-wprimary py-2 flex items-center gap-1 justify-start w-full">
                  <label className="text-[#8D8D8D]  w-20">Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-transparent focus-visible:outline-none"
                  />
                </div>
                <div className="relative group border-b-2 border-b-[#DBDBDB] focus-within:border-b-wprimary py-2 flex items-center gap-1 justify-start w-full">
                  <label className="text-[#8D8D8D] w-20">Ship to</label>
                  <input
                    name="shipTo"
                    value={formData.shipTo}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-transparent focus-visible:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-5">
                <h1 className="text-[#383838]">
                  <strong>Payment Method</strong>
                </h1>
                <RadioGroup
                  defaultValue="option-one"
                  className="gap-5"
                  onValueChange={handlePaymentMethodChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      className="data-[state=checked]:bg-wprimary data-[state=checked]:text-wprimary"
                      value="option-one"
                      id="option-one"
                    />
                    <Label className="flex gap-2" htmlFor="option-one">
                      Credit Card{" "}
                      <svg
                        width="24"
                        height="16"
                        viewBox="0 0 24 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2452 13.8974H8.75391V2.10455H15.2452V13.8974Z"
                          fill="#FF5F00"
                        />
                        <path
                          d="M9.1698 7.99994C9.1698 5.6077 10.2778 3.47676 12.0033 2.1035C10.7415 1.09931 9.14905 0.499938 7.41839 0.499938C3.32122 0.499938 0 3.85775 0 7.99994C0 12.1421 3.32122 15.4999 7.41839 15.4999C9.14905 15.4999 10.7415 14.9006 12.0033 13.8964C10.2778 12.5231 9.1698 10.3922 9.1698 7.99994Z"
                          fill="#EB001B"
                        />
                        <path
                          d="M23.9999 7.99994C23.9999 12.1421 20.6786 15.4999 16.5815 15.4999C14.8508 15.4999 13.2584 14.9006 11.9961 13.8964C13.722 12.5231 14.8301 10.3922 14.8301 7.99994C14.8301 5.6077 13.722 3.47676 11.9961 2.1035C13.2584 1.09931 14.8508 0.499938 16.5815 0.499938C20.6786 0.499938 23.9999 3.85775 23.9999 7.99994Z"
                          fill="#F79E1B"
                        />
                      </svg>
                      <svg
                        width="38"
                        height="12"
                        viewBox="0 0 38 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4667 11.5354H13.3884L15.3138 0.499878H18.3919L16.4667 11.5354Z"
                          fill="#00579F"
                        />
                        <path
                          d="M27.6256 0.769813C27.0184 0.546525 26.0554 0.299988 24.8646 0.299988C21.8247 0.299988 19.684 1.80262 19.6709 3.95092C19.6457 5.53594 21.2036 6.41629 22.3688 6.94479C23.5597 7.48483 23.9645 7.83731 23.9645 8.31868C23.9524 9.05798 23.0022 9.39877 22.1159 9.39877C20.8869 9.39877 20.2284 9.22307 19.2277 8.81176L18.8224 8.63544L18.3916 11.1127C19.1136 11.4176 20.4437 11.6881 21.8247 11.7C25.0546 11.7 27.1574 10.2206 27.1823 7.93125C27.1946 6.675 26.372 5.71241 24.5985 4.92583C23.5218 4.4209 22.8625 4.08043 22.8625 3.5638C22.8751 3.09413 23.4201 2.61307 24.6355 2.61307C25.6362 2.58951 26.3715 2.81248 26.9285 3.03561L27.2069 3.1528L27.6256 0.769813Z"
                          fill="#00579F"
                        />
                        <path
                          d="M31.7169 7.62589C31.9704 6.99192 32.9459 4.53825 32.9459 4.53825C32.9331 4.56181 33.1989 3.89257 33.3509 3.48173L33.566 4.43261C33.566 4.43261 34.149 7.07415 34.2756 7.62589C33.7945 7.62589 32.3249 7.62589 31.7169 7.62589ZM35.5167 0.499878H33.1356C32.4014 0.499878 31.8435 0.699292 31.5267 1.4155L26.9543 11.5352H30.1843C30.1843 11.5352 30.716 10.1732 30.8303 9.87983C31.1847 9.87983 34.3267 9.87983 34.7826 9.87983C34.8709 10.2673 35.1499 11.5352 35.1499 11.5352H38L35.5167 0.499878Z"
                          fill="#00579F"
                        />
                        <path
                          d="M10.8173 0.499878L7.80262 8.02503L7.47319 6.49884C6.91585 4.73782 5.1679 2.8245 3.21729 1.87315L5.97858 11.5237H9.23376L14.0723 0.499878H10.8173Z"
                          fill="#00579F"
                        />
                        <path
                          d="M5.0033 0.499878H0.0506673L0 0.722853C3.86336 1.63863 6.42199 3.84607 7.47321 6.49931L6.39657 1.42751C6.21932 0.722697 5.6746 0.523127 5.0033 0.499878Z"
                          fill="#FAA61A"
                        />
                      </svg>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      className="data-[state=checked]:bg-wprimary data-[state=checked]:text-wprimary"
                      value="option-two"
                      id="option-two"
                    />
                    <Label className="flex gap-2" htmlFor="option-two">
                      <svg
                        width="46"
                        height="18"
                        viewBox="0 0 46 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.4378 8.79384V14.0701H19.7639V1.04012H24.2032C24.7331 1.02905 25.26 1.12303 25.7534 1.31664C26.2467 1.51025 26.6969 1.79965 27.0779 2.16814C27.4627 2.51426 27.7689 2.93874 27.976 3.41305C28.1831 3.88737 28.2863 4.40052 28.2787 4.91802C28.2897 5.43829 28.1881 5.95479 27.9808 6.43213C27.7735 6.90946 27.4655 7.33633 27.0779 7.68349C26.3016 8.42372 25.3434 8.79349 24.2032 8.7928H21.4378V8.79384ZM21.4378 2.6443V7.19278H24.2448C24.5525 7.2019 24.8588 7.14669 25.144 7.03069C25.4292 6.91468 25.687 6.74043 25.901 6.51908C26.1138 6.31213 26.2831 6.06459 26.3986 5.79111C26.5141 5.51762 26.5737 5.22375 26.5737 4.92686C26.5737 4.62997 26.5141 4.33609 26.3986 4.06261C26.2831 3.78913 26.1138 3.54159 25.901 3.33463C25.6897 3.10862 25.4327 2.9301 25.1472 2.81091C24.8617 2.69171 24.5541 2.63457 24.2448 2.64326H21.4378V2.6443Z"
                          fill="#CBCBCB"
                        />
                        <path
                          d="M32.1352 4.86395C33.3723 4.86395 34.3489 5.19456 35.0649 5.85578C35.7809 6.517 36.1385 7.42358 36.1378 8.57551V14.0701H34.5368V12.8329H34.464C33.7709 13.8517 32.8491 14.3612 31.6985 14.3612C30.7164 14.3612 29.8947 14.0701 29.2335 13.4879C28.9162 13.2206 28.6625 12.886 28.4909 12.5083C28.3193 12.1306 28.2342 11.7194 28.2417 11.3046C28.2417 10.3821 28.5903 9.64843 29.2876 9.10365C29.9848 8.55887 30.9157 8.28579 32.0801 8.28441C33.074 8.28441 33.8925 8.46635 34.5357 8.83022V8.44763C34.5376 8.16486 34.4766 7.88522 34.357 7.62897C34.2374 7.37273 34.0623 7.14631 33.8443 6.96613C33.4017 6.56678 32.8249 6.34887 32.2287 6.35585C31.2937 6.35585 30.5539 6.75023 30.0091 7.53898L28.5348 6.61057C29.3458 5.44616 30.5459 4.86395 32.1352 4.86395ZM29.9696 11.341C29.9684 11.554 30.0182 11.7642 30.1148 11.9541C30.2114 12.144 30.3519 12.308 30.5247 12.4326C30.8949 12.7238 31.3544 12.8781 31.8253 12.8693C32.5317 12.8681 33.2087 12.5869 33.7082 12.0875C34.2626 11.5655 34.5399 10.9532 34.5399 10.2504C34.018 9.83453 33.2902 9.6266 32.3566 9.6266C31.6767 9.6266 31.1097 9.79051 30.6557 10.1184C30.1973 10.451 29.9696 10.8555 29.9696 11.341Z"
                          fill="#CBCBCB"
                        />
                        <path
                          d="M45.3283 5.15515L39.7391 18H38.0112L40.0853 13.5056L36.4102 5.15515H38.2295L40.8859 11.5594H40.9222L43.5058 5.15515H45.3283Z"
                          fill="#CBCBCB"
                        />
                        <path
                          d="M14.6735 7.65639C14.6741 7.14628 14.631 6.63707 14.5446 6.13434H7.48535V9.01729H11.5286C11.4458 9.47774 11.2707 9.91667 11.0138 10.3076C10.7568 10.6986 10.4234 11.0334 10.0335 11.292V13.1634H12.4466C13.8595 11.8607 14.6735 9.93426 14.6735 7.65639Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M7.48569 14.9715C9.50573 14.9715 11.2066 14.3082 12.4469 13.1646L10.0339 11.2932C9.36226 11.7486 8.49727 12.0085 7.48569 12.0085C5.53322 12.0085 3.87602 10.6923 3.28341 8.91864H0.797607V10.8472C1.42064 12.087 2.37598 13.1292 3.55699 13.8574C4.738 14.5857 6.09818 14.9714 7.48569 14.9715Z"
                          fill="#34A853"
                        />
                        <path
                          d="M3.28288 8.91877C2.96959 7.98937 2.96959 6.98289 3.28288 6.05349V4.12494H0.797071C0.272958 5.16787 0 6.31891 0 7.48613C0 8.65335 0.272958 9.80439 0.797071 10.8473L3.28288 8.91877Z"
                          fill="#FBBC04"
                        />
                        <path
                          d="M7.48569 2.9635C8.55319 2.94606 9.58468 3.34939 10.3572 4.08632L12.4937 1.94984C11.1389 0.677383 9.34419 -0.0212158 7.48569 0.000491118C6.09818 0.000554355 4.738 0.386259 3.55699 1.11454C2.37598 1.84283 1.42064 2.88503 0.797607 4.12479L3.28341 6.05334C3.87602 4.2797 5.53322 2.9635 7.48569 2.9635Z"
                          fill="#EA4335"
                        />
                      </svg>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      className="data-[state=checked]:bg-wprimary data-[state=checked]:text-wprimary"
                      value="option-three"
                      id="option-three"
                    />
                    <Label className="flex gap-2" htmlFor="option-three">
                      <svg
                        width="98"
                        height="19"
                        viewBox="0 0 98 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.0579 1.52832H29.0958C28.7562 1.52832 28.4674 1.77501 28.4145 2.11022L26.4076 14.8345C26.3676 15.0855 26.5621 15.3119 26.8168 15.3119H29.1857C29.5253 15.3119 29.8141 15.0652 29.867 14.7293L30.4083 11.2973C30.4606 10.9614 30.7501 10.7147 31.0889 10.7147H32.6597C35.9284 10.7147 37.8149 9.13297 38.3075 5.99853C38.5296 4.62721 38.317 3.54974 37.6749 2.79516C36.9696 1.96656 35.7187 1.52832 34.0579 1.52832ZM34.6304 6.17557C34.359 7.9561 32.9986 7.9561 31.6831 7.9561H30.9344L31.4597 4.63084C31.4909 4.42985 31.665 4.28184 31.8682 4.28184H32.2113C33.1074 4.28184 33.9527 4.28184 34.3895 4.79264C34.65 5.09738 34.7298 5.55013 34.6304 6.17557Z"
                          fill="#253B80"
                        />
                        <path
                          d="M48.8913 6.11703H46.5151C46.3127 6.11703 46.1378 6.26504 46.1066 6.46603L46.0014 7.13064L45.8352 6.88976C45.3208 6.14315 44.1737 5.89355 43.0288 5.89355C40.4029 5.89355 38.1602 7.88233 37.7234 10.6721C37.4963 12.0638 37.8192 13.3944 38.6086 14.3224C39.3327 15.1757 40.3688 15.5312 41.6016 15.5312C43.7173 15.5312 44.8906 14.1708 44.8906 14.1708L44.7846 14.8311C44.7447 15.0836 44.9392 15.3099 45.1924 15.3099H47.3328C47.6731 15.3099 47.9604 15.0632 48.0141 14.7273L49.2984 6.59445C49.339 6.34413 49.1453 6.11703 48.8913 6.11703ZM45.5791 10.7418C45.3498 12.0993 44.2724 13.0106 42.8982 13.0106C42.2081 13.0106 41.6567 12.7893 41.3026 12.3699C40.9515 11.9535 40.818 11.3607 40.9297 10.7004C41.1437 9.3545 42.2393 8.41344 43.5925 8.41344C44.2673 8.41344 44.8158 8.63764 45.1772 9.06065C45.5392 9.488 45.6829 10.0844 45.5791 10.7418Z"
                          fill="#253B80"
                        />
                        <path
                          d="M61.5457 6.11719H59.1579C58.9301 6.11719 58.716 6.23038 58.5869 6.41975L55.2935 11.2709L53.8976 6.60912C53.8098 6.31744 53.5406 6.11719 53.2358 6.11719H50.8894C50.6042 6.11719 50.4061 6.39581 50.4968 6.66426L53.127 14.3828L50.6543 17.8735C50.4598 18.1485 50.6557 18.5265 50.9917 18.5265H53.3766C53.603 18.5265 53.8148 18.4162 53.9433 18.2305L61.8853 6.76657C62.0754 6.49231 61.8802 6.11719 61.5457 6.11719Z"
                          fill="#253B80"
                        />
                        <path
                          d="M69.4505 1.52734H64.4876C64.1488 1.52734 63.86 1.77404 63.807 2.10925L61.8001 14.8335C61.7602 15.0845 61.9547 15.3109 62.2079 15.3109H64.7546C64.9912 15.3109 65.1936 15.1382 65.2306 14.9031L65.8002 11.2964C65.8524 10.9604 66.1419 10.7137 66.4808 10.7137H68.0509C71.3203 10.7137 73.206 9.13199 73.6994 5.99755C73.9221 4.62623 73.7081 3.54877 73.066 2.79418C72.3615 1.96558 71.1113 1.52734 69.4505 1.52734ZM70.023 6.17459C69.7523 7.95513 68.3919 7.95512 67.0757 7.95512H66.3277L66.8537 4.62986C66.8849 4.42888 67.0576 4.28086 67.2615 4.28086H67.6047C68.5 4.28086 69.346 4.28086 69.7828 4.79166C70.0433 5.0964 70.1224 5.54915 70.023 6.17459Z"
                          fill="#179BD7"
                        />
                        <path
                          d="M84.2847 6.11703H81.9099C81.7061 6.11703 81.5326 6.26504 81.5022 6.46603L81.397 7.13064L81.2301 6.88976C80.7157 6.14315 79.5693 5.89355 78.4243 5.89355C75.7985 5.89355 73.5565 7.88233 73.1197 10.6721C72.8933 12.0638 73.2148 13.3944 74.0042 14.3224C74.7297 15.1757 75.7644 15.5312 76.9971 15.5312C79.1129 15.5312 80.2861 14.1708 80.2861 14.1708L80.1802 14.8311C80.1403 15.0836 80.3347 15.3099 80.5894 15.3099H82.7291C83.0679 15.3099 83.3567 15.0632 83.4097 14.7273L84.6947 6.59445C84.7338 6.34413 84.5394 6.11703 84.2847 6.11703ZM80.9725 10.7418C80.7447 12.0993 79.6658 13.0106 78.2915 13.0106C77.603 13.0106 77.0501 12.7893 76.696 12.3699C76.3448 11.9535 76.2128 11.3607 76.3231 10.7004C76.5386 9.3545 77.6327 8.41344 78.9859 8.41344C79.6607 8.41344 80.2092 8.63764 80.5705 9.06065C80.9341 9.488 81.0777 10.0844 80.9725 10.7418Z"
                          fill="#179BD7"
                        />
                        <path
                          d="M87.0851 1.87609L85.0484 14.8332C85.0085 15.0843 85.203 15.3107 85.4562 15.3107H87.5037C87.844 15.3107 88.1328 15.064 88.185 14.728L90.1934 2.00451C90.2333 1.75347 90.0389 1.52637 89.7856 1.52637H87.4929C87.2904 1.52709 87.1163 1.67511 87.0851 1.87609Z"
                          fill="#179BD7"
                        />
                        <path
                          d="M5.30709 18.1042L5.62402 16.1227L4.91804 16.1066H1.54688L3.88966 1.48505C3.89693 1.44091 3.92057 1.39976 3.95511 1.37053C3.98965 1.3413 4.03389 1.3252 4.07994 1.3252H9.7642C11.6513 1.3252 12.9536 1.71172 13.6335 2.47461C13.9522 2.8325 14.1553 3.2065 14.2534 3.61807C14.3564 4.04992 14.3583 4.56588 14.2577 5.19517L14.2504 5.2411V5.64432L14.5692 5.82207C14.8376 5.96224 15.0509 6.12269 15.2145 6.30641C15.4872 6.61241 15.6636 7.00131 15.7381 7.46239C15.8151 7.93659 15.7896 8.50087 15.6636 9.1397C15.5181 9.87456 15.283 10.5146 14.9655 11.0383C14.6734 11.5209 14.3013 11.9211 13.8595 12.2313C13.4378 12.5259 12.9366 12.7496 12.37 12.8928C11.821 13.0335 11.195 13.1045 10.5084 13.1045H10.066C9.74965 13.1045 9.44241 13.2166 9.20123 13.4177C8.95943 13.6229 8.79945 13.9032 8.75037 14.2098L8.71704 14.3881L8.15709 17.8805L8.13164 18.0088C8.12498 18.0493 8.11346 18.0696 8.09649 18.0833C8.08134 18.0959 8.05953 18.1042 8.03832 18.1042H5.30709Z"
                          fill="#253B80"
                        />
                        <path
                          d="M14.8712 5.28705C14.8542 5.39382 14.8348 5.50297 14.813 5.61511C14.0634 9.40337 11.4988 10.712 8.22342 10.712H6.55571C6.15515 10.712 5.81761 10.9984 5.75519 11.3873L4.90134 16.7174L4.65955 18.2283C4.61895 18.4836 4.81893 18.7138 5.08072 18.7138H8.03859C8.38886 18.7138 8.6864 18.4633 8.74155 18.1233L8.77063 17.9754L9.32755 14.4967L9.3633 14.3058C9.41784 13.9647 9.71599 13.7141 10.0663 13.7141H10.5086C13.3744 13.7141 15.6178 12.5689 16.2735 9.25484C16.5474 7.87041 16.4056 6.71443 15.6808 5.90142C15.4615 5.65627 15.1894 5.45287 14.8712 5.28705Z"
                          fill="#179BD7"
                        />
                        <path
                          d="M14.0877 4.97968C13.9732 4.94688 13.855 4.91705 13.7338 4.89021C13.612 4.86396 13.4872 4.8407 13.3587 4.82042C12.9091 4.74884 12.4164 4.71484 11.8886 4.71484H7.43326C7.32357 4.71484 7.21934 4.7393 7.12602 4.78344C6.92059 4.88067 6.76788 5.07214 6.73091 5.30655L5.78313 11.2153L5.75586 11.3877C5.81828 10.9988 6.15582 10.7125 6.55638 10.7125H8.22409C11.4995 10.7125 14.0641 9.40319 14.8137 5.61553C14.8361 5.50339 14.8549 5.39424 14.8719 5.28747C14.6822 5.18845 14.4768 5.10375 14.2556 5.03158C14.201 5.01368 14.1447 4.99638 14.0877 4.97968Z"
                          fill="#222D65"
                        />
                        <path
                          d="M6.73035 5.30618C6.76731 5.07176 6.92003 4.88029 7.12546 4.78366C7.21939 4.73952 7.32301 4.71506 7.4327 4.71506H11.888C12.4158 4.71506 12.9085 4.74906 13.3581 4.82064C13.4866 4.84092 13.6114 4.86418 13.7333 4.89043C13.8545 4.91727 13.9726 4.94709 14.0872 4.9799C14.1441 4.9966 14.2005 5.0139 14.2556 5.0312C14.4768 5.10337 14.6822 5.18867 14.8719 5.28709C15.0949 3.88715 14.8701 2.93397 14.1011 2.07086C13.2533 1.12067 11.7232 0.713867 9.76518 0.713867H4.08093C3.68097 0.713867 3.33979 1.00018 3.27798 1.38968L0.91035 16.1615C0.863688 16.4538 1.09276 16.7175 1.39212 16.7175H4.90145L5.78257 11.2149L6.73035 5.30618Z"
                          fill="#253B80"
                        />
                      </svg>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <h1 className="text-[#383838]">
                  <strong>Payment Details</strong>
                </h1>
              </div>

              <div className="flex flex-col gap-4 mt-5">
                <Input
                  type="number"
                  placeholder="Card Number"
                  name="cno"
                  value={formData.cno}
                  onChange={handleInputChange}
                  className="bg-transparent border border-[#DBDBDB] focus-visible:ring-2 focus-visible:ring-wprimary"
                />
                <Input
                  placeholder="Card Name"
                  name="cn"
                  value={formData.cn}
                  onChange={handleInputChange}
                  className="bg-transparent border border-[#DBDBDB] focus-visible:ring-2 focus-visible:ring-wprimary"
                />

                <div className="flex gap-2">
                  <Input
                    name="ed"
                    type="date"
                    placeholder="expiration date (MM/YY)"
                    value={formData.ed}
                    onChange={handleInputChange}
                    className="bg-transparent border border-[#DBDBDB] focus-visible:ring-2 focus-visible:ring-wprimary"
                  />
                  <Input
                    name="sc"
                    type="number"
                    maxLength={2}
                    placeholder="Security code"
                    value={formData.sc}
                    onChange={handleInputChange}
                    className="bg-transparent border border-[#DBDBDB] focus-visible:ring-2 focus-visible:ring-wprimary"
                  />
                </div>
              </div>

              <div className="flex py-5 gap-5">
                <Button
                  type="submit"
                  className="bg-wprimary transition-all hover:bg-wprimary hover:scale-105 w-full"
                >
                  Pay Now
                </Button>
                <Button
                  variant={"outline"}
                  className="bg-transparent transition-all hover:bg-transparent hover:scale-105 w-full"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
          <div className="w-full pl-0 flex flex-col ">
            <h1 className="mb-4 text-center text-lg font-medium">
              Confirm Order Details
            </h1>
            <div className="bg-[#F2E5D7] flex flex-col rounded-xl h-full w-full px-5 py-7">
              <div className="flex items-center w-full">
                <SliderComponent images={images} />
              </div>
              <div className="flex flex-col  mt-auto">
                <div className="flex flex-col my-5 gap-2">
                  <div className="w-full flex items-center justify-between">
                    <span>Sub Total</span>
                    <span>£590</span>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <span>Shipping</span>
                    <span>£20</span>
                  </div>
                </div>
                <Separator className="bg-[#BCBCBC]" />
                <div className="w-full flex mt-8 items-center justify-between">
                  <span>
                    <strong>Total</strong>
                  </span>
                  <span>
                    <strong>£610</strong>
                  </span>
                </div>
                <Separator className="bg-[#BCBCBC] my-3" />
              </div>
            </div>
          </div>
        </main>
      </section>
    </main>
  );
};
//
export default CheckoutPage;
