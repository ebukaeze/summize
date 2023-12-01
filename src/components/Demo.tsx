import { useState, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { GoPaperclip } from "react-icons/go";
import { useLazyGetSummaryQuery } from "../services/article";
import loader from "../assets/loader.svg";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState<any>([]);

  console.log(allArticles);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const storeUpdatedAllArticle = () => {
      const articlesFromLocalStorage = JSON.parse(
        localStorage.getItem("articles") || "{}"
      );

      if (articlesFromLocalStorage) {
        setAllArticles(articlesFromLocalStorage);
        console.log(allArticles);
      }
    };
    storeUpdatedAllArticle();
  }, []);

  const handleInput = (e: any) => {
    setArticle({
      ...article,
      url: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = {
        ...article,
        summary: data.summary,
      };
      const updatedAllArticle = [newArticle, ...allArticles];
      setArticle(newArticle);
      //transform the json string into an object
      localStorage.setItem("articles", JSON.stringify(updatedAllArticle));
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Searchbar
       */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative justify-center items-center h-16 flex"
          onSubmit={handleSubmit}
        >
          <GoPaperclip className="absolute left-0 ml-3 w-5 flex items-center justify-center" />
          <input
            type="url"
            placeholder="Enter a url"
            value={article.url}
            onChange={handleInput}
            required
            className="url_input h-16 peer"
          />
          <button
            type="submit"
            className="submit_btn text-white focus:text-white peer-focus:border-gray-700 bg-neutral-900"
          >
            <IoSend />
          </button>
        </form>
      </div>
      <div className="flex items-center my-10 max-w-full justify-center">
        {isFetching ? (
          <img
            src={loader}
            alt="loading..."
            className="w-20 h-20 object-contain"
          />
        ) : error ? (
          <>
            <p className="font-inter font-bold text-black text-center">
              I think there's something wrong!
              <br />
            </p>
          </>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-xl text-gray-600">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-Poppins font-medium text-sm text-gray-700">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
