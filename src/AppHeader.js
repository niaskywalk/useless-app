import React from 'react';
import styles from './AppHeader.module.scss';

const AppHeader = () => {
  return (
    <header className={styles.appHeader}>
      <h1>
        Task*A*Roo
      </h1>
      <nav>
        Home Link,
        Etc
      </nav>
    </header>
  );
};

export default AppHeader;