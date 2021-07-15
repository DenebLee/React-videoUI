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
        margin: theme.spacing(2),
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

          <Fab color="primary" aria-label="add" onClick={() => {
                  showSnackbar()
                }}>
            <Tooltip title={<h2>채팅 켜기</h2>} placement="top">
              <ChatIcon
                style={{ fontSize: 28 }}
                
              ></ChatIcon>
            </Tooltip>
          </Fab>

          <Fab color="primary" aria-label="add" onClick={() => {
                  showSnackbar()
                }}>
            <Tooltip title={<h2>카메라 켜기</h2>} placement="top">
              <VideocamIcon
                style={{ fontSize: 28 }}
                
              ></VideocamIcon>
            </Tooltip>
          </Fab>

          <Fab color="primary" aria-label="add" onClick={() => {
                  showSnackbar()
                }}>
            <Tooltip title={<h2>화상회의 종료</h2>} placement="top">
              <CallEndIcon
                style={{ color: red[500], fontSize: 28 }}
                
              ></CallEndIcon>
            </Tooltip>
          </Fab>

          <Fab color="primary" aria-label="add"  onClick={() => {
                  showSnackbar()
                }}>
            <Tooltip title={<h2>오디오 켜기</h2>}placement="top">
              <MicIcon
                style={{ fontSize: 28 }}
               
              ></MicIcon>
            </Tooltip>
          </Fab>

          <Fab color="primary" aria-label="add" onClick={() => {
                 showSnackbar()
                }}>
            <Tooltip title={<h2>화면 공유하기</h2>} placement="top">
              <ScreenShareIcon
                style={{ fontSize: 28 }}
                
              ></ScreenShareIcon>
            </Tooltip>
          </Fab>
        </div>
      </Div>
  );
}
export default Toolbar;
