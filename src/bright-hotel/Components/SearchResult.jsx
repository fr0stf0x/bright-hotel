import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from "classnames";
import moment from "moment";
import React, { Suspense } from "react";
import { connect } from "react-redux";
import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage";
import Footer from "../../components/Footer/Footer";
import actions from "../Actions/actions";
import NavBar from "../Layouts/NavBar";
import NavHeader from "../Layouts/NavHeader";
import RoomTypes from "./Room/RoomTypes";

class SearchResult extends React.Component {
  componentDidMount() {
    const { dispatch, bookingFields } = this.props;
    if (bookingFields.isEmpty) {
      this.props.history.push("/");
    } else {
      const query = {
        ...bookingFields.fields,
        arrive: moment(bookingFields.fields.arrive).format("YYYY-MM-DD"),
        depart: moment(bookingFields.fields.depart).format("YYYY-MM-DD")
      };
      dispatch(actions.server.checkForRoomsAvailability(query));
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        <NavHeader
          title={"Found some rooms for you"}
          image={require("assets/img/bright-hotel/bg_1.jpg")}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Suspense fallback={<div>Loading</div>}>
              <RoomTypes />
            </Suspense>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(({ bookingFields, cart }) => ({ bookingFields, cart }))(
  withStyles(landingPageStyle)(SearchResult)
);