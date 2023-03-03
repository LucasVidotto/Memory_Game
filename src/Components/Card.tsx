import React from "react";
import * as A from './StyledCard'
import {FaQuestion} from 'react-icons/fa'
type Props={
  id: number,
  value: number,
  clicked: boolean;
  onClick: () => void;
}
const Card: React.FC<Props> = ({id,value,clicked,onClick}) => {

  return (
/*     <CardWrapper show={show} onClick={handleClick}>
      {show ? id : <FaQuestion />}
    </CardWrapper> */

      <A.Cards clicked={clicked} onClick={onClick}>
        {clicked ? value: <FaQuestion />}
      </A.Cards>


  );
};

export default Card;
