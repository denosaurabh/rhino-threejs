import Image from 'next/image';

const LegDescription = () => {

  return (
    <>
      <h1 className="description-heading">Rhino's Speed</h1>
      <p className="description-text">
        Rhinos can reach speeds of up to 30 miles per hour. The world’s fastest humans, by comparison, only reach speeds of 28 miles per hour in a short 100-meter sprint. Interestingly, while running their top speed, rhinos run on their toes.
      </p>

      <Image
        src="/img/rhino-walking.webp"
        width={500}
        height="400px"
        className="description-image"
        objectFit="cover"
        quality={100}
      />

      <p className="description-credits mt-auto">
        Photo by <a href="https://unsplash.com/@redcharlie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">redcharlie</a> on <a href="https://unsplash.com/s/photos/rhino?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </>
  );
};

export default LegDescription;
