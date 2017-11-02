import React, {Component} from 'react'

import './styles.css'

class Input extends Component {
 state = {
   onChangeHandler: this.props.onChange,
   value: this.props.value,
 }

 componentWillReceiveProps(nextProps) {
   this.setState({value: nextProps.value})
 }

 render() {
   const className = [
     'simple-input',
     this.props.className,
     this.props.name ? `${this.props.className}--${this.props.name}` : null,
   ].join(' ')

   return (
     <input
       {...this.props}
       className={className}
       value={this.state.value}
       onChange={this.state.onChangeHandler}
     />
   )
 }
}

export default Input
