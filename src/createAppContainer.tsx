import { useEffect } from 'react';
import type { FC } from 'react';

type AppContainerDeps = {
  showWelcomeNotification(): void;
};

export function createAppContainer({ showWelcomeNotification }: AppContainerDeps): FC {
  const AppContainer: FC = () => {

    // 'use no memo';
    useEffect(() => {
      showWelcomeNotification();
    }, []);

    return <div>Repro page</div>;
  };

  AppContainer.displayName = 'AppContainer';

  return AppContainer;
}
