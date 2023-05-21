import DescriptionIcon from '@mui/icons-material/Description';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { IconButton } from '@mui/material';

function Header(){
return(
<div>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid ">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="#"><DescriptionIcon style={{color:"blue",fontSize:"2.7rem"}}/></a>
          <div>
          <h2 className="navbar-brand " style={{fontSize:"1.1rem",paddingBottom:"0.2rem",marginBottom:"-0.5rem"}} >Untitled document</h2>
          <div className="navbar-nav ">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">File</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Edit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">View</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Insert</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Format</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tools</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Extensions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
              </li>
        </ul>
      </div>
      </div>
      </div>
      </div>
      <IconButton>
        <InsertCommentOutlinedIcon style={{fontSize:"1.7rem",marginRight:"0.5rem"}} />
      </IconButton>
      <IconButton>
        <VideocamOutlinedIcon style={{fontSize:"1.7rem", marginRight:"-0.5rem"}}  />
      </IconButton>
      <ArrowDropDownOutlinedIcon style={{marginRight:"1.2rem"}} />
      <button className="btn d-flex" style={{marginRight:"1rem",backgroundColor:"lightBlue"}}><LockOutlinedIcon style={{marginRight:"1rem",}} />   Share</button>
      <IconButton>
        <AccountCircleSharpIcon style={{fontSize:"2.7rem",marginRight:"1.3rem"}} />
      </IconButton>
    </nav>
</div>
    );
};

export default Header;