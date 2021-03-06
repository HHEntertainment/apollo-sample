import * as React from "react";
import { Route, Link } from "react-router-dom";
import { Home } from "../views/Home";
import { BookmarkPage } from "../views/bookmark/BookmarkPage";
import { LocalbusinessPage } from "../views/localBusiness/LocalBusinessPage";
import { BookmarkPaginationPage } from "../views/bookmarkPagination/BookmarkPaginationPage";
import { TypeConflictPage } from "../views/typeConflict/TypeConflictPage";

export class AppReactRouter extends React.Component {
  public render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bookmarks">bookmarks</Link>
          </li>
          <li>
            <Link to="/localbusiness">localbusiness</Link>
          </li>
          <li>
            <Link to="/bookmarkPaginationPage">bookmarkPaginationPage</Link>
          </li>
          <li>
            <Link to="/typeConflictPage">TypeConflictPage</Link>
          </li>
        </ul>


        <Route exact path="/" component={Home} />
        <Route path="/bookmarks" component={BookmarkPage} />
        <Route path="/localbusiness" component={LocalbusinessPage} />
        <Route path="/bookmarkPaginationPage" component={BookmarkPaginationPage} />
        <Route path="/typeConflictPage" component={TypeConflictPage} />
      </div>
    );
  }
}
