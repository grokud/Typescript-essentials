const createSet = <T>(initial: T) => {
  return new Set<T>([initial]);
};

const numberSet = createSet(123);
numberSet.add(2);

const stringSetTwo = createSet("matt");
stringSetTwo.add("pocock");
