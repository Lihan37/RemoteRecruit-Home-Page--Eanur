import { ArrowRight } from 'lucide-react';

const variants = {
  primary: 'bg-primary-blue text-white hover:bg-secondary-blue focus-visible:ring-primary-blue',
  secondary:
    'border border-primary-blue/20 bg-white text-primary-blue hover:border-primary-blue/40 hover:bg-light-gray focus-visible:ring-primary-blue',
  accent: 'bg-accent-green text-text-dark hover:bg-accent-green/85 focus-visible:ring-accent-green',
};

export default function Button({
  children,
  className = '',
  icon: Icon = ArrowRight,
  iconPosition = 'right',
  variant = 'primary',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={[
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60',
        variants[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {Icon && iconPosition === 'left' ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      <span>{children}</span>
      {Icon && iconPosition === 'right' ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
    </button>
  );
}
