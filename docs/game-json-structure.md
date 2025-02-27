## Game Structure

Each game references a `board.json` file, which stores the current state of the chessboard. Additionally, the game structure includes metadata such as:

- **Next Player**: Indicates which player is to move next.
- **Game Status**: Specifies whether the game has ended.

The structure is the following:

> {
>     "state": {
>         "board": "board-placeholder",
>         "turn": "white"  
>     }
> }

Other options can be easily added later.
