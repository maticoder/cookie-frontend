import Sidebar from "../components/Sidebar/Sidebar.jsx";

export default (Component) => (props) => {
  return (
    <Sidebar>
      <Component {...props} />
    </Sidebar>
  );
};
