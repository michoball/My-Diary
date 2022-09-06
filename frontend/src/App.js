import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import { ToggleThemeProvider } from "./theme/theme";
import Loading from "./UI/loading/Loading";

// Home을 lazy Loading하면 home과 side calendar에 격자가 다시 생김
import Home from "./page/home/Home.page";

const Calendar = lazy(() => import("./page/calendar/Calendar.page"));
const Navigation = lazy(() => import("./page/navigation/Navigation.page"));
const Memo = lazy(() => import("./page/memo/Memo.page"));
const Editor = lazy(() => import("./page/editor/Editor.page"));
const Authentication = lazy(() =>
  import("./page/authentication/Authentication")
);
const OauthLogin = lazy(() => import("./component/auth/oauthLogin/OauthLogin"));
const PrivateRoute = lazy(() =>
  import("./component/privateRoute/PriivateRoute")
);
const LandingPage = lazy(() => import("./page/landing/LandingPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToggleThemeProvider>
          <GlobalStyle />
          <Routes>
            <Route path="/oauth/success" element={<OauthLogin />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigation />}>
              <Route path="/login" element={<Authentication />} />
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/memo" element={<Memo />} />
                <Route path="/memo/editor" element={<Editor />}>
                  <Route path="/memo/editor/:editmemoId" element={<Editor />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </ToggleThemeProvider>
      </Suspense>
    </>
  );
}

export default App;
