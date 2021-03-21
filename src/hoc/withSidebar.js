import Sidebar from "../components/Sidebar/Sidebar.jsx";

const withSidebar = (Component) => (props) => {
  return (
    <Sidebar>
      <Component {...props} />
    </Sidebar>
  );
};

export default withSidebar;
