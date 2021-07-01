import React, { Component } from'react'
import Statistics from './components/Statistics';
import Section from './components/Section';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Notification from './components/Notification';

class App extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        vibilde: false
      }

      show = () => {
          this.setState({visible: true})
      }

      hide = () => {
          this.setState({visible:false})
      }

      buttonGood = () => {
        this.setState(prevState =>{
            return {
                good: prevState.good + 1,
            }
        })
      }
      buttonNeutral= () =>{
         this.setState(prevState =>{
             return {
                 neutral: prevState.neutral + 1,
             }
         })
       }
       buttonBad = () =>{
         this.setState(prevState =>{
             return {
                 bad: prevState.bad + 1,
             }
         })
       }

    render(){
        const {visible, bad, good, neutral} = this.state;
        const positivePercentage = `${Math.round((good/(good + bad)) * 100).toFixed(0)}`
        return(
            <>
            <Section title="Please leave feedback"></Section>

            <FeedbackOptions 
            onButtonGood={this.buttonGood} 
            onButtonNeutral={this.buttonNeutral} 
            onButtonBad={this.buttonBad}
            onShow = {this.show}
            />

            <Section title="Statictics"></Section>

            {visible &&
            <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={`${good + neutral + bad}`} 
            positivePercentage={positivePercentage}>
            </Statistics> 
            }
            
            {!visible &&
            <Notification message="No feedback given"></Notification>}
        </>
        )
    }
}

export default App;