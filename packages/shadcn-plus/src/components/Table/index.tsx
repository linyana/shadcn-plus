import {
  Table as ShadcnTable,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ITableType } from './types';

export const Table = <T extends Record<string, any>>({
  columns,
  data,
  caption,
  ...rest
}: ITableType<T>) => {
  return (
    <ShadcnTable {...rest}>
      <TableCaption>{caption}</TableCaption>

      <TableHeader>
        <TableRow>
          {columns.map((col, index) => (
            <TableHead key={index}>{col.title}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((record, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((col, colIndex) => {
              const rawValue = record[col.dataIndex];
              const rendered = col.render
                ? col.render(String(rawValue), record, rowIndex)
                : rawValue;
              return (
                <TableCell key={colIndex}>
                  {rendered}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </ShadcnTable>
  );
};
