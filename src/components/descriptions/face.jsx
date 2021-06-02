import Image from 'next/image';

const FaceDescription = () => {
  return (
    <>
      <h1 className="description-heading">Rhino's Senses</h1>
      <p className="description-text">
        Rhinos make up for their poor eyesight—they sometimes have trouble visually detecting other animals on an open plain who are less than a hundred feet away—with their olfactory (smell) and auditory (hearing) senses. In fact, the largest part of the rhino brain is dedicated to the olfactory sense, indicating just how important a rhino’s sense of smell is to its survival.
     </p>

      <Image
        src="/img/rhino-senses.webp"
        width={300}
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

export default FaceDescription;
