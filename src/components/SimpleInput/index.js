import React, {Component} from 'react'

import './styles.css'

class Input extends Component {
 state = {
   name: this.props.name,
   label: this.props.label,
   onChangeHandler: this.props.onChange,
   value: this.props.value,
   type: this.props.type,
   className: this.props.className,
   pattern: this.props.pattern
 }

 componentWillReceiveProps(nextProps) {
   this.setState({value: nextProps.value})
 }

 render() {
   const className = [
     'simple-input',
     this.state.className,
     this.state.name ? `${this.state.className}--${this.state.name}` : null,
   ].join(' ')

   return (
     <input
       className={className}
       name={this.state.name}
       value={this.state.value}
       type={this.state.type}
       onChange={this.state.onChangeHandler}
       pattern={this.state.pattern}
     />
   )
 }
}

export default Input
