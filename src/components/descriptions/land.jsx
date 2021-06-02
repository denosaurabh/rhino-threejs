import Image from 'next/image';

const LandDescription = () => {

  return (
    <>
      <h1 className="description-heading">Rhino's Territoty</h1>
      <p className="description-text">
        While a group of rhinos is more commonly referred to as a “herd”, these same groups are occasionally referred to as a “crash”. Why? Well, the term officially refers to a group of rhinos that is moving at a high speed and shows, pretty clearly, that they are a force to be reckoned with.
      </p>

      <Image
        src="/img/rhino-territory.webp"
        width={300}
        height={300}
        className="description-image"
        objectFit="cover"
        quality={100}
      />

      <p className="description-credits mt-auto">
        Photo by <a href="https://unsplash.com/@stravekc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tak-Kei Wong</a> on <a href="https://unsplash.com/s/photos/rhino?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </>
  );
};

export default LandDescription;
