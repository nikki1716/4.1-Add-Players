import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');
client.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  const db = client.db('my_db');
  const collection = db.collection('players');

  const player1 = {
    name: 'Aaron Rodgers',
    position: 'QB',
    rushing_yards: 100,
    touchdown_passes: 30,
    sacks: 10,
    made_field_goals: 20,
    missed_field_goals: 5
  };

  const player2 = {
    name: 'Davante Adams',
    position: 'WR',
    rushing_yards: 0,
    touchdown_passes: 15,
    sacks: 0,
    made_field_goals: 0,
    missed_field_goals: 0
  };

  collection.insertMany([player1, player2]);

  console.log('Players added successfully');
});
