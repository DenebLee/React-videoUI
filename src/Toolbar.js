import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { red } from "@material-ui/core/colors";
import CallEndIcon from "@material-ui/icons/CallEnd";
import VideocamIcon from "@material-ui/icons/Videocam";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import MicIcon from "@material-ui/icons/Mic";
import ChatIcon from "@material-ui/icons/Chat";
import Tooltip from "@material-ui/core/Tooltip";
import styled from "styled-components";
import { useSnackbar } from "./useSnackbar";


function Toolbar() {

  //*******************툴바 아이콘 버튼 관련 스크립트*****************************

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1.4),
        width: theme.spacing(5),
        height: theme.spacing(5), //(css메소드) : theme.spacing(피치)
      },
    },
  }));
   //*******************툴바 아이콘 버튼 관련 스크립트 끝*****************************

   





  const Div = styled.div`
  position:fixed;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
`

  
  const classes = useStyles();

  const { createSnackbar } = useSnackbar();

  const showSnackbar = () => {
    createSnackbar({
      message: "테스트중!",
      sticky: false,
      theme: 'default',
      timeout: 1499,
      dismissable: false,
      pauseOnHover: false,
      progressBar: false,
    });
  };

  return (
      <Div>
        <div className={classes.root}>
          {/* //플로팅 버튼으로 툴바 생성 */}

          <Tooltip title={<h4>채팅 켜기</h4>} placement="top">
          <Fab  aria-label="add" onClick={() => {
                  showSnackbar()
                }}>
              <ChatIcon
                style={{ fontSize: 22 }}
                
              ></ChatIcon>
          </Fab>
          </Tooltip>

          <Tooltip title={<h4>카메라 켜기</h4>} placement="top">
          <Fab  aria-label="add" onClick={() => {
                  showSnackbar()
                }}>
              <VideocamIcon
                style={{ fontSize: 22 }}
                
              ></VideocamIcon>
            </Fab>
            </Tooltip>

          
            <Tooltip title={<h4>화상회의 종료</h4>} placement="top" style={{height:'10px'}}>
              <Fab aria-label="add" onClick={() => {
                  showSnackbar()
                }}>
              <CallEndIcon
                style={{ color: red[500], fontSize: 28 }}
                
              ></CallEndIcon>
          </Fab>
          </Tooltip>

          <Tooltip title={<h4>오디오 켜기</h4>}placement="top">
            <Fab aria-label="add"  onClick={() => {
                  showSnackbar()
                }}>
            
              <MicIcon
                style={{ fontSize: 22 }}
               
              ></MicIcon>
           </Fab>
           </Tooltip>

         
            <Tooltip title={<h4>화면 공유하기</h4>} placement="top">
              <Fab  onClick={() => {
                 showSnackbar()
                }}>
              <ScreenShareIcon
                style={{ fontSize: 22 }}
                
              ></ScreenShareIcon>
          </Fab>
          </Tooltip>
        </div>
      </Div>
  );
}
export default Toolbar;
