import Image from "next/image";
import img from '../public/image/man.jpg'
import brand1 from '../public/image/brand1.png'
import brand2 from '../public/image/brand2.png'
import brand3 from '../public/image/brand3.png'
import brand4 from '../public/image/brand4.png'
import shapes from '../public/image/shap.png'
import shapes2 from '../public/image/shaps2.png'
import shapes3 from '../public/image/shapes3.png'
import icon from '../public/image/icon9.png'
import icon2 from '../public/image/icon2.png'
import icon3 from '../public/image/icon10.png'
import icon4 from '../public/image/icon11.png'

import { FaChevronCircleRight, FaPlayCircle } from "react-icons/fa";
const Header = () => {
    return (
        <div className="grid sm:grid-cols-1 md:gird-cols-2 lg:grid-cols-2 mx-12 lg:mx-16 mt-18">
            <div className="mt-20">
                <div>
                    <p className="font-semibold text-5xl">Healthy in side <br /> <span className="text-blue-400">fresh</span> out side</p>
                    <p className="text-gray-500 mt-6 w-100">Exercise is a very important need for our body. Health and <br /> fitness will be obtained if you can do regular exercise and <br /> run a healthy routine.</p>
                </div>
                <div className="mt-5  flex justify-around lg:block">
                    <button className="btn   btn-primary mr-7  bg-blue-900 shadow-xl border-0">Get Started <FaChevronCircleRight className="ml-5 text-xl" /></button>
                    <button className="btn  hover:text-white bg-white shadow-xl text-black border-0"><FaPlayCircle className="mr-2 text-xl" /> Learn more </button>
                </div>
                <div className="mt-8  mb-7">
                    <p className="text-gray-500 font-medium mb-5">Brands</p>
                    <div className="flex lg:gap-5 sm:gap-4">
                        <Image src={brand1} width={120} height={20} />
                        <Image src={brand2} width={120} height={20} />
                        <Image src={brand3} width={120} height={20} />
                        <Image src={brand4} width={120} height={20} />
                    </div>
                </div>

            </div>
            <div className="sm:mt-10 lg:mx-10">

                <div className='lg:w-52 w-48 h-16 absolute bg-base-200 z-10 mt-12 lg:mt-28 -ml-16 lg:-ml-20 rounded drop-shadow-2xl grid grid-cols-2'>
                    <Image className=" ml-6 bg-orange-400 rounded-full w-12 mt-2  p-2 " src={icon} width={0} height={0} /><p className=' mt-5 -ml-5'><span className="font-semibold">150+</span> Members</p>
                </div>
                
                  <div className=' absolute bg-blue-300 z-10  w-16 h-16 ml-56 lg:ml-96 lg:mt-28 mt-12 rounded-full drop-shadow-2xl '>
                   <Image className="mt-3 ml-5  w-5 " src={icon2} width={0} height={0} />
                </div>

                 <div className=' absolute bg-blue-800 z-10 mt-52 lg:mt-96 w-16 h-16 lg:-ml-10 -ml-8  rounded-full drop-shadow-2xl '>
                   <Image className="mt-5 ml-3 w-10   " src={icon3} width={0} height={0} />
                </div>

                <div className="lg:w-40 lg:h-40 w-28 h-36 bg-base-200 absolute z-10 lg:mt-72 mt-40 ml-48 lg:ml-72 drop-shadow-2xl rounded">
                    <Image className='lg:ml-12 ml-9 lg:mb-3 bg-violet-600 rounded-full w-12 h-12 mt-3  p-2 ' src={icon4} width={0} height={0}/>
                    <p className="text-center lg:font-bold ">Zaqky Simorang</p>
                     <p className="text-center ">Trainer</p>
                </div>

                <div className='z-0'>
                <Image className='absolute mt-6 mr-36 lg:mt-24 w-64 lg:w-96' src={shapes3} width={0} height={0} />
                <Image className='absolute mt-6 mr-32 lg:mt-36 w-64 lg:w-80' src={shapes2} width={0} height={0} />
                <Image className='absolute mt-24 mr-36 lg:mt-48 w-72 lg:w-96 ' src={shapes2} width={0} height={0} />
                <Image className='absolute mt-24 mr-36 lg:mt-48 w-72 lg:w-96 ' src={shapes} width={0} height={0} />
                <Image className="relative w-52 lg:w-80 ml-12" src={img} width={0} height={450} />

                </div>
            </div>
        </div>
    );
};

export default Header;