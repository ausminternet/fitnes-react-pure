import React, {Component} from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      label: props.label,
      onChangeHandler: props.onChange,
      value: props.value,
      type: props.type
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value})
  }

  render() {
    const className = [
      'input',
      this.state.name ? 'input--' + this.state.name : null,
    ].join(' ')

    return (
      <div className={className}>
        <label className="input__label" htmlFor={this.state.name}>
          {this.state.label}
        </label>
        <input className="input__input" name={this.state.name} value={this.state.value} type={this.state.type} onChange={this.state.onChangeHandler} />
      </div>
    )
  }
}

export default Input

// import React from 'react'

// const Input = ({name, value, label, onChangeHandler, type}) => {
//   const className = [
//     'input',
//     name ? 'input--' + name : null,
//   ].join(' ')

//   return (
//     <div className={className}>
//       <label className="input__label" htmlFor={name}>
//         {label}
//       </label>
//       <input className="input__input" name={name} value={value} type={type} onChange={onChangeHandler} />
//     </div>
//   )
// }

// export default Input
