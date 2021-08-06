import FeedbackList from "./FeedbackList";
import { Section, Undertitle } from "../generalComponents/general.styled";
import { Notification } from "./Feedback.styled";

export default function Feedback({ state, total, percentage }) {
  return (
    <Section list="true">
      <Undertitle>Statistics:</Undertitle>
      {total() ? (
        <FeedbackList state={state} total={total} percentage={percentage} />
      ) : (
        <Notification>No feedback given</Notification>
      )}
    </Section>
  );
}
