import { Switch, Route } from "react-router-dom";
import CreateArticle from "./components/CreateArticle/CreateArticle";
import EditArticle from "./components/EditArticle/EditArticle";
import Settings from "./components/Settings/Settings";
import UserProfile from "./components/UserProfile/UserProfile";
import Article from "./pages/Article/Article";
import Auth from "./pages/Auth/Auth";
import GlobalFeed from "./pages/GlobalFeed/GlobalFeed";
import TagFeed from "./pages/TagFeed/TagFeed";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed} />
      <Route exact path="/profiles/:slug" component={UserProfile} />
      <Route exact path="/profiles/:slug/favorites" component={UserProfile} />
     
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/articles/new" component={CreateArticle} />
      <Route path="/articles/:slug/edit" component={EditArticle} />
      <Route path="/articles/:slug" component={Article} />
      <Route path="/login" component={Auth} />
      <Route path="/register" component={Auth} />
      <Route path="/settings" component={Settings} />
    </Switch>
  );
};

export default Routes;
