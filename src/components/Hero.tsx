import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <header className="flex w-full items-center justify-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 h-16 pt-8">
        <img src={logo} alt="Sumz logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/ebukaeze")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <div>
        <h1 className="head_text">
          Summarize Articles with <br className="max-md:hidden" />
        </h1>
        <h2
          className="head_text orange_gradient py-4 px-3 mt-4 bg-gradient-to-r from-pink-800 text-center 
          to-orange-600 text-6xl text-white font-bold"
        >
          {" "}
          Open AI GPT-4
        </h2>
        <h3 className="desc">
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
