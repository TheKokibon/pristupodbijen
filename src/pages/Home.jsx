import React, { useRef, useState } from "react";
import znak from "../assets/pocetnastranicaZnak.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import euzatebe from "../assets/euzatebelogo.png";
import boslogo from "../assets/boslogo1.png";
import pokret from "../assets/pokretzainkluzivnostudiranje.png";
import heroSekcija from "../assets/audio/heroSekcija.mp3";
import Zasto from "../assets/audio/Zasto.mp3";
import prijateljiPrograma from "../assets/audio/PrijateljiPrograma.mp3";

import { Equal, ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  // Refs for audios
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);

  // State to keep track of currently playing audio
  const [currentAudio, setCurrentAudio] = useState(null);

  // State to manage play/pause status of each button
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);

  // Function to reset all play states
  const resetAllIsPlaying = () => {
    setIsPlaying1(false);
    setIsPlaying2(false);
    setIsPlaying3(false);
  };

  // Function to play a specific audio and manage button states
  const playAudio = (audioRef, setIsPlaying) => {
    // Pause currently playing audio
    if (currentAudio) {
      currentAudio.pause();
    }

    // Reset all play states before playing the new audio
    resetAllIsPlaying();

    // Play the new audio
    audioRef.current.play();
    setCurrentAudio(audioRef.current);

    // Set the current button state to "playing"
    setIsPlaying(true);

    // Reset the button state when the audio ends
    audioRef.current.onended = () => {
      setIsPlaying(false);
      setCurrentAudio(null);
    };
  };

  const togglePlayAudio1 = () => {
    if (isPlaying1) {
      // Pause the audio
      audioRef1.current.pause();
      setIsPlaying1(false);
      setCurrentAudio(null);
    } else {
      playAudio(audioRef1, setIsPlaying1);
    }
  };

  const togglePlayAudio2 = () => {
    if (isPlaying2) {
      audioRef2.current.pause();
      setIsPlaying2(false);
      setCurrentAudio(null);
    } else {
      playAudio(audioRef2, setIsPlaying2);
    }
  };

  const togglePlayAudio3 = () => {
    if (isPlaying3) {
      audioRef3.current.pause();
      setIsPlaying3(false);
      setCurrentAudio(null);
    } else {
      playAudio(audioRef3, setIsPlaying3);
    }
  };

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
          <div className="flex flex-row gap-10 justify-center">
            <button className="bg-poppy text-white mt-4 self-center md:self-start p-2 rounded-lg font-bold font-sansCondensed hover:bg-red-900 hover:shadow-lg transition duration-300 ease-in-out">
              Pogledaj izložbu
            </button>
            <button
              onClick={togglePlayAudio1}
              className="bg-poppy text-white mt-4 self-center md:self-start p-2 rounded-lg font-bold font-sansCondensed hover:bg-red-900 hover:shadow-lg transition duration-300 ease-in-out"
            >
              {isPlaying1 ? "⏸ Pauziraj" : "🔊 Pročitaj"}
            </button>
          </div>

          {/* Audio Element */}
          <audio ref={audioRef1} src={heroSekcija} />
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
      <div className="flex flex-col justify-center items-center p-4">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sansCondensed text-center mt-2 md:mt-4 lg:mt-6 p-4">
            Zašto?
          </h1>
          <button
            onClick={togglePlayAudio2}
            className="bg-poppy text-white mt-4 mx-auto self-center md:self-start p-2 rounded-lg font-bold font-sansCondensed hover:bg-red-900 hover:shadow-lg transition duration-300 ease-in-out"
          >
            {isPlaying2 ? "⏸ Pauziraj" : "🔊 Pročitaj"}
          </button>
          <audio ref={audioRef2} src={Zasto}></audio>
        </div>

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
            <h3 className="font-taviraj font-bold text-lg">Veća inkluzivnost</h3>
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
          <p className="text-lg font-bold font-taviraj text-black">
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

      <hr className="w-1/2 mx-auto border-black border-t-2 rounded-full my-4" />

      {/* Prijatelji programa Section */}
      <div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sansCondensed text-center mt-2 md:mt-4 lg:mt-6 p-4">
            Prijatelji programa
          </h1>
          <button
            onClick={togglePlayAudio3}
            className="bg-poppy text-white mt-4 mx-auto self-center md:self-start p-2 rounded-lg font-bold font-sansCondensed hover:bg-red-900 hover:shadow-lg transition duration-300 ease-in-out"
          >
            {isPlaying3 ? "⏸ Pauziraj" : "🔊 Pročitaj"}
          </button>
          <audio ref={audioRef3} src={prijateljiPrograma}></audio>
        </div>

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
