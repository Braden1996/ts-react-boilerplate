import * as React from 'react';

export interface IProps {
  /** this dictates what the button will do  */
  onClick: any;
  /**
   * Disables onclick
   *
   * @default false
   */
  disabled?: boolean;
}

const noop = () => {}; // tslint:disable-line
export const Button = (props: IProps) => {
  const { onClick, disabled = false } = props;
  const disabledclass = disabled ? 'Button_disabled' : '';
  return (
    <div
      className={`Button ${disabledclass}`}
      onClick={!disabled ? onClick : noop}
    >
      <span>Poop</span>
    </div>
  );
};

export default Button;
