import { ListGroupItem, ListGroup } from "reactstrap";
import TreeMenu from "react-simple-tree-menu";
//import "../../node_modules/react-simple-tree-menu/dist/main.css";
import GetCalendarBody from "./getCalendarBody";
import { Button } from "react-bootstrap";
import AddEventForm from "./addEventForm";
import PopUpMessage from "./popUpMessage";

//https://github.com/iannbing/react-simple-tree-menu/blob/master/stories/index.stories.js

const CalendarView2Nav = (myProps) => {
  const DEFAULT_PADDING = 16;
  const ICON_SIZE = 8;
  const LEVEL_SPACE = 16;

  const ToggleIcon = ({ on }) => (
    <span style={{ marginRight: 8 }}>{on ? "-" : "+"}</span>
  );
  const ListItem = ({
    level = 0,
    hasNodes,
    isOpen,
    label,
    searchTerm,
    openNodes,
    toggleNode,
    matchSearch,
    focused,
    ...props
  }) => (
    <ListGroupItem
      {...props}
      style={{
        paddingLeft: DEFAULT_PADDING + ICON_SIZE + level * LEVEL_SPACE,
        cursor: "pointer",
        boxShadow: focused ? "0px 0px 5px 0px #222" : "none",
        zIndex: focused ? 999 : "unset",
        position: "relative",
      }}
    >
      {hasNodes && (
        <div
          style={{ display: "inline-block" }}
          onClick={(e) => {
            hasNodes && toggleNode && toggleNode();
            e.stopPropagation();
          }}
        >
          <ToggleIcon on={isOpen} />
        </div>
      )}
      {label}
    </ListGroupItem>
  );

  const popUpClose = function () {
    GetCalendarBody(myProps.currentCalKey, myProps.setCalendarBody);
  };

  return (
    <div>
      <div hidden={myProps.adminAccount.length === 0}>
        <Button
          className="d-grid gap-2"
          onClick={() => myProps.setShowEventForm(true)}
        >
          Add Event
        </Button>
        <AddEventForm
          showEventForm={myProps.showEventForm}
          setShowEventForm={myProps.setShowEventForm}
          setPopUpMessage={myProps.setPopUpMessage}
          setShowPopUp={myProps.setShowPopUp}
        />
      </div>
      <PopUpMessage
        message={myProps.popUpMessage}
        showFlag={myProps.showPopUp}
        setShowFlag={myProps.setShowPopUp}
        callback={popUpClose}
      />
      <TreeMenu
        data={myProps.calendarNavData}
        onClickItem={({ key, label, ...props }) => {
          myProps.setCurrentCalKey(key);
          if (key.indexOf("/") >= 0) {
            GetCalendarBody(key, myProps.setCalendarBody);
          }
          //this.navigate(props.url); // user defined prop
        }}
        initialActiveKey={myProps.currentCalKey} // the path to the active node
        initialOpenNodes={myProps.calendarNavData["2016"]}
        debounceTime={125}
      >
        {({ search, items }) => (
          <>
            {/* <Input
            onChange={(e) => search(e.target.value)}
            placeholder="Type and search"
          /> */}
            <ListGroup>
              {items.map((props) => (
                // You might need to wrap the third-party component to consume the props
                // check the story as an example
                // https://github.com/iannbing/react-simple-tree-menu/blob/master/stories/index.stories.js
                <ListItem {...props} />
              ))}
            </ListGroup>
          </>
        )}
      </TreeMenu>
    </div>
  );
};

export default CalendarView2Nav;
