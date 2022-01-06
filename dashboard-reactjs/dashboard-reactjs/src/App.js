import React, { Component,Suspense } from "react";
import { BrowserRouter} from "react-router-dom";

const Admin = React.lazy(()=>import('./Layout/Admin/Admin'));

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
             <Admin/>
          </Suspense>
      </BrowserRouter>
    );
  }
}

