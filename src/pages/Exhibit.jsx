import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import nagib1 from "../assets/nagib1.png";
import nagib2 from "../assets/nagib2.png";
import vratafaks1 from "../assets/vratafaks1.png";
import nagibfaks1 from "../assets/nagibfaks1.png";
import devojkaNaFaksu from "../assets/devojkaNaFaksu.jpeg";
import toalet from "../assets/toalet.jpeg";

import Slika1opis from "../assets/audio/Slika1opis.mp3";
import Slika2opis from "../assets/audio/Slika2opis.mp3";
import Slika3opis from "../assets/audio/Slika3opis.mp3";
import Slika4opis from "../assets/audio/Slika4opis.mp3";
import Slika5opis from "../assets/audio/Slika5opis.mp3";
import Slika6opis from "../assets/audio/Slika6opis.mp3";

import Testemonijal1 from "../assets/audio/Testemonijal1.mp3";
import Testemonijal2 from "../assets/audio/Testemonijal2.mp3";
import Testemonijal3 from "../assets/audio/Testemonijal3.mp3";
import Testemonijal4 from "../assets/audio/Testemonijal4.mp3";
import Testemonijal5 from "../assets/audio/Testemonijal5.mp3";
import Testemonijal6 from "../assets/audio/Testemonijal6.mp3";

