const chat = document.getElementById('chat');
const input = document.getElementById('messageInput');
const ws = new WebSocket(`ws://${window.location.host}`);

ws.onmessage = async (event) => {
  const data = await event.data.text(); // <-- Corrigido
  const msg = document.createElement('div');
  msg.textContent = data;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
};

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value.trim() !== '') {
    ws.send(input.value);
    input.value = '';
  }
});
