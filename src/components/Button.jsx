const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 py-4 text-lg leading-none rounded-full
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red border-coral-red text-white "
      }
      
       border  px-7 font-montserrat ${fullWidth && "w-full"} `}
    >
      {label}
      {iconUrl && (
        <img
          height={5}
          width={5}
          src={iconUrl}
          alt="arrow right icon"
          className="w-5 h-5 ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
