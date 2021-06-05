import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {Dashboard} from "./components/Dashboard"

export function App() {
  return (
    <>
      <Header></Header>
      <Dashboard></Dashboard>
     
      <GlobalStyle></GlobalStyle>
    </>
  );
}


