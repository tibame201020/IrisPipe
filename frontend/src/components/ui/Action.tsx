import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '../../lib/cn'

type ActionTone = 'primary' | 'outline' | 'ghost' | 'danger' | 'dangerGhost' | 'toolbar' | 'icon'
type ActionSize = 'xs' | 'sm' | 'md'

type ActionClassOptions = {
  tone?: ActionTone
  size?: ActionSize
  block?: boolean
  square?: boolean
  className?: string
}

const sizeClassMap: Record<ActionSize, string> = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: '',
}

const toneClassMap: Record<ActionTone, string> = {
  primary: 'btn-primary gap-2',
  outline: 'btn-outline gap-2',
  ghost: 'btn-ghost gap-2',
  danger: 'btn-error gap-2',
  dangerGhost: 'btn-ghost gap-2 text-error hover:bg-error/10',
  toolbar: 'btn-ghost gap-2 border-base-300 bg-base-100 hover:bg-base-200',
  icon: 'btn-ghost',
}

export function actionClass({
  tone = 'ghost',
  size = 'sm',
  block = false,
  square = false,
  className,
}: ActionClassOptions = {}) {
  return cn(
    'btn',
    sizeClassMap[size],
    toneClassMap[tone],
    square && 'btn-square',
    block && 'w-full',
    className,
  )
}

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ActionClassOptions & {
  children: ReactNode
}

export function ActionButton({
  tone = 'ghost',
  size = 'sm',
  block = false,
  square = false,
  className,
  children,
  ...props
}: ActionButtonProps) {
  return (
    <button
      type={props.type ?? 'button'}
      className={actionClass({ tone, size, block, square, className })}
      {...props}
    >
      {children}
    </button>
  )
}

type ActionLinkProps = Omit<LinkProps, 'className'> & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & ActionClassOptions & {
  children: ReactNode
}

export function ActionLink({
  tone = 'ghost',
  size = 'sm',
  block = false,
  square = false,
  className,
  children,
  ...props
}: ActionLinkProps) {
  return (
    <Link
      className={actionClass({ tone, size, block, square, className })}
      {...props}
    >
      {children}
    </Link>
  )
}
