import reactImg from '../../assets/react-core-concepts.png' //dynamic value syntax
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() { //most React projex used 'default'
// export function Header() { //this is a NAMED export (no 'default')
  const description = reactDescriptions[genRandomInt(2)]; //dynamic value syntax

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
