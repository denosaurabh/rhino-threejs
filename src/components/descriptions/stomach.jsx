import Image from 'next/image';

const StomachDescription = () => {
  return (
    <>
      <h1 className="description-heading">Rhino's Skin</h1>
      <p className="description-text">
        Similar to elephants, a rhino’s skin can be up to 2 inches thick, but is still susceptible to sunburn. That’s why, when you are on safari, you will often see rhinos rolling around in the mud. Once the mud dries, it provides a layer of protection from both the sun and insects
        <br /> <br />
        Africa’s white rhino, the largest of the world’s five species of rhinos, can weigh in at 5,000 pounds, making it the world’s second largest land mammal behind elephants. All that weight is distributed across a 6 foot tall frame that can reach up to 11 feet in length.
      </p>
      <Image
        src="/img/rhino-skin.webp"
        width="100%"
        height="200px"
        className="description-image"
        objectFit="cover"
      />

      <p className="description-credits mt-auto">
        Photo by <a href="https://unsplash.com/@francesco_ungaro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Francesco Ungaro</a> on <a href="https://unsplash.com/s/photos/rhino-skin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </>
  );
};

export default StomachDescription;
