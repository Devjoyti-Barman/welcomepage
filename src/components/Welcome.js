import React,{useState} from 'react';
import './Welcome.css';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Modal from '@material-ui/core/Modal'
import AddBoxIcon from '@material-ui/icons/AddBox';
import { SettingsApplicationsRounded } from '@material-ui/icons';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
function Welcome() {
    const [projname,setProjName]=useState("")
  const [orgname,setOrgName]=useState("")
  const [open,setOpen]=useState(false)
  const [checked, setChecked] = useState(false);
 // const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  //const [modalStyle] = useState(getModalStyle);
  const handleClick=(event)=>{
    if(event.target.id=='orgname')
    setOrgName(event.target.value);
    else if(event.target.id=='projname')
    setProjName(event.target.value);
    console.log(event.target.id+
      orgname+""+projname);
  }
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  const handleOpen=()=>{
   setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false);
  }
  const handleContinue=()=>{
    console.log(projname+" "+orgname);
  }
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 44.84,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: '#E24429',
        '& + $track': {
          backgroundColor: ' #E24429',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: ' #E24429',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: 'red',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });
  
  const body=(
    <div className="dialog-container">
            <div className="input-container">
            <span>Input Email Id</span>
            <input type="text" name="email" id="email"/>
            </div>
            <div className="add-container">
                <div id="addicon"><AddBoxIcon/></div>
                <span>Add More Members</span>
            </div>
                <h1>Collaborators can</h1>
            <div id="switch">
                <span>Add more people</span>
                {/*switch button here*/}
                <FormControlLabel className="btn-switch" control={<IOSSwitch size="Normal" checked={checked} onChange={toggleChecked} />}
      />
            </div>
            <div className="btn-save">
            <button className="save-btn" onClick={handleClose}> Save</button>
            </div>
        </div>
    );
  
  return (
    <div className="wrapper">
      <header className="page-header">
          <nav>
              <h2 className="logo">
                  ReqM!
              </h2>
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Company</li>
                <li>Blog</li>
            </ul>
            </nav>
      </header>
      <main class="page-main" >
          <div>
              <h1>Welcome Divesh!</h1>
              <h3>Add a new Project and Maintain Requirements Within</h3>
          </div>
          <form action="">
            <label for="orgname">Organisation Name</label>
            
            <input className="fieldinput" type="text" id="orgname" onChange={handleClick} name="orgname" placeholder="abc.org" value={orgname}/>
            
            <label for="projname">Project Name</label>
            
            <input className="fieldinput" type="text" id="projname" onChange={handleClick} name="projectname" placeholder="Smart Watch Application" value={projname}/> 
    
          <section id="amu">
           {/*<p>{isDialogOpen}</p>*/}
            <PersonAddIcon onClick={handleOpen} /><span>Add More Users</span>
            <Modal
            open={open}
            onClose={handleClose}
            style={customStyles}
            >
              {body}
            </Modal>
          </section>
          <button className="btn-continue" onClick={handleContinue} >Continue</button>
        </form>
      </main>
      </div>
      );
}
export default Welcome;