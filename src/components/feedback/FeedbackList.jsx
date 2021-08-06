import PropTypes from "prop-types";
import { List, Item } from "./Feedback.styled";

export default function FeedbackList({ state, total, percentage }) {
  return (
    <List>
      {Object.keys(state).map((key) => (
        <Item key={key}>
          {key}: {state[key]}.
        </Item>
      ))}
      <Item>Total: {total()}</Item>
      <Item>Positive feedbacks: {percentage()}%</Item>
    </List>
  );
}

FeedbackList.propTypes = {
  percentage: PropTypes.func,
  state: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  total: PropTypes.func,
};
