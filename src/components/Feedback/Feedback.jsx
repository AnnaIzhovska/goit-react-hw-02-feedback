import React, { Component } from'react'
import Statistics from '../Statistics';
import Section from '../Section';
import FeedbackOptions from '../Feedback/FeedbackOptions';
import Notification from '../Notification';

class Feedback extends Component{
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
            positivePercentage={`${Math.round((good/(good + bad)) * 100).toFixed(0)}`}>
            </Statistics> 
            }
            
            {!visible &&
            <Notification message="No feedback given"></Notification>}
        </>
        )
    }
}

export default Feedback;