import './style.css';
import { Bejegyzes } from './Bejegyzes.ts';

const init = function () {
  const arr: Bejegyzes[] = [
    new Bejegyzes('TesztCím', 'Teszt adatok random tartalom blablabla', '#2b00ff'),
    new Bejegyzes('Másik cím teszt', 'Ez a második tesztadat tartalma.', '#ff0000'),
  ];
  megjelenit(arr);
};

const megjelenit = function (arr: Bejegyzes[]) {
  // console.log(arr);
  const container = document.getElementById('bejegyzesekContainer') as HTMLElement;
  arr.forEach((bejegyzes: Bejegyzes) => {
    const articleElement = document.createElement('article') as HTMLElement;
    const titleElement = document.createElement('h2') as HTMLElement;
    const contentElement = document.createElement('p') as HTMLElement;

    articleElement.style.color = bejegyzes.color;
    titleElement.textContent = bejegyzes.title;
    contentElement.textContent = bejegyzes.content;

    container.appendChild(articleElement);
    articleElement.appendChild(titleElement);
    articleElement.appendChild(contentElement);
  });
};

document.addEventListener('DOMContentLoaded', init);