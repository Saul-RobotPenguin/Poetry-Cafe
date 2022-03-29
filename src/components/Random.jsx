import { randomPoem } from "../services/constants";
import { useState } from "react";
import SendPoemToEmail from "./SendPoemToEmail";

const Random = () => {
  const [author, setAuthorName] = useState("");
  const [title, setTitle] = useState("");
  const [poemLines, setPoemLines] = useState("");
  const [visible, setVisible] = useState(false);

  async function handleRandom() {
    const response = await randomPoem();
    const authorResponse = response.data[0].author;
    const titleResponse = response.data[0].title;
    const poemResponse = response.data[0].lines;
    setAuthorName(authorResponse);
    setTitle(titleResponse);
    setPoemLines(poemResponse);
    console.log(response);
    setVisible(true);
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <button className="btn" onClick={handleRandom}>
          random
        </button>

        {visible && (
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
    </div>
  );
};

export default Random;
