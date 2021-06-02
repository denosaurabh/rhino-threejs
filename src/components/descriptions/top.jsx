import Image from 'next/image';

const TopDescription = () => {

  return (
    <>
      <h1 className="description-heading row">Rhino And <br /> Oxpeckers</h1>
      <p className="description-text w-30 bg-black row mt-auto">
      African rhinos and oxpeckers (a type of bird) have a fascinating symbiotic relationship. The oxpecker stands on the rhino’s back and eats ticks and other insects that it finds on the rhino. If the oxpecker senses danger, it will always create a commotion, which helps to alert the rhino to it as well.     
       </p>

      <Image
        src="/img/oxpicker-rhino.webp"
        width="auto"
        height="100%"
        className="description-image row"
        objectFit="cover"
      />
    </>
  );
};

export default TopDescription;
