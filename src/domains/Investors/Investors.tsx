import { memo, useEffect, useState } from "react";

import Table from "../../components/Table/Table";
import { StyledTableContainer } from "./styles";

export const Investors = memo(() => {
  const [firmsData, setFirmsData] = useState<{ data: any[] }>({ data: [] });

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.preqin.com/api/Investor?firmId=2670,2792,3320,3611",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
          method: "GET",
        }
      );
      if (response.status === 200) {
        const result = await response.json();
        setFirmsData(result);
      }
    } catch (error) {
      window.alert("Error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledTableContainer>
      <h1>Investors List</h1>
      <Table firms={firmsData.data} />
    </StyledTableContainer>
  );
});
