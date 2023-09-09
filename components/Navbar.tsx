import Image from "next/image"
import Link from "next/link"
import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <header className=" w-full absolute z-10">
      <nav className=" max-width flex justify-between items-center padding-x py-4">
        <Link href={'/'} className=" flex justify-center items-center">
          <Image 
            src='/logo.svg'
            alt="logo"
            width={118}
            height={18}
          />
        </Link>
        <CustomButton 
          title="Sign In"
          btnType="button"
          containerStyles=" text-white rounded-full bg-teal-500 min-w-[130px]"
        />
      </nav>

    </header>
  )
}

export default Navbar