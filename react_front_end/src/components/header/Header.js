import "./Header.css";
import imag from './imag.jpg'

export default function Header() {
  return (
    <div className="head">
      <h2 className="mt-1 fw-bold">𝐵𝐿𝒪𝒢𝒮</h2>

      <img
        className="headerImg mt-1"
        src={imag}
        alt=""
      />
        
    </div>


  );
}
