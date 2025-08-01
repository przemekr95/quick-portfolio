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
    target='_blank'
    rel='noopener noreferrer'
    {...rest}
  >
    {children}
    <span className={styles.button__icon} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L17 7M17 7H7M17 7V17"/>
      </svg>
    </span>
  </a>
);

export default Button