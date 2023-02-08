import Image from 'next/image';
import icon7 from '../public/image/icon7.png'
import icon8 from '../public/image/icon8.png'
import icon9 from '../public/image/icon9.png'
const ExserciceContent = () => {
    return (
        <div className='bg-indigo-600 mx-10 rounded-lg p-10  mt-12 mb-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex mb-5'>
                <div className=" p-5 bg-violet-500 rounded-lg"> <Image className=' ' src={icon7} width={50} height={50} />
                    </div>
                    <div className="text-white ml-3">
                    <p className="mb-4 font-bold">Get that 11 line <br /> in 30 days</p>
                    <span className="text-sm">Learn more</span>
                    </div>
               </div>

             <div className='flex mb-5'>
                <div className=" p-5 bg-violet-500 rounded-lg"> <Image className=' ' src={icon8} width={50} height={50} />
                    </div>
                    <div className="text-white ml-3">
                    <p className="mb-4 font-bold">14 Days
sherd challenge <br /> in 30 days</p>
                    <span className="text-sm">Learn more</span>
                    </div>
               </div>

            <div className='flex mb-5'>
                <div className=" p-5 bg-violet-500 rounded-lg"> <Image className=' ' src={icon9} width={50} height={50} />
                </div>
                <div className="text-white ml-3">
                    <p className="mb-4 font-bold">Get flat belly in 30 days <br /> in 30 days</p>
                    <span className="text-sm">Learn more</span>
                </div>
            </div>
        </div>
    );
};

export default ExserciceContent;