import { ComponentProps } from "react"

interface INavLinkProps extends ComponentProps<'a'>{
  children: string
}

export function NavLink(props : INavLinkProps) {
  return (
    <a {...props} href="" className="font-medium text-sm">
      {props.children}
    </a>
  )
}