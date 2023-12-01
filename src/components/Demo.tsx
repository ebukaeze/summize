import { useState, useEffect } from "react";
import { IoSend } from "react-icons/io5";
//import { FaClipboardCheck } from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";
import { useLazyGetSummaryQuery } from "../services/article";
import loader from "../assets/loader.svg";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState<any>([]);
  //const [copied, setCopied] = useState<any>("");

  console.log(allArticles);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    // const articlesFromLocalStorage = JSON.parse(localStorage.getItem("articles") || '{}');
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

  /* const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => {
      setCopied(false), 3000;
    });
  }; */
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

        {/* <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles?.map((item: any, index: number) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                {copied === item.url ? <FaClipboardCheck /> : <IoCopyOutline />}
              </div>
              <p className="flex-1 font-satoshi text-sm font-medium text-blue-700">
                {item.url}
              </p>
            </div>
          ))}
        </div> */}
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
