type GetNameObject<LastName> = {
    firstName : "matt"
    lastName: LastName
}

type NameObject = GetNameObject<"pocock">
