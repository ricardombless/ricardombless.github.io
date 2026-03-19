// 获取页面上的元素（按钮、状态显示区）
const statusText = document.querySelector('.status');
const forwardBtn = document.getElementById('forward');
const backwardBtn = document.getElementById('backward');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const stopBtn = document.getElementById('stop');

// 核心函数：发送控制指令（当前是模拟，后续可对接真实硬件）
function sendCommand(command) {
  // 更新界面状态提示
  statusText.textContent = `当前状态：发送${command}指令`;
  
  // 控制台打印指令（方便调试）
  console.log(`向龙虾发送指令：${command}`);
  
  // 模拟指令执行完成的反馈
  setTimeout(() => {
    statusText.textContent = `当前状态：${command}指令已执行`;
  }, 500);
}

// 给每个按钮绑定点击事件
forwardBtn.addEventListener('click', () => sendCommand('前进'));
backwardBtn.addEventListener('click', () => sendCommand('后退'));
leftBtn.addEventListener('click', () => sendCommand('左转'));
rightBtn.addEventListener('click', () => sendCommand('右转'));
stopBtn.addEventListener('click', () => sendCommand('停止'));