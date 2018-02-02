import socket from '../Services/SocketIO'

export const initialize = () => {
    socket.on('socketID', e => {
        console.log("socketID", e)
    })
    
    socket.on('disconnect', e => {
        console.log('disconnected ' + e)
    })

    socket.on('allPlayers', (e) => { console.log(e) })
}