const Exhibit = () => {
  // Refs for image audios
  const audioSlika1 = useRef(null);
  const audioSlika2 = useRef(null);
  const audioSlika3 = useRef(null);
  const audioSlika4 = useRef(null);
  const audioSlika5 = useRef(null);
  const audioSlika6 = useRef(null);

  // Refs for testimonial audios
  const audioTestemonijal1 = useRef(null);
  const audioTestemonijal2 = useRef(null);
  const audioTestemonijal3 = useRef(null);
  const audioTestemonijal4 = useRef(null);
  const audioTestemonijal5 = useRef(null);
  const audioTestemonijal6 = useRef(null);

  // State to keep track of currently playing audio
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlayingSlika1, setIsPlayingSlika1] = useState(false);
  const [isPlayingTestemonijal1, setIsPlayingTestemonijal1] = useState(false);
  const [isPlayingSlika2, setIsPlayingSlika2] = useState(false);
  const [isPlayingTestemonijal2, setIsPlayingTestemonijal2] = useState(false);
  const [isPlayingSlika3, setIsPlayingSlika3] = useState(false);
  const [isPlayingTestemonijal3, setIsPlayingTestemonijal3] = useState(false);
  const [isPlayingSlika4, setIsPlayingSlika4] = useState(false);
  const [isPlayingTestemonijal4, setIsPlayingTestemonijal4] = useState(false);
  const [isPlayingSlika5, setIsPlayingSlika5] = useState(false);
  const [isPlayingTestemonijal5, setIsPlayingTestemonijal5] = useState(false);
  const [isPlayingSlika6, setIsPlayingSlika6] = useState(false);
  const [isPlayingTestemonijal6, setIsPlayingTestemonijal6] = useState(false);

  // Function to reset all isPlaying states to false
  const resetAllIsPlaying = () => {
    setIsPlayingSlika1(false);
    setIsPlayingTestemonijal1(false);
    setIsPlayingSlika2(false);
    setIsPlayingTestemonijal2(false);
    setIsPlayingSlika3(false);
    setIsPlayingTestemonijal3(false);
    setIsPlayingSlika4(false);
    setIsPlayingTestemonijal4(false);
    setIsPlayingSlika5(false);
    setIsPlayingTestemonijal5(false);
    setIsPlayingSlika6(false);
    setIsPlayingTestemonijal6(false);
  };

  const playAudio = (audioRef, setIsPlaying) => {
    // Pause the current audio if it's playing
    if (currentAudio) {
      currentAudio.pause();
    }

    // Reset all play states before starting new audio
    resetAllIsPlaying();

    // Play the new audio
    audioRef.current.play();
    setCurrentAudio(audioRef.current);

    // Set isPlaying state for the clicked audio
    setIsPlaying(true);

    // Handle when the audio ends to reset the isPlaying state
    audioRef.current.onended = () => {
      setIsPlaying(false);
      setCurrentAudio(null);
    };
  };

  const togglePlayAudio = (audioRef, isPlaying, setIsPlaying) => {
    if (isPlaying) {
      // Pause the audio
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentAudio(null);
    } else {
      playAudio(audioRef, setIsPlaying);
    }
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 gap-12 mx-4 md:mx-20 my-12">
        {/* Kartica 1 - Slika vrata 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="border-4 border-black p-2 rounded-lg shadow-lg">
              <img
                src={vratafaks1}
                alt="Ulazna vrata"
                className="rounded-lg shadow-lg object-cover w-full md:w-auto"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-center font-taviraj">
              Ulazna vrata fakulteta
            </h3>
            {/* Play/Pause button for image audio */}
            <button
              onClick={() => togglePlayAudio(audioSlika1, isPlayingSlika1, setIsPlayingSlika1)}
              className="mt-4 bg-poppy text-white p-2 rounded-lg"
            >
              {isPlayingSlika1 ? "⏸ Pauziraj" : "🔊 Opis slike"}
            </button>
            {/* Audio for image */}
            <audio ref={audioSlika1} src={Slika1opis} />
          </div>

          <div className="w-full md:max-w-md p-6 rounded-lg shadow-lg text-center border-2 border-black mx-auto">
            <p className="text-xl italic mb-4 font-heebo">
              „Vrata su teška, brzo se zatvaraju. Ulaganje dodatnog napora pri
              otvaranju vrata.“
            </p>
            <p className="text-xl italic font-heebo">
              „Nikada nije ustala da pridrži vrata ili tako nešto, niti da
              pomogne oko lifta… Mislim, ne očekujem nikakvu privilegiju.“
            </p>
            {/* Play button for testimonial audio */}
            <button
              onClick={() =>
                togglePlayAudio(audioTestemonijal1, isPlayingTestemonijal1, setIsPlayingTestemonijal1)
              }
              className="mt-4 bg-poppy text-white p-2 rounded-lg"
            >
              {isPlayingTestemonijal1 ? "⏸ Pauziraj" : "🔊 Testemonijal"}
            </button>
            {/* Audio for testimonial */}
            <audio ref={audioTestemonijal1} src={Testemonijal1} />
          </div>
        </div>

        {/* Kartica 2 - Slika rampe unutar fakulteta */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="border-4 border-black p-2 rounded-lg shadow-lg">
              <img
                src={nagibfaks1}
                alt="Rampa unutar fakulteta"
                className="rounded-lg shadow-lg object-cover w-full md:w-auto"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-center font-taviraj">
              Rampa unutar fakulteta
            </h3>
            {/* Play button for image audio */}
            <button
              onClick={() => togglePlayAudio(audioSlika2, isPlayingSlika2, setIsPlayingSlika2)}
              className="mt-4 bg-poppy text-white p-2 rounded-lg"
            >
              {isPlayingSlika2 ? "⏸ Pauziraj" : "🔊 Opis slike"}
            </button>
            {/* Audio for image */}
            <audio ref={audioSlika2} src={Slika2opis} />
          </div>

          <div className="w-full md:max-w-md p-6 rounded-lg shadow-lg text-center border-2 border-black mx-auto">
            <p className="text-xl italic mb-4 font-heebo">
              “Mada, ja možda malo imam spušten prag, meni je bilo šta dovoljno.”
            </p>
            <p className="text-xl italic font-heebo">
              „Fizičkih prepreka baš ima mnogo, od rampi do platoa i liftova
              koji se kvare.“
            </p>
            {/* Play button for testimonial audio */}
            <button
              onClick={() =>
                togglePlayAudio(audioTestemonijal2, isPlayingTestemonijal2, setIsPlayingTestemonijal2)
              }
              className="mt-4 bg-poppy text-white p-2 rounded-lg"
            >
              {isPlayingTestemonijal2 ? "⏸ Pauziraj" : "🔊 Testemonijal"}
            </button>
            {/* Audio for testimonial */}
            <audio ref={audioTestemonijal2} src={Testemonijal2} />
          </div>
        </div>

        {/* Kartica 3 - Slika rampe van fakulteta */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="border-4 border-black p-2 rounded-lg shadow-lg">
              <img
                src={nagib1}
                alt="Rampa van fakulteta"
                className="rounded-lg shadow-lg object-cover w-full md:w-auto"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-center font-taviraj">
              Rampa ispred fakulteta, ugao od 45 stepeni
            </h3>
            {/* Play button for image audio */}
            <button
              onClick={() => togglePlayAudio(audioSlika3, isPlayingSlika3, setIsPlayingSlika3)}
              className="mt-4 bg-poppy text-white p-2 rounded-lg"
            >
              {isPlayingSlika3 ? "⏸ Pauziraj" : "🔊 Opis slike"}
            </button>
            {/* Audio for image */}
            <audio ref={audioSlika3} src={Slika3opis} />
          </div>

          <div className="w-full md:max-w-md p-6 rounded-lg shadow-lg text-center border-2 border-black mx-auto">
            <p className="text-xl italic mb-4 font-heebo">
              „Ali opet je tu problem prevoz jer zbog prevoza ne mogu da idem
              motornim kolicima nego moram da koristim obična...“
            </p>
            <p className="text-xl italic font-heebo">
              „Nemam dovoljno snage da sebe izguram po tako strmoj površini.“
            </p>
            {/* Play button for testimonial audio */}
            <button
              onClick={() =>
                togglePlayAudio(audioTestemonijal3, isPlayingTestemonijal3, setIsPlayingTestemonijal3)
              }
              className="mt-4 bg-poppy text-white p-2 rounded-lg"
            >
              {isPlayingTestemonijal3 ? "⏸ Pauziraj" : "🔊 Testemonijal"}
            </button>
            {/* Audio for testimonial */}
            <audio ref={audioTestemonijal3} src={Testemonijal3} />
          </div>
        </div>

        {/* Kartica 4 - Slika rampe i problem sa balansiranjem */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="border-4 border-black p-2 rounded-lg shadow-lg">
              <img
                src={nagib2}
                alt="Nagib i balansiranje"
                className="rounded-lg shadow-lg object-cover w-full md:w-auto"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-center font-taviraj">
              Rampa ispred fakulteta, ugao od 45 stepeni
            </h3>
            {/* Play button for image audio */}
            <button
              onClick={() => togglePlayAudio(audioSlika4, isPlayingSlika4, setIsPlayingSlika4)}
              className="mt-4 bg-poppy text-white p-2 rounded-lg"
            >
              {isPlayingSlika4 ? "⏸ Pauziraj" : "🔊 Opis slike"}
            </button>
            {/* Audio for image */}
            <audio ref={audioSlika4} src={Slika4opis} />
          </div>

          <div className="w-full md:max-w-md p-6 rounded-lg shadow-lg text-center border-2 border-black mx-auto">
            <p className="text-xl italic mb-4 font-heebo">
              „Npr. tu mi je nekad baš teško ako se zadesi da kad se završi ispit
              moji roditelji nisu tu jer mi je baš teško da sama izbalansiram i
              onda ih samo čekam tu ispred ulaza.“
            </p>
            <p className="text-xl italic font-heebo">
              „Pa da, ove rampe na platou su primer toga kako vrlo često ljudi
              naprave rampe samo reda radi i uopšte ne vode računa o nagibu.“
            </p>
            {/* Play button for testimonial audio */}
            <button
              onClick={() =>
                togglePlayAudio(audioTestemonijal4, isPlayingTestemonijal4, setIsPlayingTestemonijal4)
              }
              className="mt-4 bg-poppy text-white p-2 rounded-lg"
            >
              {isPlayingTestemonijal4 ? "⏸ Pauziraj" : "🔊 Testemonijal"}
            </button>
            {/* Audio for testimonial */}
            <audio ref={audioTestemonijal4} src={Testemonijal4} />
          </div>
        </div>

        {/* Kartica 5 - Slika stepenica unutar fakulteta */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="border-4 border-black p-2 rounded-lg shadow-lg">
              <img
                src={devojkaNaFaksu}
                alt="Devojka na fakultetu"
                className="rounded-lg shadow-lg object-cover w-full md:w-auto"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-center font-taviraj">
              Prepreke unutar fakulteta
            </h3>
            {/* Play button for image audio */}
            <button
              onClick={() => togglePlayAudio(audioSlika5, isPlayingSlika5, setIsPlayingSlika5)}
              className="mt-4 bg-poppy text-white p-2 rounded-lg"
            >
              {isPlayingSlika5 ? "⏸ Pauziraj" : "🔊 Opis slike"}
            </button>
            {/* Audio for image */}
            <audio ref={audioSlika5} src={Slika5opis} />
          </div>

          <div className="w-full md:max-w-md p-6 rounded-lg shadow-lg text-center border-2 border-black mx-auto">
            <p className="text-xl italic mb-4 font-heebo">
              “I studenti i profesori su uvek voljni da pomognu tako da su ljudi
              super. Ali osim toga, stvarno ima puno prepreka, počev od platoa,
              pa sve do liftova koji se kvare, rampi koje su nepristupačne…
              Fizičkih prepreka baš ima mnogo.”
            </p>
            <p className="text-xl italic font-heebo">
              “Iznervira me i povredi jedino kada je nešto potpuno nepristupačno,
              takva je npr bila didaktila. Ja sam se prijavila za to jer nisam
              znala gde se ta predavanja održavaju.”
            </p>
            <p className="text-xl pt-2 italic font-heebo">
              “Nepristupačan prilaz stepenice visoke, rampe kao da nema. Potreban
              gelender.”
            </p>
            {/* Play button for testimonial audio */}
            <button
              onClick={() =>
                togglePlayAudio(audioTestemonijal5, isPlayingTestemonijal5, setIsPlayingTestemonijal5)
              }
              className="mt-4 bg-poppy text-white p-2 rounded-lg"
            >
              {isPlayingTestemonijal5 ? "⏸ Pauziraj" : "🔊 Testemonijal"}
            </button>
            {/* Audio for testimonial */}
            <audio ref={audioTestemonijal5} src={Testemonijal5} />
          </div>
        </div>

        {/* Kartica 6 - Slika toaleta */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8">
          <div className="w-full md:w-1/4 flex flex-col items-center">
            <div className="border-4 border-black p-2 rounded-lg shadow-lg">
              <img
                src={toalet}
                alt="Toalet"
                className="rounded-lg shadow-lg object-cover w-full md:w-auto"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-center font-taviraj">
              Toalet
            </h3>
            {/* Play button for image audio */}
            <button
              onClick={() => togglePlayAudio(audioSlika6, isPlayingSlika6, setIsPlayingSlika6)}
              className="mt-4 bg-poppy text-white p-2 rounded-lg"
            >
              {isPlayingSlika6 ? "⏸ Pauziraj" : "🔊 Opis slike"}
            </button>
            {/* Audio for image */}
            <audio ref={audioSlika6} src={Slika6opis} />
          </div>

          <div className="w-full md:max-w-md p-6 rounded-lg shadow-lg text-center border-2 border-black mx-auto">
            <p className="text-xl italic mb-4 font-heebo">
              “Toaleti mali, nedovoljno prostora. Potrebni držači sa strane.”
            </p>
            {/* Play button for testimonial audio */}
            <button
              onClick={() =>
                togglePlayAudio(audioTestemonijal6, isPlayingTestemonijal6, setIsPlayingTestemonijal6)
              }
              className="mt-4 bg-poppy text-white p-2 rounded-lg"
            >
              {isPlayingTestemonijal6 ? "⏸ Pauziraj" : "🔊 Testemonijal"}
            </button>
            {/* Audio for testimonial */}
            <audio ref={audioTestemonijal6} src={Testemonijal6} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Exhibit;
