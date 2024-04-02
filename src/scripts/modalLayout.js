export const modalLayout = () => {
  const modalLayout = document.createElement('div');
  modalLayout.classList.add('shadow');

  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal-window');

  const title = document.createElement('h2');
  title.classList.add('modal-window__conclusion');
  title.innerText = "You won the game!";

  const message = document.createElement('p');
  message.classList.add('modal-window__message');
  const guessedWordText = document.createTextNode("Guessed word: ");
  const spanElement = document.createElement("span");
  spanElement.classList.add("modal-window__guessed-word");
  spanElement.textContent = "sunrise";
  message.appendChild(guessedWordText);
  message.appendChild(spanElement);

  const button = document.createElement('button');
  button.classList.add('modal-window__button');
  button.innerText = "Play again!";

  modalWindow.append(title);
  modalWindow.append(message);
  modalWindow.append(button);

  modalLayout.append(modalWindow);
  return modalLayout;
}