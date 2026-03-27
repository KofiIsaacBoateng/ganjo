import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="h-dvh w-full flex items-center justify-center bg-indigo-950">
      <h1 className="text-3xl">Hello Ganjo!</h1>
    </div>
  );
}

export default App;
