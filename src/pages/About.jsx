import React from "react";
import Header from "../components/Header";
import { Target } from "lucide-react";
import { Eye } from "lucide-react";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="flex-grow flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sansCondensed text-center mt-4 md:mt-6 lg:mt-8">
          Ko smo mi?
        </h1>

        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto flex flex-col justify-center p-4 md:p-6 lg:p-8">
          <p className="font-taviraj italic text-base md:text-lg lg:text-xl text-center mb-4">
            Mi smo Pokret za inkluzivno studiranje, sačinjen od studenata psihologije na Filozofskom fakultetu u Beogradu.
          </p>

          <p className="font-heebo text-sm md:text-base lg:text-lg text-justify leading-relaxed md:leading-relaxed lg:leading-loose">
            Formirani smo u novembru 2023. godine s ciljem da podignemo svest o izazovima sa kojima se suočavaju studenti sa invaliditetom i da se borimo za pristupačnost fakulteta koji pohađamo, kao i univerziteta. Ovo je od istinske važnosti jer omogućava svim studentima, bez obzira na njihove fizičke ili mentalne sposobnosti, ravnopravan pristup obrazovanju i punom uživanju akademskog života. Pristupačnost je ključna za stvaranje inkluzivnog okruženja u kojem svi imaju jednake prilike za uspeh i razvoj, bez diskriminacije i prepreka.
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-evenly m-4">
          <div className="animate-slideLeft">
            <AboutCard
              icon={Target}
              title="Misija"
              description="Ostvarivanje cilja kroz edukaciju o inkluziji i konstantnu komunikaciju sa studentima koji imaju potrebu za dodatnom podrškom. Pokret poziva sve koji dele ove vrednosti da se priključe u podršci i širenju svesti o važnosti ovih tema."
            />
          </div>
          <div className="animate-slideRight">
            <AboutCard
              icon={Eye}
              title="Vizija"
              description="Stvaranje obrazovnog okruženja koje je potpuno inkluzivno i pristupačno za sve studente, posebno za studente sa invaliditetom, kroz podizanje svesti o izazovima s kojima se suočavaju i borbu za unapređenje pristupa obrazovnim institucijama."
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
