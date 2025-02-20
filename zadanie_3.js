//Sprawdź, czy obiekt Map jest iterable i wyświetl jego klucze i wartości.

function checkIterable(map) {
  console.log(
    [map != null && typeof map[Symbol.iterator] === "function"],
    Object.keys(map),
    Object.values(map)
  );
}

const map = {
  1: "jeden",
  2: "dwa",
  3: "trzy",
};
return checkIterable(map);