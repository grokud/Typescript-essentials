type ErrorShape = {
  message: string;
  code: number;
};

type DataShape<TData> = {
    data: TData,
    error?: ErrorShape;
}

type GetUserData = DataShape<{
    id: string;
    name: string;
}>;

type GetPostsData = DataShape<{
    id: string;
    title: string;
}>;

type GetCommentsData = DataShape<{
    id: string;
    content: string;
}>;
