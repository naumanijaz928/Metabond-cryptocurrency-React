import RoutesIndex from "./core/routes/RoutesIndex";
import { store } from "./core/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { injectStore } from "./core/utilities/apis/AxiosInterceptor";

injectStore(store);
let persistor = persistStore(store);
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RoutesIndex />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
