import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex items-center gap-10 justify-wrap max-xl:flex-col-reverse max-container">
      <div className="flex-1">
        <img
          height={687}
          width={773}
          className="object-contain w-full"
          src={offer}
        />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, out footwear is designed to
          elevate your experience, providing you with unmatched quality,
          innovation and a touch of elegance
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
          Providing you with unmatched quality, innovation and a touch of
          elegance
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label={"Learn more"}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>{" "}
      </div>
    </section>
  );
};

export default SpecialOffer;
