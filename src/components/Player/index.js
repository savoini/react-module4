import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import Sound from 'react-sound';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Creators as PlayerActions } from ''

import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';
import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && <Sound url={player.currentSong.file} playStatus={player.status} />}
    <Current>
      <img
        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
        alt="Album cover"
      />
      <div>
        <span>Time like these</span>
        <small>Foo Fighters</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button type="submit">
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button type="submit">
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button type="submit">
          <img src={PlayIcon} alt="Play" />
        </button>
        <button type="submit">
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button type="submit">
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>
      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ed760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:24</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
    }).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(, dispatch);

export default connect(mapStateToProps)(Player);
