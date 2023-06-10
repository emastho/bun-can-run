type No = 0;
type Yes = 1;
type Partially = 2;

interface Table {
  works: No | Yes | Partially,
  module: string,
  github: string,
  when?: string,
  comments?: string,
}

function sortArrayOfObjects(a: Table[]) {
  return a.sort((a, b) => {
    const nameA = a.module.toUpperCase(); // ignore upper and lowercase
    const nameB = b.module.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) return -1;
    if (nameA < nameB) return 1;
  
    return 0;
  });
}

function ArrayOfObjectsToJSON(table: Table[]) {
  return JSON.stringify(table);
}

function WriteJSONToFile(json: string) {
  const a = Bun.write("../data.json", json);
}

function program(table: Table[]) {
  const a = sortArrayOfObjects(table)
  const b = ArrayOfObjectsToJSON(a)
  const c = WriteJSONToFile(b)
}

//

const table: Table[] = [
  {
    works: 1,
    module: "module",
    github: "maybe",
  }
]

program(table)