import { createAppContainer } from './createAppContainer.tsx';

const AppContainer = createAppContainer({
  showWelcomeNotification: () => {
    console.log('welcome from injected callback');
  },
});

export default AppContainer;
