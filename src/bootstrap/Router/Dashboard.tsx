import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import { Calendar, Home } from '@pages';
import { GenericPage, GenericPageContent } from '@templates';

const DashboardRouter: React.SFC = () => {
  return (
    <GenericPage>
      <GenericPageContent>
        <Switch>
          <Route
            exact
            path="/(dashboard)?"
            component={Home}
          />
          <Route
            exact
            path="/calendar"
            component={Calendar}
          />
        </Switch>
      </GenericPageContent>
    </GenericPage>
  );
};

export default DashboardRouter;
