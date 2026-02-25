import './style.css';
import { Bejegyzes } from './Bejegyzes.ts';

const init = function () {
  const arr = [
    new Bejegyzes('TesztCím', 'Teszt adatok random tartalom blablabla', '#FFFFFF'),
    new Bejegyzes('Másik cím teszt', 'Ez a második tesztadat tartalma.', '#ff0000'),
  ];
};

document.addEventListener('DOMContentLoaded', init);