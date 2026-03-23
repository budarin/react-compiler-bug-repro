import { useEffect } from 'react';
import type { FC } from 'react';

type AppContainerDeps = {
  showWelcomeNotification(): void;
};

export function createAppContainer({ showWelcomeNotification }: AppContainerDeps): FC {
  const AppContainer: FC = () => {
    useEffect(() => {
      showWelcomeNotification();
    }, []);

    return <div>Repro page</div>;
  };

  AppContainer.displayName = 'AppContainer';

  return AppContainer;
}
