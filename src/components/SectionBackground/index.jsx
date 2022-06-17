import P from 'prop-types';
import * as Styled from './styles';

export const SectionBackground = ({ children }) => {
  return (
    <Styled.Container>
      <div className="boxWrap">{children}</div>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
};
