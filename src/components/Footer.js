import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="py-5 bg-[#004953] justify-items-center sm:py-0 ">
        <div className=" w-4/5 py-2 sm:py-0 ">
          <div className="flex flex-wrap mt-5 sm:inline-block  ">
            <div className="flex  w-80 justify-center p-3 rounded-xl text-white bg-[#166671] sm:w-auto sm:p-2 sm:my-2 md:my-3 ">
              <div className="flex items-center mx-5 ">
                <i className="fa-solid fa-phone text-3xl"></i>
              </div>
              <div>
                <p>Phone Number</p>
                <p>+974 3118 1843</p>
              </div>
            </div>

            <div className="flex  w-80 justify-center p-3 rounded-xl mx-5 text-white bg-[#166671] sm:my-2 sm:w-auto md:my-3  ">
              <div className="flex items-center mx-5 text-3xl">
                {" "}
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p>Email Address</p>
                <p>Elbrithcqhr@gmail.com</p>
              </div>
            </div>

            <div className="flex  w-80 justify-center p-3 rounded-xl text-white bg-[#166671] sm:my-2 sm:w-auto md:my-3">
              <div className="flex items-center mx-5 text-3xl">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="mt-2">Ambassador Street, Zone 61,</div>
            </div>
          </div>
          <div className="flex py-5 items-center">
            <div className="flex ">
              <Image
                src={"/logo1.jpg"}
                alt="logo"
                width={150}
                height={150}
                placeholder="blur"
                blurDataURL="/logo-blur.jpg"
                className="w-72 h-20"
              />
            </div>
            <div className="mx-10 ">
              <p className="text-light-grey text-[10px] font-medium md:text-[15px]">
                Your health, physical and emotional well-being is important{" "}
              </p>
              <p className="text-light-grey text-[10px] font-medium  md:text-[15px]">
                to us. We are always by your side and have made it even{" "}
              </p>
              <p className="text-light-grey text-[10px] font-medium  md:text-[15px]">
                easier for you to find the necessary vitamins.
              </p>
            </div>
          </div>
          <div className="text-sm text-light-grey font-medium">
            <i className="fa-solid fa-location-dot text-sm"></i> &nbsp; Elbrit
            Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
