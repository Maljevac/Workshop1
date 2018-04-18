
let express = require('express');
let Pool = require('pg').Pool;
let bodyParser = require('body-parser');

const app = express();

var config = {
  host: 'localhost',
  user: 'workshopper',
  password: 'LRtQWCfFYr8LqcZb',
  database: 'workshop1',
};


var pool = new Pool(config);



app.set('port', (8080));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
//cool comment




//Project Code
app.get('/api?', async (req, res) => {
	console.log('Success'); //What prints in the terminal 
	if (req.query.workshop){
		var getAttendees = req.query.workshop;
	}
	else{
	try {
		const response = await pool.query('select distinct workshop from theworkshops');
		console.log(response);
		var getWorkshop = response.rows.map(function(item){
			return item.workshop;
		})
		res.json({workshops: getWorkshop});
		const response2 = await pool.query('select attendee from theworkshops where 		workshop = $1',[getAttendees]);
	console.log(response2);
		var theAttendees = response2.rows.map(function(item){
		return item.attendee;
})
	if (theAttendees == 0){
	res.json("Workshop not found"); }
	else { res.json({'Attendees': theAttendees});

 //Posting the workshops from the SQL file to the browser without the workshop name
	}
	}
		catch(err){
			console.error("ERROR running query " + err);
		}
	
		}

		});
	


	

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); 

});
