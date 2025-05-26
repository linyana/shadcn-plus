export type ITableColumn<T> = {
  title: string;
  dataIndex: string;
  render?: (value: string, record: T, index: number) => React.ReactNode;
}

export type ITableType<T> = React.ComponentProps<"table"> & {
  data: T[];
  columns: ITableColumn<T>[];
  caption?: string;
  virtual?: boolean
}