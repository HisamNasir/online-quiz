import Image from "next/image";
import QuizPage from "./pages/QuizPage";

export default function Home() {
  return (
    <main className="h-screen w-full bg-slate-950 flex flex-col justify-center ">
      <div className=" invert">
        <QuizPage />
      </div>
    </main>
  );
}
