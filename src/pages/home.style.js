import { styled } from 'fusion-plugin-styletron-react';

export const Container = styled('div', {
  width: '100%',
});

export const Title = styled('div', {
  textAlign: 'center',
});

export const ImagesContainer = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
});

export const Img = styled('img', {
  width: '300px',
  height: '200px',
  cursor: 'pointer',
  marginLeft: '45px',
  marginBottom: '10px',
});

export const ScoresWrap = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

export const PlayersInformation = styled('div', {
  margin: '0 30px 20px 45px',
});

export const Score = styled('p', { margin: '0' });

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
