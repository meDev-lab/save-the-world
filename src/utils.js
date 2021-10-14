export const initialArray = [
  { id: 1, name: "item one", tags: ["music", "sport", "science"] },
  { id: 2, name: "item two", tags: ["music"] },
  { id: 3, name: "item three", tags: ["fun"] },
  { id: 4, name: "item four", tags: ["sport", "science"] },
  { id: 5, name: "item five", tags: [] },
  { id: 6, name: "item six", tags: ["sport"] }
];

export const correctResult = {
  sport: [
    { id: 6, name: "item six", tags: ["sport"] },
    { id: 4, name: "item four", tags: ["sport", "science"] },
    { id: 1, name: "item one", tags: ["music", "sport", "science"] }
  ],
  music: [
    { id: 2, name: "item two", tags: ["music"] },
    { id: 1, name: "item one", tags: ["music", "sport", "science"] }
  ],
  science: [
    { id: 1, name: "item one", tags: ["music", "sport", "science"] },
    { id: 4, name: "item four", tags: ["sport", "science"] }
  ],
  fun: [{ id: 3, name: "item three", tags: ["fun"] }],
  "without tag": [{ id: 5, name: "item five", tags: [] }]
};

// https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
export const sortResults = (obj) => {
  try {
    return Object.keys(obj)
      .sort()
      .reduce((acc, key) => {
        acc[key] = obj[key].sort((prev, next) => prev.id - next.id);
        return acc;
      }, {});
  } catch (e) {
    // console.log(obj);
    return { error: true };
  }
};

export const printResults = (obj) => JSON.stringify(sortResults(obj), null, 2);
