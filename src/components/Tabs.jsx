import classNames from "classnames";

export const NameTab = (props) => <title {...props} />;

export const Tabs = ({ title }) => {
  const { title } = tab.props;
};

export default Tabs = ({ children }) => {
  return (
    <div>
      <title key={id}>{title}</title>
      <ul>
        {children.map((tab) => {
          const { title } = tab.props;

          return <NameTab key={title} title={title} />;
        })}
      </ul>
    </div>
  );
};
