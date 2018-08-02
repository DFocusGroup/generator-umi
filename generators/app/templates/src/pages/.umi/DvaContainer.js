import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  ...((require('/Users/zuohao/codes/github/umi-scaffold/src/dva.js').config || (() => ({})))()),
});

window.g_app = app;
app.use(createLoading());

app.model({ namespace: 'app', ...(require('/Users/zuohao/codes/github/umi-scaffold/src/models/app.js').default) });
app.model({ namespace: 'errorInfo', ...(require('/Users/zuohao/codes/github/umi-scaffold/src/models/errorInfo.js').default) });
app.model({ namespace: 'users', ...(require('/Users/zuohao/codes/github/umi-scaffold/src/models/users.js').default) });
app.model({ namespace: 'model', ...(require('/Users/zuohao/codes/github/umi-scaffold/src/pages/login/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/zuohao/codes/github/umi-scaffold/src/pages/overview/model.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
