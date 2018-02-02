import io from 'socket.io-client';
let socket = io.connect('http://localhost:47236');

export default socket;
