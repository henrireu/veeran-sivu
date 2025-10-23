import picture from '../assets/images/woman.jpg'

export default function Etusivu() {
  return (

    <div>
      <div className="w-full flex flex-col items-center px-10">
        <div className="flex flex-col xl:flex-row px-6 py-16 lg:py-24 max-w-[800px] xl:max-w-[1600px] gap-10 border-b border-black">
          
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="font-playfair text-4xl">Veera Rosendahl</h1>
            <div className="flex flex-col text-left gap-3 text-lg">
              <p className="font-raleway">Tutkija, joogaopettaja ja maailmankansalainen. Yhdistän hallinnon, eettisen johtamisen ja kestävän kehityksen näkökulmat käytännön yhteisölliseen toimintaan.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <img src={picture} />
          </div>

        </div>
      </div>
    </div>
  )
  
}

{/*
    <div className="p-10">
      <h1 className="font-playfair text-4xl text-center">Veera Rosendahl</h1>
      <p className="font-raleway">Testikirjoitusta vähän tänne</p>
    </div>
    */}

/**return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#f8f7f3] to-[#e9e5d9] text-center px-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-serif text-[#2f4f4f] mb-4">
          Veera Rosendahl
        </h1>

        <p className="text-lg md:text-xl text-[#4a5a4a] mb-8 leading-relaxed">
          Tutkija, joogaopettaja ja maailmankansalainen.  
          Yhdistän hallinnon, eettisen johtamisen ja kestävän kehityksen näkökulmat  
          käytännön yhteisölliseen toimintaan.
        </p>

        <button className="bg-[#4a5a4a] text-[#f8f7f3] px-6 py-3 rounded-full text-lg hover:bg-[#3d4c3d] transition-colors duration-300">
          Tutustu työhöni
        </button>
      </div>
      <div className="absolute inset-0 -z-10 opacity-20 bg-[url('/nature.jpg')] bg-cover bg-center" />
    </section>
  ); */