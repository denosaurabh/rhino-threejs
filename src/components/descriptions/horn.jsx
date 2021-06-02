import Image from 'next/image';

const HornDescription = () => {

  return (
    <>
      <h1 className="description-heading">Rhino Horn</h1>
      <p className="description-text">
        Rhino horn is made up of keratin - the same protein which forms the
        basis of our hair and nails. Javan and greater one-horned rhinos only
        have one horn, whereas all the other rhino species have two horns.
      </p>

      <Image
        src="/img/rhino-horn.webp"
        width="100%"
        height="auto"
        className="description-image"
        objectFit="cover"
      />

      <p className="description-credits mt-auto">
        Photo by
        <a href="https://unsplash.com/@gerandeklerk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Geran de Klerk
        </a>
        on
        <a href="https://unsplash.com/s/photos/rhino-horn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
      <p className="description-credits">
        Photo by
        <a href="https://unsplash.com/@bullterriere?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Simon Hurry
        </a>
        on
        <a href="https://unsplash.com/s/photos/rhino-horn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </>
  );
};

export default HornDescription;
