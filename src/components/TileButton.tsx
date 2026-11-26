import cx from 'classnames'
import React from 'react'

type TileButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

/**
 * A Home tile that runs an action instead of following a link.
 *
 * A native button: unlike an anchor without href or a div with an onClick,
 * it can be reached with Tab, activated with Enter or Space, and is exposed
 * as a button to assistive technologies.
 */
const TileButton = ({
  className,
  children,
  ...props
}: TileButtonProps): JSX.Element => (
  <button
    type="button"
    className={cx('tile-button', 'scale-hover', className)}
    {...props}
  >
    {children}
  </button>
)

export default TileButton
