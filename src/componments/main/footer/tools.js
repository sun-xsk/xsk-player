export function dragDot(action, audio,width) {
  let position = {
    oriOffestLeft: 0,
    oriX: 0,
    maxLeft: 0,
    maxRight: 0,
  }
  let flag = false;
  action.addEventListener('mousedown', down, false);
  document.addEventListener('mousemove', move, false);
  document.addEventListener('mouseup', end, false);

  function down(event) {
    if (!audio.paused || audio.currentTime !== 0) {
      flag = true;
      position.oriOffestLeft = parseFloat(action.style.left) * width/100;
      position.oriX = event.clientX;
      position.maxLeft = position.oriOffestLeft;
      position.maxRight = width - position.oriOffestLeft;
      // 禁止默认事件
      if (event && event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
      // 禁止事件冒泡
      if (event && event.stopPropagation) {
        event.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }
    }
  }
  function move(event) {
    if (flag) {
      let clientX = event.clientX;
      let length = clientX - position.oriX;
      if (length > position.maxRight) {
        length = position.maxRight
      } else if (length < -position.maxLeft) {
        length = -position.maxLeft
      }
      let b = width;
      let a = (position.oriOffestLeft + length) / b;
      audio.currentTime = audio.duration * a;
    }
  }
  function end() {
    flag = false;
  }
}

export function setVolume(audio, volumeBall, volumeBar,that) {
  let position = {
    oriOffestBottom: 0,
    oriY: 0,
    maxUp: 0,
    maxDown: 0,
  }

  let flag = false; 
  volumeBall.addEventListener('mousedown', down, false)
  document.addEventListener('mousemove', move, false);
  document.addEventListener('mouseup', end, false);

  function down(event) {
      flag = true;
      position.oriOffestBottom = parseInt(volumeBar.style.height)
      position.oriY = event.clientY;
      position.maxUp =  100 - parseInt(volumeBar.style.height)
      position.maxDown = parseInt(volumeBar.style.height)
      // 禁止默认事件
      if (event && event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
      // 禁止事件冒泡
      if (event && event.stopPropagation) {
        event.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }
  }
  function move(event) {
    if (flag) {
      let clientY = event.clientY;
      let length =position.oriY-clientY;
      if (clientY - position.oriY > position.maxDown) {
        length = -position.maxDown
      } else if (position.oriY -clientY > position.maxUp) {
        length = position.maxUp
      }
      let height = position.oriOffestBottom+length
      volumeBar.style.height = height + 'px'
      volumeBall.style.bottom = height-5 + 'px'
      audio.volume = parseInt(volumeBar.style.height)/100;
    that.setState({volume: parseInt(volumeBar.style.height)+'%'})
    }
  }
  function end() {
    flag = false;
  }

}


