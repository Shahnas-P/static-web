import AboutMedicine from "./AboutMedicine";
import Ingredient from "./Ingredient";
import Image from "next/image";
const MainContainer = () => {
  return (
    <>
      <div className="  h-full  ">
        <div className="flex justify-center  flex-wrap">
          <div className=" mx-14 w-screen h-[48rem] bg-[#dff1fd] sm:mx-2 sm:h-[58rem] md:mx-4 ">
            <div className="flex flex-col items-center  justify-center mt-10">
              <div>
                <h1 className="text-8xl text-regal-blue text-center font-bold sm:text-7xl sm:text-left ">
                  Essential Vitamins
                </h1>
              </div>

              <div className="flex  justify-between sm:flex-col ">
                <div className="mt-36 sm:mt-5">
                  <p className=" text-sm text-light-grey sm:text-base ">
                    Online Medical Supplies
                  </p>
                  <p className="text-[#004953] font-medium text-lg mt-2 sm:text-xl ">
                    Get Your Vitamins
                    <br />& Minerals
                  </p>
                  <button className="border border-[#004953] px-8 py-2 mt-2 text-xs text-white bg-[#004953] font-medium rounded-full">
                    Explore
                  </button>
                </div>
                <div className="mx-20 sm:mr-10 ">
                  <Image
                    src={"/medicine1.png"}
                    alt="no-image"
                    height={350}
                    width={300}
                    blurDataURL="/medicine1-blur.jpg"
                    placeholder="blur"
                  />
                </div>

                <div className="flex flex-col mt-12 sm:flex-row sm:mt-2">
                  <div className="flex items-center sm:flex-col sm:my-2  sm:justify-center">
                    <div className="flex items-center  text-white justify-center h-11 w-11  rounded-full  mr-2 bg-[#004953] sm:justify-self-start  ">
                      <i className="fa-solid fa-capsules"></i>
                    </div>
                    <div>
                      <p className="text-[#004953] font-semibold">Vitamins</p>
                      <p className=" text-sm text-light-grey ">
                        Increase Vitamins and <br /> minerals in your diet
                      </p>
                    </div>
                  </div>

                  <div className="flex my-5 sm:flex-col sm:my-2 sm:justify-center">
                    <div className="flex items-center  text-white justify-center h-11 w-11  rounded-full  mr-2 bg-[#004953]  ">
                      <i className="fa-solid fa-weight-scale"></i>
                    </div>
                    <div>
                      <p className="text-[#004953] font-semibold">
                        Weight Loss
                      </p>
                      <p className=" text-sm text-light-grey ">
                        Weight Loss
                        <br /> Find scientifically proven solutions
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:my-2 sm:justify-center">
                    <div className="flex items-center  text-white justify-center h-11 w-11  rounded-full  mr-2 bg-[#004953]">
                      <i className="fa-solid fa-jar-wheat"></i>
                    </div>
                    <div>
                      <p className="text-[#004953] font-semibold">
                        Functional Foods
                      </p>
                      <p className=" text-sm text-light-grey ">
                        Functional Foods <br /> From protein powers to baby
                        formula
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AboutMedicine />
        </div>
        <Ingredient />
      </div>
    </>
  );
};
export default MainContainer;
