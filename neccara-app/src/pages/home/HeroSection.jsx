import heroImage from "../../assets/home-page/heroImage1.png"
import formularIcon from "../../assets/home-page/formularIcon.svg"
import beakerIcon from "../../assets/home-page/beakerIcon.svg"
import chatIcon from "../../assets/home-page/chatIcon.svg"



const HeroSection = () => {
  return (
   <>
    <section className="w-full h-[78vh] relative">
     <div className="pattern-bg"></div>
     <div className="pattern-bg-item-container">
      <section className="w-full h-full flex justify-center items-center pl-12">
       <article className="w-1/2  h-full grid place-content-center">
        <div className="w-10/12">
         <h1 className="text-[var(--base-blue)] font-semibold text-5xl leading-[5rem]">
          Neccara: Beyond Beautiful, It&apos;s Science-Backed Melanin Magic
         </h1>
         <p className="p-[var(--base-gray)] text-lg leading-[2rem] my-12">
          Luxury meets science in skincare formulated specifically for the
          brilliance of deeper skin tones. We don&apos;t just address concerns,
          we celebrate your complexion with powerful, meticulously curated
          ingredients that work wonders.
         </p>
         <button className="necarra-pri-btn">SHOP NOW</button>
        </div>
       </article>
       <figure className="w-1/2 h-full ">
        <img src={heroImage} alt="" className="object-contain h-full w-full" />
       </figure>
      </section>
     </div>
    </section>

    <section className="w-[80%] mx-auto py-12">
     <div className="flex items-center justify-items-center w-full">
      <div className="flex flex-col border-r-2 border-r-[var(--base-black)] items-start justify-items-center w-1/3">
       <div className="flex items-start justify-items-center gap-4">
        <i className="">
         <img src={formularIcon} alt="" className="" />
        </i>
        <div className="">
         <h3 className="text-[var(--base-black)] text-lg uppercase">
            Formulated by expert dermatologist
         </h3>
         <p className="text-[var(--base-black)] text-base">
         Products tested and proven
         </p>
        </div>
       </div>
      </div>

      <div className="flex flex-col border-r-2 border-r-[var(--base-black)] items-center justify-items-center w-1/3">
       <div className="flex items-center justify-items-center gap-4">
        <i className="">
         <img src={beakerIcon} alt="" className="" />
        </i>
        <div className="">
        <h3 className="text-[var(--base-black)] text-lg uppercase">
            Backed by Science
        </h3>
        <p className="text-[var(--base-black)] text-base">
            This product is formulated in our labs
        </p>
        </div>
       </div>
      </div>

      <div className="flex flex-col border-r-2 border-r-[var(--base-black)] items-end justify-items-center w-1/3 pr-2">
       <div className="flex items-center justify-items-center gap-4">
        <i className="">
         <img src={chatIcon} alt="" className="" />
        </i>
        <div className="">
        <h3 className="text-[var(--base-black)] text-lg uppercase">
        Expert Recommendation Advised
        </h3>
        <p className="text-[var(--base-black)] text-base">
        Speak to our licensed Esthetician
        </p>
        </div>
       </div>
      </div>
     </div>
    </section>
   </>
  );
}

export default HeroSection