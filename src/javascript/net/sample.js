import axios from "axios";

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = 'Bearer app-TVD5Ms2KWOVnmqZVeI8QBmj2';

function sayHello(text, resolve, reject) {
    axios.post('https://api.dify.ai/v1/chat-messages', {
        "inputs": {},
        "query": text,
        "response_mode": "blocking",
        "conversation_id": "",
        "user": "sample"
    }).then((response) => {
        let data = response.data;
        var answer = data['answer']
        // console.log(answer);
        resolve(answer)

    }).catch((error) => {
        // console.log(error);
        reject(error)
    })
}

sayHello("Hello! Can you help me?",
    (ret) => {
        console.log("answer: " + ret);
    },
    (err) => {
        console.log(err);
    }
);

