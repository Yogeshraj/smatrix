import Image from "next/image";
import Logo from "../../../public/logo.svg";
import DashboardIcon from "../Icons/DashboardIcon";
import TaskIcon from "../Icons/TaskIcon";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className='bg-half-white shadow-default'>
      <div className='md:container container'>
        <div className='flex flex-row py-4 justify-between'>
          <div className='flex items-center flex-wrap'>
            <Link href='/'>
              <Image priority={true} src={Logo} alt='Logo' />
            </Link>

            <Link href='/'>
              <div
                className={`${
                  router?.route === "/" ? "active" : ""
                } ml-14 p-2 flex flex-wrap cursor-pointer [&.active]:bg-purple hover:bg-purple hover:text-meteorite-blue rounded-[10px] transition-all after:content-[""] after:absolute after:-bottom-[17px] after:bg-purple after:w-full after:h-1 after:left-0 after:rounded-t-lg relative after:hidden [&.active]:after:block text-grey [&.active]:text-meteorite-blue group bg-white/5 border-2 border-white`}>
                <DashboardIcon />
                <span className='pl-2.5 font-semibold'>Dashboard</span>
              </div>
            </Link>

            <Link href='/all-tasks'>
              <div
                className={`${
                  router?.route === "/all-tasks" ? "active" : ""
                } ml-5 p-2 flex flex-wrap cursor-pointer [&.active]:bg-purple hover:bg-purple hover:text-meteorite-blue rounded-[10px] transition-all after:content-[""] after:absolute after:-bottom-[17px] after:bg-purple after:w-full after:h-1 after:left-0 after:rounded-t-lg relative after:hidden [&.active]:after:block text-grey [&.active]:text-meteorite-blue group bg-white/5 border-2 border-white`}>
                <TaskIcon />
                <span className='pl-2.5 font-semibold'>All Task</span>
              </div>
            </Link>
          </div>

          {/* TODO: Login Menu */}
          {/* <div className='flex items-center flex-wrap'>
            <Image src={Logo} alt='Logo' />
            <div className='active ml-14 p-2 flex flex-wrap cursor-pointer [&.active]:bg-purple hover:bg-purple hover:text-meteorite-blue rounded-[10px] transition-all after:content-[""] after:absolute after:-bottom-4 after:bg-purple after:w-full after:h-1 after:left-0 after:rounded-t-lg relative after:hidden [&.active]:after:block text-grey [&.active]:text-meteorite-blue group'>
              <DashboardIcon />
              <span className='pl-2.5 font-semibold'>Dashboard</span>
            </div>
            <div className='ml-5 p-2 flex flex-wrap cursor-pointer [&.active]:bg-purple hover:bg-purple hover:text-meteorite-blue rounded-[10px] transition-all after:content-[""] after:absolute after:-bottom-4 after:bg-purple after:w-full after:h-1 after:left-0 relative after:hidden [&.active]:after:block text-grey [&.active]:text-meteorite-blue group'>
              <TaskIcon />
              <span className='pl-2.5 font-semibold'>All Task</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
