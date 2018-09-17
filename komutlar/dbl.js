const snekfetch = require('snekfetch')
const dbotstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4NDA1MjE4Mjk3NTY0MzY0OSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTM2NjAwMTQxfQ.OS2TXNujsmH0FpxNbUjdqttoEM1DFLPbDe9ZSzaO2EY"



client.shard.fetchClientValues('guilds.size').then(result => {
const guildsizes = result.reduce((prev, val) => prev + val, 0)
    snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
        .set('Authorization', dbotstoken)
        .send({"server_count": guildsizes})
        .then(() => console.log(`dbotsstats updated successfully`))
        .catch(err => console.error(err))
})
