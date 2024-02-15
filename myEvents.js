const EventEmitter = require('events')

class myEvent extends EventEmitter {

    function1 = () => {
        this.emit('event1')
    }
}

module.exports = myEvent