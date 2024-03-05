import Left from "@components/Left/Left";
import Right from "@components/Right/Right";
import "./index.css";

function App() {
  return (
    <div className="flex flex-row justify-center items-start h-screen">
      <div className="w-[40%]">
        <Left />
      </div>
      <div className="w-[60%] h-full">
        <Right />
      </div>
    </div>
  );
}

export default App;
