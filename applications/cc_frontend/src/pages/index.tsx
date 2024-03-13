import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div className="main-page-container">

        <div className="time-boxing">
          <div className="time-boxing__main-list">

          </div>
          <div className="time-boxing__beyond-list">

          </div>
        </div>

        <div className="pomodoro">

        </div>

        <div className="golden-paper">

        </div>

      </div>
  );
}
