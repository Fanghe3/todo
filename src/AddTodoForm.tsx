import React, { useState } from "react";

interface Props {
 
    handleInput: handleInput;
}

export const AddTodoForm: React.FC<Props> = ({  handleInput }) => {
   const [text, setText] = useState('');

  return (
    <form>
      <input type="text" value={text} onChange = { (e) => setText(e.target.value)}/>
          <button type="submit" onClick={(e) => {
              e.preventDefault();
              handleInput(text);
              setText('');
              } }>Add Todo</button>
    </form>
  );
};
