
import React from "react"
import "./App.css"
import Table from "@material-ui/core/Table"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableBody from "@material-ui/core/TableBody"
import TextField from "@material-ui/core/TextField"
import { withStyles } from "@material-ui/core/styles"
import { users } from "./data.js"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

const useStyles = theme => ({
  container: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    backgroundColor: "#FCC9FA",
  },
  header: {
    backgroundColor: "#ff1a8c",
    display: "flex",
    justifyContent: "center",
    color: "#6200ad",
    height: '10%',
  },
  body: {
    height: '70%',
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
    backgroundColor: "#D7BDE2",
  },
  footer: {
    backgroundColor: "#ff1a8c",
    display: "flex",
    justifyContent: "center",
    color: "#6200ad",
    height: '10%',
  },
  textStyle: {
    paddingTop: theme.spacing(2)
  },
  paper: {
    width: '50%',
  },
  formDiv: {
    display: "flex",
    flexDirection: "column",
    width: '40%',
    height: '80%',
    marginLeft: theme.spacing(5),
    padding: theme.spacing(1)
  },
  buttonOk: {
    marginTop: theme.spacing(4)
  },
  buttonClear: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(1)
  },
  picAndRegisterDiv: {
    display: 'flex',
    flexDirection: 'row',
    height: '40%'
  },
  img: {
    marginLeft: theme.spacing(4)
  },
  imgStyle: {
    width: '600px',
    height: '600px',
  },
  tablePaper: {
    width: '50%',
    marginTop: theme.spacing(4),
  },
  tableDiv: {
    margin: theme.spacing(5),
    width: '80%',
  },
})

class App extends React.Component {
  state = {
    userData: users,
    user: { name: "", email: "" }
  }

  addUser = () => {
    const user = { ...this.state.user }
    users.push(user)
    this.setState({ userData: users })
  }

  clearUser = () => {
    const user = { ...this.state.user }
    user.name = ""
    user.email = ""
    this.setState({ user: user })
  }

  handleChange(e) {
    const data = { ...this.state.user }
    const { name, value } = e.target
    data[name] = value
    this.setState({ user: data })
  }

  render() {
    const { userData, user } = this.state
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography variant="h4" className={classes.textStyle}>Pink programming</Typography>
        </div>
        <div className={classes.body}>
          <div className={classes.picAndRegisterDiv}>
            <Paper className={classes.paper}>
              <div className={classes.formDiv}>
                <TextField
                  id="standard-size-normal"
                  label="Name"
                  name="name"
                  variant="standard"
                  value={user.name}
                  onChange={this.handleChange.bind(this)}
                />
                <TextField
                  id="standard-size-normal"
                  label="email"
                  name="email"
                  variant="standard"
                  value={user.email}
                  onChange={this.handleChange.bind(this)}
                />
                <div>
                  <Button
                    variant="contained"
                    onClick={this.addUser}
                    className={classes.buttonOk}
                  > Ok
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.buttonClear}
                    onClick={this.clearUser}
                  >Clear
                  </Button>
                </div>
              </div>
            </Paper>
            <div className={classes.img}>
              <img src="/images/womenQuotes.jpeg" className={classes.imgStyle} alt="you are awesome"/>
            </div>
          </div>
          <Paper className={classes.tablePaper}>
            <div className={classes.tableDiv}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userData.map(row => (
                    <TableRow>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Paper>
        </div>
        <div className={classes.footer}>
          <Typography variant="h4" className={classes.textStyle}>Be the heroine of your life!!</Typography>
        </div>
      </div>
    )
  }
}

export default withStyles(useStyles)(App)