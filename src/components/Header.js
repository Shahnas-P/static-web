import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className=" header flex align-middle pl-36  relative   ">
        <Image
          src={"/logo1.jpg"}
          alt="logo"
          width={150}
          height={150}
          placeholder="blur"
          blurDataURL="/logo-blur.jpg"
        />
      </div>
    </>
  );
};
export default Header;
