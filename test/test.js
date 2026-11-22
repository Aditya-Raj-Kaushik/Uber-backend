const autocannon = require('autocannon');

const duration = 30;

const testRoute = (url) => {
    autocannon({
        url,
        duration
    }, (err, result) => {
        if (err) {
            console.log('Error:', err);
            return;
        }

        console.log(url);
        console.log('Total Requests:', result.requests.total);
        console.log('Duration:', duration, 'seconds');
        console.log('-------------------------');
    });
};

testRoute('http://localhost:3000/');
testRoute('http://localhost:3000/stress-test');