const fs = require('fs')
const { randomBytes } = require('crypto');

const events = require(global.mock_db)

const event_service = {
    getAll() {
        return events
    },
	getById(id) {
        return events.find(t => t.id == id)
    },    
    create(req, res) {
        let new_id = genRandId(4)
                
        const event = req.body

        const new_event = {
            id: new_id,
            event: event
        }

        events.push(new_event)
        
        writeToFile(events)
        
        return new_event
    },
    update(id, updateData){
        const eventIndex = events.findIndex(t => t.id == id)

        if (eventIndex === -1) {
            return null
        }

        events[eventIndex].event = { ...events[eventIndex].event, ...updateData }

        writeToFile(events)

        return events[eventIndex]
    },
    delete(id) {
        const index = events.findIndex(u => u.id == id)
        events.splice(index, 1)    
        writeToFile(events)
    }
}

let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.mock_db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

let genRandId = (count) => {
  const bytes = Math.ceil(count / 2); 
  return randomBytes(bytes).toString('hex').slice(0, count);
};

module.exports = event_service