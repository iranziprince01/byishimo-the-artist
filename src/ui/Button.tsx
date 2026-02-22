import { forwardRef } from 'react'

type ButtonVariant = 'primary' | 'primaryOnDark' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  children: React.ReactNode
  as?: 'a' | 'button'
  href?: string
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  /* Light sections (white/cream): dark blue button */
  primary:
    '!bg-navy-800 !text-cream font-semibold hover:!bg-navy-700 border border-navy-700 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-navy-600 focus-visible:ring-offset-2',
  /* Dark navy section: white or light gold button */
  primaryOnDark:
    '!bg-goldLight !text-navy-900 font-semibold hover:!bg-[#ffec33] border border-navy-800/30 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-goldLight focus-visible:ring-offset-2',
  secondary:
    '!bg-navy-800 !text-cream font-semibold hover:!bg-navy-700 border border-navy-700 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-navy-600 focus-visible:ring-offset-2',
  outline:
    '!bg-navy-100 !text-navy-800 font-semibold border-2 border-navy-700 hover:!bg-navy-800 hover:!text-cream focus-visible:ring-2 focus-visible:ring-navy-600 focus-visible:ring-offset-2',
  ghost:
    '!bg-navy-100 !text-navy-800 font-medium hover:!bg-navy-200 hover:!text-navy-900 border border-navy-200 focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2',
}

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      children,
      as = 'a',
      href = '#',
      className = '',
      ...props
    },
    ref
  ) => {
    const base =
      'inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 sm:px-6 rounded-xl transition-all duration-200 focus:outline-none hover:scale-[1.02] active:scale-[0.98] touch-manipulation'

    const combined = `${base} ${variantStyles[variant]} ${className}`

    const commonProps = {
      className: combined,
      'data-button-variant': variant,
    }

    if (as === 'button') {
      const { type = 'button', ...buttonProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type={type}
          {...commonProps}
          {...buttonProps}
        >
          {children}
        </button>
      )
    }

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        {...commonProps}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }
)

Button.displayName = 'Button'
