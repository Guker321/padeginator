import styles from './Padeginator.module.css';

import PadeginatorForm from './PadeginatorForm';

const Padeginator = (props) => {
  return (
    <main className={styles.padeginator}>
      <PadeginatorForm />
    </main>
  );
};

export default Padeginator;
