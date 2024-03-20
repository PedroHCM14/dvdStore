import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
      <div>
        <NavBar />
        {/* <ItemListContainer message="Nenhum produto disponível." /> */}
        <ItemDetailContainer productId={1} />
      </div>
  );
}

export default App;
