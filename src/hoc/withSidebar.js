import Sidebar from "../components/Sidebar/Sidebar.js";

const withSidebar = (Component) => (props) => {
  return (
    <Sidebar>
      <Component {...props} />
    </Sidebar>
  );
};

export default withSidebar;
