import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import nagib1 from "../assets/nagib1.png";
import nagib2 from "../assets/nagib2.png";
import vrata from "../assets/vrata.png";
import vratafaks1 from "../assets/vratafaks1.png";
import nagibfaks1 from "../assets/nagibfaks1.png";

const Exhibit = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 gap-12 my-12">
        {/* Kartica 1 - Slika vrata 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img src={vratafaks1} alt="Ulazna vrata" className="rounded-lg shadow-lg w-1/2  border-4 border-poppy " /> 
            <h3 className="text-xl font-bold mt-4 text-center font-taviraj">Ulazna vrata fakulteta</h3>
          </div>
          <div className="w-full md:w-1/2 bg-paper p-6 rounded-lg shadow-lg text-center border-2 border-black">
            <p className="text-lg italic mb-4 font-heebo">
              „Vrata su teška, brzo se zatvaraju. Ulaganje dodatnog napora pri otvaranju vrata.“
            </p>
            <p className="text-lg italic font-heebo">
              „Nikada nije ustala da pridrži vrata ili tako nešto, niti da pomogne oko lifta… Mislim, ne očekujem nikakvu privilegiju.“
            </p>
          </div>
        </div>

        {/* Kartica 2 - Slika vrata 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 ">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img src={vrata} alt="Zatvorena vrata posle 14h" className="rounded-lg shadow-lg w -1/2 border-4 border-poppy " />
            <h3 className="text-xl font-bold mt-4 text-center font-taviraj">Zatvorena vrata posle 14h</h3>
          </div>
          <div className="w-full md:w-1/2 bg-paper p-6 rounded-lg shadow-lg text-center border-2 border-black">
            <p className="text-lg italic mb-4 font-heebo">
              „Ovo je jedini pristupačni ulaz na fakultet, ali posle 14 časova je zatvoren.“
            </p>
            <p className="text-lg italic font-heebo">
              „Iznervira me i povredi jedino kada je nešto potpuno nepristupačno.“
            </p>
          </div>
        </div>

        {/* Kartica 3 - Slika rampe unutar fakulteta */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img src={nagibfaks1} alt="Rampa unutar fakulteta" className="rounded-lg shadow-lg  w-1/2 border-4 border-poppy " />
            <h3 className="text-xl font-bold mt-4 text-center font-taviraj">Rampa unutar fakulteta</h3>
          </div>
          <div className="w-full md:w-1/2 bg-paper p-6 rounded-lg shadow-lg text-center border-2 border-black">
            <p className="text-lg italic mb-4 font-heebo">
              „Pa da, ove rampe na platou su primer toga kako vrlo često ljudi naprave rampe samo reda radi i uopšte ne vode računa o nagibu.“
            </p>
            <p className="text-lg italic font-heebo">
              „Fizičkih prepreka baš ima mnogo, od rampi do platoa i liftova koji se kvare.“
            </p>
          </div>
        </div>

        {/* Kartica 4 - Slika rampe van fakulteta */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 ">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img src={nagib1} alt="Rampa van fakulteta" className="rounded-lg shadow-lg w-1/2 border-4 border-poppy "  />
            <h3 className="text-xl font-bold mt-4 text-center font-taviraj">Rampa ispred fakulteta, potpuno nepristupačna, ugao od 45 stepeni</h3>
          </div>
          <div className="w-full md:w-1/2 bg-paper p-6 rounded-lg shadow-lg text-center border-2 border-black">
            <p className="text-lg italic mb-4 font-heebo">
              „Ali opet je tu problem prevoz jer zbog prevoza ne mogu da idem motornim kolicima nego moram da koristim obična...“
            </p>
            <p className="text-lg italic font-heebo">
              „Nemam dovoljno snage da sebe izguram po tako strmoj površini.“
            </p>
          </div>
        </div>

        {/* Kartica 5 - Slika rampe i problem sa balansiranjem */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img src={nagib2} alt="Nagib i balansiranje" className="rounded-lg shadow-lg w-1/2  border-4 border-poppy " />
            <h3 className="text-xl font-bold mt-4 text-center font-taviraj">Rampa ispred fakulteta, potpuno nepristupačna, ugao od 45 stepeni</h3>
          </div>
          <div className="w-full md:w-1/2 bg-paper p-6 rounded-lg shadow-lg text-center border-2 border-black">
            <p className="text-lg italic mb-4 font-heebo">
              „Npr. tu mi je nekad baš teško ako se zadesi da kad se završi ispit moji roditelji nisu tu jer mi je baš teško da sama izbalansiram i onda ih samo čekam tu ispred ulaza.“
            </p>
            <p className="text-lg italic font-heebo">
              „Tako da, u suštini, dosta zavisim od drugih.“
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Exhibit;
