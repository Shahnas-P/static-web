import { iconsCardDetails } from "@/utils/iconsCardDetails";
const AboutMedicine = () => {
  return (
    <>
      <div className="w-[55rem] h-[22rem] -mt-40 bg-[#004953] rounded-3xl justify-center sm:-mt-20 sm:w-screen sm:h-[29rem] ">
        <div className="flex flex-wrap justify-center -mt-20 sm:-mt-8  ">
          {iconsCardDetails.map((item) => (
            <div className="m-10 flex items-center flex-col sm:m-0 sm:mr-3 sm:my-2">
              <div className="h-20 w-20 bg-white text-[#004953] rounded-full flex items-center justify-center p-5 sm:p-0 sm:px-4 ">
                {item.icone}
              </div>
              <div className="flex flex-col items-center">
                <p className="text-base text-white my-1 ">{item.title}</p>
                <p className="text-white  text-[10px] font-light">
                  {item.descriptionp1}
                </p>
                <p className="text-white  text-[10px] font-light">
                  {item.descriptionp2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default AboutMedicine;
