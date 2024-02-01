import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img
        src={logoImg}
        alt="Quiz logo which basically is picture of pen and paper"
      />
      <h1>ReactQuiz</h1>
    </header>
  );
}
