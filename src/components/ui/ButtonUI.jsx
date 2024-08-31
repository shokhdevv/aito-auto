import Link from "next/link";

const ButtonUl = ({ href , text ,onClick ,  type,  extraStyle , disabled, isFillBtn = false }) => {

    return (
        <>
        {
          href 
          ?
          <Link href={href}  className={`${extraStyle}  rounded-[4px] py-1.5 px-2.5 font-futura hover:scale-95 duration-200 ${isFillBtn ? " text-currentDark bg-white" : "border border-white text-white bg-transparent"} `}>
            {text}
          </Link>
          :
          <button type={type} disabled={disabled}  onClick={onClick} className={`${extraStyle}  rounded-[4px] py-1.5 px-2.5 font-futura hover:scale-95 duration-200 ${isFillBtn ? " text-currentDark bg-white" : "border border-white text-white bg-transparent"} `}>
            {text}
          </button> 
        }
        </>
    )
}

export default ButtonUl