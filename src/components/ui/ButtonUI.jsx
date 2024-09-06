import Link from "next/link";

const ButtonUl = ({ href , text ,onClick ,  type,  extraStyle , disabled, isFillBtn = false, icon }) => {

    return (
        <>
        {
          href 
          ?
          <Link href={href}  className={`${extraStyle}  rounded-[4px] py-1.5 px-2.5 flex  items-center gap-x-4 max-md:text-sm font-futura hover:scale-95 duration-200 ${isFillBtn ? " text-currentDark bg-white" : "border border-white text-white bg-transparent"} `}>
            <span>{text}</span>
            {icon}
          </Link>
          :
          <button type={type} disabled={disabled}  onClick={onClick} className={`${extraStyle}  rounded-[4px] py-1.5 px-2.5 flex  items-center gap-x-4 max-md:text-sm font-futura hover:scale-95 duration-200 ${isFillBtn ? " text-currentDark bg-white" : "border border-white text-white bg-transparent"} `}>
           <span>{text}</span>
            {icon}
          </button> 
        }
        </>
    )
}

export default ButtonUl