
export default function SectionTitle({title, extraStyle , isDarkText, isTextCenter, isLittleSize }) {
  return (
    <h2 className={` font-futura font-bold tracking-[1px] ${isLittleSize ? 'text-lg md:text-xl lg:text-2xl xl:text-[32px]' : " text-xl md:text-2xl lg:text-3xl xl:text-[36px] "} ${isDarkText ? 'text-black' : 'text-white'} ${isTextCenter && 'text-center'}  ${extraStyle}`}>
      {title}
    </h2>
  )
}
