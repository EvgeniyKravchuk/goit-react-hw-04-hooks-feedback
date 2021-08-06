import PropTypes from "prop-types";
import { Button } from "./Buttons.styled";
import { Section, Undertitle } from "../generalComponents/general.styled";

export default function Buttons({ state, onClick }) {
  return (
    <Section>
      <Undertitle>Please, leave feedback:</Undertitle>
      {Object.keys(state).map((key) => (
        <Button key={key} type="button" name={key} onClick={onClick}>
          {key}
        </Button>
      ))}
    </Section>
  );
}

Buttons.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};
