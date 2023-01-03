import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  LightTheme,
    Layout,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mui";
// import {
//     Layout,
//     ReadyPage,
//     notificationProvider,
//     ErrorComponent,
// } from "@pankod/refine-antd";

import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider,{ GraphQLClient } from "@pankod/refine-graphql";
import { OrderList, OrderShow,OrderCreate,OrderEdit  } from "pages";

const client = new GraphQLClient("http://localhost:9002/graphql");

const App: React.FC =()=> {
  
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider(client)}
          notificationProvider={notificationProvider}
          Layout={Layout}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          routerProvider={routerProvider}
          resources={[
            {
              name:'orders',
              list:OrderList,
              show:OrderShow,
              create:OrderCreate,
              edit:OrderEdit
            }
          ]}
        />
      </RefineSnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
