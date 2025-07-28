import styles from './button.module.scss'

const Button = ({
  children,
  href,
  className = '',
  ariaLabel,
  ...rest
}) => (
  <a
    href={href}
    className={`${styles.button} ${className}`}
    aria-label={ariaLabel}
    {...rest}
  >
    {children}
  </a>
);

export default Button