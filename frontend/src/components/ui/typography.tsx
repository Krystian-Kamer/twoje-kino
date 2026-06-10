import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ElementType } from 'react';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
      p: 'leading-7',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

const tagMap: Record<
  NonNullable<VariantProps<typeof typographyVariants>['variant']>,
  string
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  p: 'p',
};

interface TypographyProps
  extends
    HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {}

export function Typography({
  variant = 'p',
  className,
  children,
  ...props
}: TypographyProps) {
  const Tag = tagMap[variant!] as ElementType;

  return (
    <Tag className={cn(typographyVariants({ variant, className }))} {...props}>
      {children}
    </Tag>
  );
}
