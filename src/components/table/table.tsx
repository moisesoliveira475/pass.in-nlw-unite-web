import { ComponentProps } from "react";

interface ITableProps extends ComponentProps<'table'>{
  
}

export function Table(props: ITableProps) {
  return (
    <div className='border border-white/10/10 rounded-lg'>
      <table className='w-full' {...props}/>    
    </div>
  )
}