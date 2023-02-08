import Image from "next/image";
import man from '../public/image/man2.jpg'
import shapes from '../public/image/shapes4.png'
import shape2 from '../public/image/shapes3.png'
import shape3 from '../public/image/shaps2.png'
import icon from '../public/image/icon2.png'
import icon2 from '../public/image/icon1.png'
import icon3 from '../public/image/icon7.png'
import { FaArrowRight } from "react-icons/fa";
const BestBody = () => {
    return (

        <div className=' my-16 mx-16 grid sm:grid-cols-1 lg:grid-cols-2'>
            <div className="mb-5">

                <div className='lg:w-52 w-48 h-20 absolute bg-base-200 z-10 mt-64 lg:mt-96 -ml-16 lg:-ml-10 rounded drop-shadow-2xl grid grid-cols-2'>
                    <Image className=" ml-6 bg-blue-500 rounded-full w-11 mt-5  p-3 " src={icon3} width={0} height={0} /><p className=' mt-5 -ml-5 '><span className="font-semibold block">800 kall</span> <span className="text-gray-500 mb-2">Burn fat</span></p>
                </div>


                <div className=' absolute z-10  w-20 h-20 ml-1 lg:ml-16 lg:mt-3 mt-4 rounded-full drop-shadow-2xl '>
                    <Image className=" ml-6 bg-purple-400 rounded-full w-12 mt-2  p-2 " src={icon2} width={0} height={0} />
                </div>

                <div className=' absolute bg-blue-300 z-10  lg:w-16 lg:h-16 w-12 h-12 ml-64 lg:ml-96 lg:mt-48 mt-24 rounded-full drop-shadow-2xl '>
                    <Image className="lg:mt-3 mt-2 lg:ml-5 ml-4   lg:w-5 w-4 " src={icon} width={0} height={0} />
                </div>

              <Image className="absolute w-72 lg:w-80 lg:mt-16  lg:ml-24" src={shape2} width={0} height={0}/>

              <Image className="absolute w-72 lg:w-80 mt-16 lg:ml-24" src={shape3} width={0} height={0}/>
              
               <Image className="absolute w-72 lg:w-80 lg:mt-60 mt-52 lg:ml-24" src={shape3} width={0} height={0}/>

                <Image className="absolute w-64 -ml-5  lg:w-80 lg:mt-48 mt-36 lg:ml-12" src={shapes} width={0} height={0}/>

                <Image className="relative w-64 lg:w-80  lg:ml-16" src={man} width={0} height={450} />
            </div>

            <div>
                <h3 className="text-5xl font-semibold mb-5">Best full body <br/> workout to lose fat</h3>
                <p className="text-gray-500">
                    Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. 
                </p>
                <button className="btn  mt-20 btn-primary mr-7  bg-blue-900 shadow-xl border-0">Get Started <FaArrowRight className="ml-5 text-xl w-12" /></button>
            </div>
        </div>
    );
};

export default BestBody;