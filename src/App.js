import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header.";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  // Get Data From Opensea
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xe54DFEFDfc9F8594fEed18b47BDF6E7463f112A2&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
