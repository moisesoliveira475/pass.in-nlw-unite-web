import { ComponentProps } from "react";

interface ITableRowProps extends ComponentProps<'tr'> {

}

export function TableRow(props: ITableRowProps) {
  return (
    <tr className="className='border-b border-white/10/10 hover:bg-white/5" {...props}/>
  )
}