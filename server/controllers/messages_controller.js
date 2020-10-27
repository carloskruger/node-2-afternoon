let messages = [];

let id = 0;

module.exports = {

create: (req, res) => {
    
    const {text, time} = req.body;
    messages.push({id, text, time})
 
    res.status(200).send(messages);
    id++;

},

read: (req, res) => {
    res.status(200).send(messages);
},

update: (req, res) => {
    const { text } = req.body;
    const  idToUpdate = req.params.id;
    console.log("req.params.id", req.params.id)
     console.log(messages);
    console.log("idToUpdate:", idToUpdate);
     let index = messages.findIndex(message => message["id"] == idToUpdate);
    if (index === -1){
        res.status(404).send(messages)
    }
     // let index =  null;
    // for (let i = 0 ; i < messages.length ; i++){
    //      console.log(messages.id)
    //     if (messages[i]['id'] == idToUpdate){
    //         console.log("message[i]['id']", messages[i]['id']);
    //     index = i;}
    // }
    console.log("update index", index)
    let message = messages[index]
    // console.log("message", message)



    messages[index] = {
        id: message.id,
        text: text || message.text,
        time: message.time
    };

    res.status(200).send(messages);
},

delete: (req, res) => {
const  idToDelete = +req.params.id

// let index = messages.findIndex(message => message.id === idToDelete)

let index =  null;

for (let i = 0 ; i < messages.length ; i++){
    if (messages[i].id === idToDelete){
        console.log("message[i].id", messages[i].id)
    index = i;}
}

messages.splice(index, 1);


res.status(200).send(messages);
}


}