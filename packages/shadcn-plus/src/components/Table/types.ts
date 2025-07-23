export type ITableColumn<T> = {
  title: string;
  dataIndex: string;
  width?: string | number;
  render?: (value: string, record: T, index: number) => React.ReactNode;
};

export type ITableType<T> = React.ComponentProps<'table'> & {
  data: T[];
  columns: ITableColumn<T>[];
  caption?: string;
  virtual?: boolean;
};
