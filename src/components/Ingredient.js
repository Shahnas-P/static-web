import MedicineCard from "./MedicineCard";
import { ingredientsDetails } from "@/utils/ingredientDetails";
const Ingredient = () => {
  return (
    <>
      <div>
        <div className="flex flex-wrap justify-self-center mt-16 mb-3 justify-center w-[59rem] h-[24rem]  sm:mt-0 sm:w-[24rem] sm:h-auto md:mb-20 ">
          <div className="ml-2 sm:ml-0 ">
            <div>
              <p className="text-regal-blue text-xs font-semibold sm:mt-10 ">
                INGREDIENTS
              </p>
              <h1 className="text-[#004953] text-3xl font-medium sm:mb-3 sm:text-4xl ">
                Better Ingredients
              </h1>
            </div>

            <p className="text-light-grey text-[10px] font-normal sm:text-[15px]">
              Only the best when you choose products offered on our platform
              high-quality{" "}
            </p>
            <p className="text-light-grey text-[10px] font-normal  sm:text-[15px] ">
              ingredients for high quality products!{" "}
            </p>
          </div>
          {ingredientsDetails.map((item, index) => (
            <MedicineCard key={index} ingredientsDetails={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Ingredient;
