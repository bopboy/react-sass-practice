import React from "react";
import "./Button.scss";
import classNames from 'classnames';

function Button({ children, size = 'medium' }) {
    // return <button className={['Button', size].join(' ')}>{children}</button>;
    return <button className={classNames('Button', size)}>{children}</button>;
}
// Button.defaultProps = { size: 'medium' };
export default Button;
