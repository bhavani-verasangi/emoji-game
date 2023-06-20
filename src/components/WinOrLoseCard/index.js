// Write your code here.
import './index.css'

const WIN_GAME = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LOSS_GAME = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WIN_GAME : LOSS_GAME
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-container">
      <div className="container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score-value">{score}/12</p>
        <button type="button" onClick={onClickPlayAgain} className="btn">
          PlayAgain
        </button>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="win or lose" className="win-lose-img" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
