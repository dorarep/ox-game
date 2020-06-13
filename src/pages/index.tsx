import styled from 'styled-components'
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #E1E6EC;
`;

const Board = styled.div`
  width: 320px;
  height: 320px;
  margin: auto;
  display: grid;
  grid-gap: .5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  border-radius: 1rem;
  padding: 1rem;
  box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFFFFF;
`;

type Props = {
  isOpponent?: boolean;
}

const Circle = styled.div<Props>`
  height: 100%;
  width: 100%;
  background-color: ${({white}) => white ? 'white' : 'rgba(136, 165, 191, 0.48)'};
  border-radius: 50%;
  box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFFFFF;
`;

const Grid = styled.div`
  height: 100%;
  width: 100%;
  
  background-color: #E1E6EC;
  border-radius: 50%;
  box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFFFFF;
`;

export default function Home() {
  const [board, setBoard] = useState<number[][]>([[0, 1, 0], [0, 2, 0], [0, 0, 0]]);
  const onClick = (x, y) => {
    board[x][y] = 1;
    setBoard([ ...board ]);
  };

  return (
    <Wrapper>
      <Board>
        {board.map((rows, x) => rows.map((grid, y) => {
          if (grid === 0) { return <Grid key={y + x * 3} onClick={() => onClick(x, y)} />; }
          if (grid === 1) { return <Circle key={y + x * 3} />; }
          return <Circle key={y + x * 3} white />;
        }))}
      </Board>
    </Wrapper>
  )
}
