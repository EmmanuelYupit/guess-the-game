import React, { Component } from 'react';
import { styled } from 'fusion-plugin-styletron-react';
import Modal from 'react-modal';

const Container = styled('div', {
  width: '100%',
});

const Title = styled('div', {
  textAlign: 'center',
});

const ImagesContainer = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
});

const Img = styled('img', {
  width: '300px',
  height: '200px',
  cursor: 'pointer',
  marginLeft: '45px',
  marginBottom: '10px',
});

const ScoresContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '45px',
});

const Score = styled('p', {
  margin: '0',
});
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const initialState = {
  modalIsOpen: false,
  aswers: {
    true:
      'https://cdn2.iconfinder.com/data/icons/pointed-edge-web-navigation/130/tick-green-512.png',
    false:
      'https://www.pngfind.com/pngs/m/185-1850392_cancel-abort-delete-cross-red-error-incorrect-hd.png',
  },
  games: [
    {
      id: 0,
      url: 'https://www3.minijuegosgratis.com/v3/games/thumbnails/229208_1.jpg',
      isCooperative: true,
    },
    {
      id: 1,
      url: 'https://i.blogs.es/7d2036/halo1/450_1000.jpg',
      isCooperative: true,
    },
    {
      id: 2,
      url: 'https://i.blogs.es/572db1/ori-and-the-blind-forest/450_1000.jpg',
      isCooperative: false,
    },
    {
      id: 3,
      url:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/e1/91/5f/e1915f8a-2458-f3c8-ed25-8c209e99775a/AppIcon-1x_U007emarketing-85-220-9.png/246x0w.jpg',
      isCooperative: false,
    },
    {
      id: 4,
      url: 'https://i.blogs.es/32e78b/lifeisstrange00/450_1000.jpg',
      isCooperative: false,
    },
    {
      id: 5,
      url:
        'https://steamcdn-a.akamaihd.net/steam/apps/248820/header.jpg?t=1541784790',
      isCooperative: true,
    },
    {
      id: 6,
      url: 'https://www5.minijuegosgratis.com/v3/games/thumbnails/205432_1.jpg',
      isCooperative: false,
    },
    {
      id: 7,
      url:
        'https://images.gog.com/a4b4a072ce88cb4c8b8a34a45ed283e1a773955c1992f03a83531a66223c15cb_product_card_v2_mobile_slider_639.jpg',
      isCooperative: false,
    },
    {
      id: 8,
      url:
        'https://www.lukiegames.com/assets/images/N64/n64_mario_party_p_4p6j0j.jpg',
      isCooperative: true,
    },
    {
      id: 9,
      url:
        'https://static.playoverwatch.com/img/logos/overwatch-share-4dab210e88.jpg',
      isCooperative: true,
    },
    {
      id: 10,
      url:
        'https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/04/GTA-V-920x584.jpg',
      isCooperative: false,
    },
    {
      id: 11,
      url: 'https://media.redadn.es/imagenes/pokemon-go-android-ios_327227.jpg',
      isCooperative: false,
    },
    {
      id: 12,
      url:
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2016/10/199576-gears-war-tambien-llegara-cine-su-propia-pelicula.jpg?itok=eYlbzfiM',
      isCooperative: true,
    },
    {
      id: 13,
      url: 'https://mobimg.b-cdn.net/androidgame_img/portal/real/1_portal.jpg',
      isCooperative: true,
    },
    {
      id: 14,
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlDchOZGpBceduynLddn8KJ_ahinYMy9G6z85tY3WxwfEWLvkRA',
      isCooperative: false,
    },
    {
      id: 15,
      url:
        'https://hb.imgix.net/ae475dd426714e9e7857b28f92009011d16ac98e.jpg?auto=compress,format&fit=crop&h=353&w=616&s=ff11c567c3750076b8624c1f22a83547',
      isCooperative: true,
    },
  ],
  correctCounter: 0,
  incorrectCounter: 0,
};

class Home extends Component {
  state = initialState;

  reset() {
    this.setState(initialState);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal() {
    this.reset();
  }

  validateWinner = () => {
    if (this.state.incorrectCounter === 2) {
      this.openModal();
    }
  };

  changeImage = id => {
    this.setState(state => {
      const games = state.games.map((game, index) => {
        if (index !== id) {
          return game;
        } else {
          return {
            ...game,
            url: state.aswers[game.isCooperative.toString()],
          };
        }
      });
      return state.games[id].isCooperative === true
        ? { games, correctCounter: state.correctCounter + 1 }
        : { games, incorrectCounter: state.incorrectCounter + 1 };
    });
    this.validateWinner();
  };

  render() {
    return (
      <Container>
        <Title>
          <h1>Selecciona los juegos cooperativos</h1>
        </Title>
        <ScoresContainer>
          <Score>Respuestas correctas: {this.state.correctCounter} de 8</Score>
          <Score>Respuestas incorrectas: {this.state.incorrectCounter}</Score>
        </ScoresContainer>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.closeModal()}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <h2>Te hace falta jugar más :( inténtalo de nuevo.</h2>
          <button onClick={() => this.closeModal()}>close</button>
        </Modal>
        <ImagesContainer>
          {this.state.games.map(({ url }, index) => (
            <Img
              key={index}
              src={url}
              onClick={() => this.changeImage(index)}
            />
          ))}
        </ImagesContainer>
      </Container>
    );
  }
}

export default Home;
