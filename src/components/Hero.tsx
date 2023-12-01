import Navbar from "./Navbar";

const Hero = () => {
  return (
    <header className="flex w-full relative xs:justify-between items-center justify-center flex-col space-y-28 gap-y-10 h-[40dvh] md:h-[60vh]">
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center h-[calc(40dvh - 56px)] max-w-screen-lg mx-auto text-center">
        <h1 className="head_text text-6xl xs:text-2xl font-semibold">
          Summarize Articles with <br className="max-md:hidden" />
        </h1>
        <h2
          className="head_text orange_gradient xs:text-2xl md:py-4 px-3 md:mt-4 bg-gradient-to-r from-pink-800 text-center 
          to-orange-600 text-3xl text-white font-bold md:text-6xl"
        >
          Open AI GPT-4
        </h2>
        <h3 className="desc xs:text-base">
          Simplify your reading with summize, an open-source
          <article>
            {" "}
            summarizer that transform lengthy article into clear and concise
            summaries
          </article>
        </h3>
      </div>
    </header>
  );
};

export default Hero;
