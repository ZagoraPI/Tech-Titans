import { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./DropdownMenue";
import TextBox from "./TextBox";
const TheJj = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="button-container">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>Open Dropdown</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <TextBox count1={count} style={{ color: "white", backgroundColor: "blue" }} />
    </div>
  );
};

export default TheJj;
