import React, { Component } from 'react'

class Note extends Component {
  confirmLeave(e){
    let confirmationMessage = 'Are you sure you want to leave?';
    e.returnValue = confirmationMessage
    return confirmationMessage
  }
  componentWillMount(){
    console.log('Attaching confirmLeave event listener for beforeUnload!')
    window.addEventListener('beforeunload', this.confirmLeave)
  }
  componentWillUnmount(){
    console.log('Removing confirmLeave event listener for beforeUnload!')
    window.removeEventListener('beforeunload', this.confirmLeave)
  }
  render(){

    
let secondsLeft = 5;
let interval = setInterval(() => {
  if (secondsLeft === 0) {
    return <div>Note was removed after {secondsLeft} left</div>
    clearInterval(interval)
  } else {
    return (
      <div>
        <Note secondsLeft={secondsLeft} />
      </div>
    );
  }
  secondsLeft--;
}, 1000);


    console.log('Render')
    return (
      <div>
        {this.props.secondsLeft}
      </div>
    )
  }
}
export default Note;