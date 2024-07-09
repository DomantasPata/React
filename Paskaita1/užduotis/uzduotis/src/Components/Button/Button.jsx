function handleClick() {
  console.log("As esu mygtukao komponentas");
}

export default function Button() {
  return <button onClick={handleClick}>Spausk mane</button>;
}
