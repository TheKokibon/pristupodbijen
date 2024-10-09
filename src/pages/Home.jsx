import React from "react";
import znak from "../assets/pocetnastranicaZnak.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import euzatebe from "../assets/euzatebelogo.png";
import boslogo from "../assets/boslogo1.png";
import pokret from "../assets/pokretzainkluzivnostudiranje.png";
import CountUp from "react-countup";


import { Equal, ChevronLeft, ChevronRight } from "lucide-react";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 p-6 flex-grow">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-1/3 animate-slideLeft">
          <p className="font-heebo italic text-lg leading-relaxed md:leading-relaxed lg:text-xl">
            Pristup Odbijen je izložba posvećena podizanju svesti o važnosti
            pristupačnosti za osobe sa invaliditetom u obrazovnom sistemu. Cilj
            izložbe je ukazati na prepreke koje studenti sa invaliditetom
            svakodnevno prolaze u obrazovanju i pozvati na promenu.
          </p>
          <h2 className="font-taviraj text-2xl lg:text-3xl mt-6">
            Izložba o pristupačnosti i inkluziji u obrazovnom sistemu
          </h2>
          <button className="bg-poppy text-white mt-4 self-center md:self-start p-2 rounded-lg font-bold font-sansCondensed hover:bg-red-900 hover:shadow-lg transition duration-300 ease-in-out">
            Pogledaj izložbu
          </button>
        </div>

        <div className="w-full md:w-1/3 flex justify-center animate-slideRight">
          <img
            src={znak}
            alt="Znak za Pristup odbijen"
            className="w-2/3 md:w-full object-contain"
          />
        </div>
      </div>

      <hr className="w-1/2 mx-auto border-black border-t-2 rounded-full my-4" />

      <div className="w-full bg-platinum py-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 font-sansCondensed">
          Naš uticaj u brojkama
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Broj izložbi */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border-4 border-poppy">
          <h3 className="text-6xl font-bold text-poppy font-taviraj"> <CountUp end={1} duration={5} /></h3>
            <p className="text-xl font-bold mt-4 font-taviraj">Održanih izložbi</p>
          </div>

          {/* Broj pratilaca */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border-4 border-poppy">
            <h3 className="text-6xl font-bold text-poppy font-taviraj"> <CountUp end={200} duration={5} />+</h3>
            <p className="text-xl font-bold mt-4 font-taviraj">
              Pratilaca na društvenim mrežama
            </p>
          </div>

          {/* Broj volontera */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border-4 border-poppy">
            <h3 className="text-6xl font-bold text-poppy"><CountUp end={20} duration={5} />+</h3>
            <p className="text-xl font-bold mt-4">Volontera</p>
          </div>
        </div>
      </div>

      <hr className="w-1/2 mx-auto border-black border-t-2 rounded-full my-4" />
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sansCondensed text-center mt-2 md:mt-4 lg:mt-6 p-4">
          Zašto?
        </h1>
        <div className="flex flex-row justify-center flex-wrap gap-4 m-2">
          <div className="w-64 h-44 bg-poppy rounded-lg flex flex-col justify-center items-center text-white font-bold mx-6">
            <ChevronLeft className="size-32" />
            <h3 className="font-taviraj font-bold text-lg">Manje prepreka</h3>
          </div>
          <div className="w-64 h-44 bg-poppy rounded-lg flex flex-col justify-center items-center text-white font-bold mx-6">
            <Equal className="size-32" />
            <h3 className="font-taviraj font-bold text-lg">
              Jednakost koju tražimo
            </h3>
          </div>
          <div className="w-64 h-44 bg-poppy rounded-lg flex flex-col justify-center items-center text-white font-bold mx-6">
            <ChevronRight className="size-32" />
            <h3 className="font-taviraj font-bold text-lg">
              Veća inkluzivnost
            </h3>
          </div>
        </div>

        {/* Citati postavljeni na levo, desno, sredinu */}
        <div className="w-1/2 mt-8 space-y-6">
          <div className="flex justify-start text-center">
            <p className="text-poppy text-lg font-bold font-heebo italic w-full md:w-1/3 animate-slideLeft">
              „Pa da, ove rampe na platou su primer toga kako vrlo često ljudi
              naprave rampe samo reda radi i uopšte ne vode računa o nagibu…“
            </p>
          </div>

          <div className="flex justify-end text-center">
            <p className="text-poppy text-lg font-bold font-heebo italic w-full md:w-1/3 animate-slideRight">
              „I studenti i profesori su uvek voljni da pomognu tako da su ljudi
              super. Ali osim toga, stvarno ima puno prepreka...“
            </p>
          </div>

          <div className="flex justify-center text-center">
            <p className="text-poppy text-lg font-bold font-heebo italic w-full md:w-1/3 animate-slideTop">
              „Tako da, dosta zavisim od drugih.“
            </p>
          </div>

          <div className="flex justify-start text-center">
            <p className="text-poppy text-lg font-bold font-heebo italic w-full md:w-1/3 animate-slideLeft">
              „Što se tiče prilagođavanja na prostor meni je amfiteatar bio jako
              strašan...“
            </p>
          </div>

          <div className="flex justify-end text-center">
            <p className="text-poppy text-lg font-bold font-heebo italic w-full md:w-1/3 animate-slideRight">
              „Nepristupačan prilaz, stepenice visoke, rampe kao da nema.
              Potreban gelender.“
            </p>
          </div>
        </div>

        {/* Call to action text and button */}
        <div className="text-center mt-12">
          <p className="text-lg font-bold font-taviraj  text-black">
            Ukoliko želiš da nam pomogneš u ovoj misiji, klikni na dugme ispod!
          </p>
          <a
            href="/kontakt"
            className="bg-poppy text-white mt-4 p-3 rounded-lg font-bold hover:bg-red-900 transition duration-300 ease-in-out inline-block font-taviraj"
          >
            Pomozi nam
          </a>
        </div>
      </div>

      {/* Citati razbacani po stranici */}

      <hr className="w-1/2 mx-auto border-black border-t-2 rounded-full my-4" />

      {/* Prijatelji programa Section */}
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sansCondensed text-center mt-2 md:mt-4 lg:mt-6 p-4">
          Prijatelji programa
        </h1>
        <div className="flex flex-row flex-wrap justify-evenly items-center m-4 gap-4">
          <img src={boslogo} alt="BOS Logo" className="w-64 h-min " />
          <img src={pokret} alt="Pokret Logo" className="w-32 h-32 " />
          <img src={euzatebe} alt="EU za tebe Logo" className="w-64 h-min " />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
