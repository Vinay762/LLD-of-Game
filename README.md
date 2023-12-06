-> to start the game enter
``` node index.js ```

-> to test which player will start first use 
``` node  test\game.test.js```
this will throw the error because playerB must be starter must i have written player A
explain more better in 5 min video which i will attach

-> Also made use of constructor injection design pattern 
```const game = new Game(playerA, playerB)```

-> a better file structure is used

-> to make the code scalable for more than two player. I have used the queue property
here are code snippets which uses this
``` this.players = playerA.health < playerB.health ? [playerA, playerB] : [playerB, playerA]; ```
``` this.players.push(this.players.shift()); ```


-> I have also added a explaination video 
-> take care of all the things like simple design, readability, Modelling, Maintainailability, Testability
