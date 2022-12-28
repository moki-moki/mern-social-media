import { useEffect, useRef, useState } from "react";
import { CommentInputContainer, CommentInputForm } from "./styles/CommentInputStyles/CommentInputStyle";
import { postComment } from "./utils/apiHelpers";

const CommentInput = ({ setShowInput, showInput, postId, userId }) => {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    let closeInput = (e) => {
      if (!inputRef.current.contains(e.target)) {
        setShowInput(!showInput);
      }
    };

    document.addEventListener("mousedown", closeInput);

    return () => {
      document.removeEventListener("mousedown", closeInput);
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(postId, inputText, userId);
  };

  return (
    <div ref={inputRef}>
      <CommentInputContainer onSubmit={(e) => handleSubmit(e)}>
        <CommentInputForm onChange={(e) => setInputText(e.target.value)} placeholder="Type your comment here..." type="text" />
      </CommentInputContainer>
    </div>
  );
};

export default CommentInput;
