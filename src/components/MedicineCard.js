import Image from "next/image";
const MedicineCard = ({ ingredientsDetails }) => {
  const { image, imageBlur, title, description1, description2 } =
    ingredientsDetails;
  return (
    <>
      <div className="mx-2 sm:mx-0 my-6 ">
        <Image
          src={image}
          blurDataURL={imageBlur}
          alt="no image"
          width={250}
          height={250}
          placeholder="blur"
        />
        <div className=" m-5 -mt-36  ">
          <p className="text-[#004953] font-semibold sm:font-bold ">{title}</p>
          <div className="mt-1 mb-12">
            <p className="text-xs  font-medium text-light-grey">
              {description1}
            </p>
            {description2 && (
              <p className="text-xs  font-medium text-light-grey">
                {description2}
              </p>
            )}
          </div>

          <p className="text-[11px] font-semibold text-[#004953] underline ">
            SEE MORE
          </p>
        </div>
      </div>
    </>
  );
};
export default MedicineCard;
