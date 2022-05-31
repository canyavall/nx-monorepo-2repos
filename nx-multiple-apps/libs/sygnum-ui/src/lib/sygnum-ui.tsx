import styles from './sygnum-ui.module.css';

/* eslint-disable-next-line */
export interface SygnumUiProps {}

export function SygnumUi(props: SygnumUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SygnumUi!</h1>
    </div>
  );
}

export default SygnumUi;
