import React, { SyntheticEvent } from "react";

/**
 * Security Token Picker Properties
 * @member id - The id to bind to the input element
 * @member value - The value to bind to the input element
  * @member onChange - The event handler to call when the input value changes
 */
export interface IVottInputFieldProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
}

/**
 * Security Token Picker
 * @description - Used to display a list of security tokens
 */
export class VottInputField extends React.Component<IVottInputFieldProps> {
  constructor(props:any) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  public render() {
    return (
      <input
        className="form-control"
        value={this.props.value || ''}
        onChange={this.onChange}>
      </input>
    );
  }

  private onChange(e: SyntheticEvent) {
    const inputElement = e.target as HTMLSelectElement;
    this.props.onChange(inputElement.value ? inputElement.value : '');
  }
}
