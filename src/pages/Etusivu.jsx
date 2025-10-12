export default function Etusivu() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#f8f7f3] to-[#e9e5d9] text-center px-6">
      {/* Hero-alue */}
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

      {/* Taustakuva (valinnainen) */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[url('/nature.jpg')] bg-cover bg-center" />
    </section>
  );
}