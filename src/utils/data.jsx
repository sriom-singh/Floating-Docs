import { useState } from "react";

export const Data = () => {
    const [data] = useState([{
        id:"1",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        filesize:".4mb",
        close:true,
        tag:{tagTitle:"Download Now",tagColor:"green"},
    },
    {
        id:"1",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        filesize:".9mb",
        close:true,
        tag:{tagTitle:"Upload",tagColor:"blue"},
    },
    {
        id:"1",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        filesize:".8mb",
        close:false,
        tag:{},
    }
]
    )

  return data;
}

