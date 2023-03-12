import styles from "./Background.module.scss";

const numOfAnimatedRounds = 4;

const Background = () => {
  return (
    <div className={styles.background}>
      {[...Array(numOfAnimatedRounds)].map((index) => (
        <div className={styles.animatedRound} key={index} />
      ))}
    </div>
  );
};

export default Background;
