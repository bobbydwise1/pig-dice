# _Pig Dice_

#### _Create Pig Dice game using JavaScript Objects._

#### By _Jared Reando and Robert Lee_

## Description

_A simple game of Pig Dice, with 2 players.  Each rolls a die on their their turn, accumulating round points.  1st player to reach a total of 100, wins the game._

## Setup/Installation Requirements

* Clone this repository using `git clone https://github.com/ `
* Navigate to the downloaded repo
* Launch `index.html` in a browser of your choice

## Technologies Used

_HTML, CSS, Bootstrap, JavaScript, Jquery, Git._

## Specifications

* Has instructions on a Landing Screen that reveals play board on user interaction.
  * Input = User clicks "Play" button.
  * Output = Player board appears.
* Keeps track of player die roll.
  * Input = Player rolls a 5.
  * Output = Die roll reads 5.
* Adds successive die rolls to player round score.
  * Input = Player rolls a 5, then rolls a 3.
  * Output = Round score reads 8.
* Player round ends with no score when a 1 is rolled.
  * Input = Player rolls a 1.
  * Output = Round score is erased to 0.
* Player ends their round, then the round score is added to their total score.
  * Input = Player selects "hold" with active round score of 8.
  * Output = Player total score increased by 8.
* Game ends when 1st player reaches 100 total points.
  * Input = Player reaches 100 total points.
  * Output = Player message "YOU WIN THE GAME.".

### License

MIT License

Copyright (c) 2018, _Ralph Perdomo and Robert Lee_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
