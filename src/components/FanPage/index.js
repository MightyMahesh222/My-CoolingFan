import {Component} from 'react'
import {Image, Heading, Main, Child, StyledButton} from './styled'

class FanPage extends Component {
  state = {speed: 80, stop: true}

  lowSpeed = () => {
    this.setState({
      speed: 50,
      stop: true,
    })
  }

  mediumSpeed = () => {
    this.setState({
      speed: 30,
      stop: true,
    })
  }

  highSpeed = () => {
    this.setState({
      speed: 15,
      stop: true,
    })
  }

  ultra = () => {
    this.setState({
      speed: 2,
      stop: true,
    })
  }

  stopFan = () => {
    this.setState({speed: 0, stop: false})
  }

  startFan = () => {
    this.setState({speed: 80, stop: true})
  }

  render() {
    const {speed, stop} = this.state
    return (
      <Main>
        <Heading>No power No worries</Heading>
        <Image
          src="https://ik.imagekit.io/sdce03tuc/Screenshot_2024-03-13-15-15-50-00.jpg"
          alt="dan"
          val={speed}
        />
        <Child>
          <StyledButton
            className="button"
            onClick={this.lowSpeed}
            type="button"
          >
            Low Speed
          </StyledButton>
          <StyledButton
            className="button"
            onClick={this.mediumSpeed}
            type="button"
          >
            Medium Speed
          </StyledButton>
          <StyledButton
            className="button"
            onClick={this.highSpeed}
            type="button"
          >
            High Speed
          </StyledButton>
          <StyledButton className="button" onClick={this.ultra} type="button">
            Ultra Speed
          </StyledButton>
        </Child>
        {stop ? (
          <StyledButton onClick={this.stopFan}>Stop</StyledButton>
        ) : (
          <StyledButton onClick={this.startFan}>Start</StyledButton>
        )}
      </Main>
    )
  }
}
export default FanPage
