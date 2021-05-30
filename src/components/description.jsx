import Image from 'next/image'

const Description = () => {

    return (

        <div style={{ position: 'absolute', top: '20%', right: '5%', zIndex: '100', display: 'flex', flexDirection: 'column', width: '18%', height: '100%' }}>
            <h1 style={{ fontFamily: 'Trap', fontSize: '20px' }}>Rhino Horn</h1>
            <p style={{ fontFamily: 'Trap', fontSize: '16px', lineHeight: '22px', fontWeight: 'lighter' }}>
                Rhino horn is made up of keratin - the same protein which forms the basis of our hair and nails. Javan and greater one-horned rhinos only have one horn, whereas all the other rhino species have two horns.
            </p>

            <Image src="/img/rhino-horn.webp" width="100%" height="auto" className="description-image" />

            <p style={{ marginTop: 'auto' }}>
                Photo by <a href="https://unsplash.com/@gerandeklerk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Geran de Klerk</a> on <a href="https://unsplash.com/s/photos/rhino-horn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </p>
            <p>
                Photo by <a href="https://unsplash.com/@bullterriere?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Simon Hurry</a> on <a href="https://unsplash.com/s/photos/rhino-horn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </p>

        </div>
    )
}

export default Description;