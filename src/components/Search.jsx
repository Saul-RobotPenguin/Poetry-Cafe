import { searchPoemByTitle } from "../services/constants";
import { useState } from "react";
import SendPoemToEmail from "../components/SendPoemToEmail";

const Search = () => {
  const [titleSearchOnly, setTitleSearchOnly] = useState("");

  //Display Title and Poem
  const [title, setTitle] = useState("");
  const [author, setAuthorName] = useState("");
  const [poems, setPoems] = useState([]);
  const [poemLines, setPoemLines] = useState("");
  const [visible, setVisible] = useState(false);
  const [poemVisible, setPoemVisible] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [selectedPoem, setSelectedPoem] = useState([]);

  function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

  async function handleSearchByTitle() {
    try {
      setVisible(false);
      const response = await searchPoemByTitle(titleSearchOnly);
      const poemsResponse = response;
      // const poemsResponse = response.data;
      setPoems(poemsResponse.data);
      console.log(poems);
      setVisible(true);
    } catch (error) {
      console.log("Error Was FVOWDNFVOWN");
      setShowErrorMessage(true);
      console.log(poems.length);
      console.log("no poems");
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  }

  function seePoem(poems) {
    setVisible(false);
    setPoemVisible(true);
    setSelectedPoem(poems);
    console.log(selectedPoem);
    setAuthorName(poems.poemDataChosen.author);
    console.log(author);
    setTitle(poems.poemDataChosen.title);
    setPoemLines(poems.poemDataChosen.lines);
  }

  return (
    <>
      <div className=" grid justify-center ">
        <div className="mb-3 xl:w-96 ">
          {showErrorMessage && (
            <div className="alert alert-warning shadow-lg">
              <div>
                <span>Sorry, No Result was found, please try again!</span>
              </div>
            </div>
          )}

          <div className="input-group relative flex  items-stretch w-full mb-4   ">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-white-800 bg-base-200 bg-clip-padding border border-solid border-gray-300 rounded  "
              placeholder="Search By Title"
              value={titleSearchOnly}
              onChange={(event) => setTitleSearchOnly(event.target.value)}
            />
            <button
              className="btn inline-block px-6 py-2 border-2 font-medium text-xs leading-tight uppercase rounded hover:bg-base-900"
              type="button"
              onClick={handleSearchByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className=" grid justify-center ">
        <div className="mb-3 xl:w-96 ">
          <div className="input-group relative flex  items-stretch w-full mb-4   "></div>
        </div>
        {visible && (
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
            {poems.map((poem, i) => (
              <div className=" w-full lg:max-w-full lg:flex" key={i}>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80"
                      alt="poem"
                    />
                  </figure>
                  <div className="card-body">
                    <h1 className="card-title text-xl">{poem.title}</h1>
                    <h3 className="card-title text-base">By {poem.author}</h3>
                    <p className="italic">Sample Excerpt</p>
                    <p>{poem.lines[0]}</p>
                    <p>{poem.lines[1]}</p>
                    <p>{poem.lines[2]}......</p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          seePoem({
                            poemDataChosen: poem,
                          })
                        }
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {poemVisible && (
          <div className="card w-96 bg-base-100 shadow-xl hover:none">
            <div className="card-body">
              <h2 className="card-title text-2xl">{title}</h2>
              <h1 className="text-xl pb-5">By {author}</h1>
              <SendPoemToEmail
                title={title}
                author={author}
                poemLines={poemLines}
              />
              {poemLines.length &&
                poemLines.map((poemLine, i) => (
                  <p className="py-1">{poemLine}</p>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
