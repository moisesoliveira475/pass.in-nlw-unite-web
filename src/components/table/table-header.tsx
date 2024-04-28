import { ComponentProps } from "react";

interface ITbableHeaderProps extends ComponentProps<'th'>{

}

export function TableHeader(props : ITbableHeaderProps) {
  return (
    <th {...props} className='py-3 px-4 text-sm font-semibold text-left'/>
  )
}