import { useState } from "react";
import "./App.module.css";
import Buttons from "./components/buttons/Buttons";
import Feedback from "./components/feedback/Feedback";
import { Wrapper, Title } from "./components/generalComponents/general.styled";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonsOptions = { good, neutral, bad };

  const handleClick = (evt) => {
    const { name } = evt.target;

    switch (name) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const stateValues = Object.values(buttonsOptions);
    const total = stateValues.reduce((previous, current) => previous + current);
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = buttonsOptions;
    const total = countTotalFeedback();
    const percentage = (good / total) * 100;

    if (!total) {
      return 0;
    }

    return percentage.toFixed();
  };

  return (
    <Wrapper>
      <Title>Feedbacks</Title>
      <Buttons
        state={buttonsOptions}
        onClick={(evt) => {
          handleClick(evt);
        }}
      />
      <Feedback
        state={buttonsOptions}
        total={countTotalFeedback}
        percentage={countPositiveFeedbackPercentage}
      />
    </Wrapper>
  );
}
