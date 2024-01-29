import Card from "./Card"
import {Data} from "../utils/data"
import { useRef } from "react"

const Foreground = () => {

      const ref = useRef(null)
    //data= icomn, desc, filesize, closeorDownload, tagDetails
    const data = Data();
  return (
    <div ref={ref} className='fixed w-full h-screen z-{100} flex gap-10 flex-wrap p-4'>
        {data.map((item,index)=>(
            <Card key={item.id} data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground