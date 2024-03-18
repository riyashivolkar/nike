const ShoeCard = ({ imgUrl, changeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeImage(imgUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 cursor-pointer rounded-xl ${
        bigShoeImg === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center bg-center bg-cover bg-card sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="shoe collection"
          height={103}
          width={127}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
