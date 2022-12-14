import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Menu from './views/Menu';
import AddContact from "./views/AddContact";
import DeleteContact from "./views/DeleteContact";
import ModifyContact from "./views/ModifyContact";
import FindContact from "./views/FindContact";
import Login from "./views/Login";
import Home from "./views/Home";
import ListContact from "./views/ListContact";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute path="/AddContact" component={AddContact} layout={LayoutDefault} />
          <AppRoute path="/ListContact" component={ListContact} layout={LayoutDefault} />
          <AppRoute path="/DeleteContact" component={DeleteContact} layout={LayoutDefault} />
          <AppRoute path="/ModifyContact" component={ModifyContact} layout={LayoutDefault} />
          <AppRoute path="/FindContact" component={FindContact} layout={LayoutDefault} />
          <AppRoute path="/Home" component={Home} layout={LayoutDefault} />
          <AppRoute path="/Login" component={Login} layout={LayoutDefault} />
          <AppRoute exact path="/" component={Menu} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;