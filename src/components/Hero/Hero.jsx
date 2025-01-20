import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import style from "./Hero.module.scss";

export const Hero = ({ setHeroImage }) => {
  const { data: images, error, isLoading } = useFetch("https://api.mediehuset.net/mediesuset/images");

  useEffect(() => {
    if (images?.items?.[4]?.image && setHeroImage) {
      setHeroImage(images.items[4].image);
    }
  }, [images, setHeroImage]);

  if (isLoading) {
    return <div className={style.loader}>Henter billeder...</div>;
  }

  if (error) {
    return <div className={style.error}>Kunne ikke hente billeder: {error}</div>;
  }

  const heroImage = images?.items?.[4]?.image;

  return (
    images && (
      <div className={style.heroContainer}>
        <img src={heroImage} alt="Hero" className={style.heroImage} />
      </div>
    )
  );
};
