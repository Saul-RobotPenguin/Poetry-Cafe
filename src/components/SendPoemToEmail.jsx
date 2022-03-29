import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SendPoemToEmail = (props) => {
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState(false);

  //Local Storage
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    emailEl.current.value = window.localStorage.getItem("email");
  });

  const handleOnCheckboxChange = () => {
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;
    if (!email) {
      console.log("ERROR");
      return;
    }
    const emailObject = {
      email,
    };

    if (storeData) {
      window.localStorage.setItem("email", email);
      console.log(emailObject);
    } else {
      window.localStorage.removeItem("email", email);
    }
  };

  const [userEmail, setUserEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        "template_afo0t6l",
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailStatus(true);
          setTimeout(() => {
            setEmailStatus(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      {emailStatus && (
        <div className="alert alert-warning shadow-lg">
          <div>
            <span>Email Has Been Sent!</span>
          </div>
        </div>
      )}
      <form className=" " ref={form} onSubmit={sendEmail} autocomplete="off">
        <input
          className=" form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-white-800 bg-base-200 bg-clip-padding border border-solid border-gray-300 rounded "
          type="email"
          name="user_email"
          placeholder="Your Email"
          ref={emailEl}
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          autoComplete="off"
        />
        <div className="flex items-center my-2">
          <button
            className="btn inline-block  border-2 font-medium text-xs leading-tight uppercase rounded hover:bg-base-900 "
            type=" submit"
            value="Send"
          >
            <textarea
              className="hidden "
              name="title"
              value={props.title}
              autoComplete="off"
            />
            <textarea
              className="hidden "
              name="author"
              value={props.author}
              autoComplete="off"
            />
            <textarea
              className="hidden "
              name="message"
              value={props.poemLines}
              autoComplete="off"
            />
            Email Me This Poem
          </button>

          <input
            id="checkbox-1"
            aria-describedby="checkbox-1"
            ref={storeDataEl}
            onChange={handleOnCheckboxChange}
            type="checkbox"
            autoComplete="off"
            className=" w-4 h-4 text-base-600 bg-base-200 rounded border-gray-300 focus:ring-base-500 dark:focus:ring-base-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-3 "
          />
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-base-900 dark:text-base-300"
          >
            Remember Me
          </label>
        </div>
      </form>
    </div>
  );
};

export default SendPoemToEmail;
