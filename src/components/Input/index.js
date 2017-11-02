import React, {Component} from 'react'

class Input extends Component {
 state = {
   name: this.props.name,
   label: this.props.label,
   onChangeHandler: this.props.onChange,
   value: this.props.value,
   type: this.props.type
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
