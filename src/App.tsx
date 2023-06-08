import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

// admin
import AdminPage from "./pages/admin";

// auth
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

// user
import UserPage from "./pages/user";
import LikePage from "./pages/user/LikePage";
import AccountPage from "./pages/user/AccountPage";
import PersonalSettings from "./pages/user/PersonalSettings";

// main
import MainPage from "./pages/main/MainPage";
import Header from "./components/common/Header";
import SubHeader from "./components/common/SubHeader";
import Banner from "./components/main/MainBanner";

function App() {
  const [username, setUsername] = useState("");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* 메인 */}
        <Route
          path="/"
          element={
            <>
              <SubHeader />
              <Banner />
              <MainPage username={username} setUsername={setUsername} />
            </>
          }
        />
      </Routes>

      <Main>
        <Inner>
          <Routes>
            {/* 관리자 페이지 */}
            <Route path="/admin" element={<AdminPage />} />

            {/* Auth 페이지 */}
            <Route
              path="/auth/login"
              element={<LoginPage setUsername={setUsername} />}
            />
            <Route
              path="/auth/register"
              element={<RegisterPage setUsername={setUsername} />}
            />
            {/* 유저 페이지 */}
            <Route path="/user" element={<UserPage />}>
              <Route path="account" element={<AccountPage />} />
              <Route path="like" element={<LikePage />} />
              <Route path="settings" element={<PersonalSettings />} />
            </Route>
          </Routes>
        </Inner>
      </Main>
    </BrowserRouter>
  );
}

const Main = styled.main`
  width: 100%;
`;

const Inner = styled.div`
  max-width: 75rem;
  width: 75rem;
  margin: 0 auto;
`;
export default App;
