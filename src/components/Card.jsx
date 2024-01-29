import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({data , reference}) => {

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }}  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}

    className="relative w-44 h-56 rounded-[40px] py-6 bg-zinc-600 text-white p-4 overflow-hidden">
        <FaRegFileAlt />
        <p className="text-xs mt-5 font-medium leading-tight">{data.desc}</p>
        <div className="footer absolute  bottom-0  w-full  left-0">
            <div className="flex items-center p-4 justify-between">
                <p className="text-xs">{data.filesize}</p>
                <span className="p-1 bg-zinc-300 rounded-full text-black">
                {data.close?<MdOutlineFileDownload size=".7em" />:<IoIosClose size=".7em"/>
}
                
                </span>
            </div>
            {
                Object.keys(data?.tag).length !== 0 
                            && 
                <div className={`w-full ${data?.tag?.tagColor === "green"?"bg-green-700" : "bg-blue-600"} h-10 flex justify-center items-center`}>
                <h3 className="text-xs">{data.tag.tagTitle}</h3>
            </div>
            }

        </div>
    </motion.div>  )
}

export default Card