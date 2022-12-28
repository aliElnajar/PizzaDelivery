import { Container } from "@mui/material";
import CartModal from "./components/CartModal";
import Footer from "./components/generalUI/Footer";
import Intro from "./components/generalUI/Intro";
import Navbar from "./components/generalUI/Navbar";

import MenuItems from "./components/MenuItems";
function App() {
  return (
    <Container maxWidth="800px">
      <CartModal />
      <Navbar />
      <Intro />
      <MenuItems />
      <Footer />
    </Container>
  );
}

export default App;
