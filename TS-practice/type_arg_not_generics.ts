type Maybe<T> = T | null | undefined;

type Example = Maybe<string>;

const myFunc = <T>() => {
    // implementation..
}

myFunc<string>();


class MyClass<T> {
    // implementation..
}

new MyClass<string>();
