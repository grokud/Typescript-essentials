// 1. Passing types to types
type PartialUser = Partial<{ id: string; name: string }>;

// 2. Passing types to functions
const stringSet = new Set<string>();

// 3. Inferring types from arguments passed to functions
const objKeys = <T extends object>(obj: T): Array<keyof T> => {
  return Object.keys(obj) as Array<keyof T>;
};

const keys = objKeys({ a: 1, b: 2 });


