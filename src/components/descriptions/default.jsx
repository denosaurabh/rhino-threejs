import Image from 'next/image';

const DefaultDescription = () => {
  return (
    <>
      <h1 className="description-heading">Greater Rhino</h1>
      <p className="description-text">
        White, Black, Indian, Javan, and Sumatran make up the five species of rhino in the world. White and black rhinoceros are native to Africa, while Indian, Javan and Sumatran can be found in India and Asia. Due to widespread poaching, all rhinos are under threat, but the black rhino, Javan rhino and Sumatran rhino are classified as critically endangered and could become extinct in as few as three generations.
      </p>

      <Image
        src="/img/greater-rhino.webp"
        width={200}
        height="200px"
        className="description-image"
        objectFit="cover"
        quality={100}
      />


      <p className="description-credits mt-auto">
        Photo by <a href="https://unsplash.com/@picsbyjameslee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">James Lee</a> on <a href="https://unsplash.com/s/photos/rhino-face?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </>
  );
};

export default DefaultDescription;
