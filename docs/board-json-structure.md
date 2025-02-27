## Board Structure

Each Board has saves the state of each cell of the board and has a optional option for the orientation of the board

- **cells**: each cell saves the coordinates and the Piece that is occupying the cell.
- **orientation**: the orientation specifies which color is at the bottom and which on the top.

The structure is the following:

```json
{
    "cells": [
      {
        "name": "a1",
        "piece": {
          "type": "rook",
          "color": "white"
        }
      },
      {
        "name": "b1",
        "piece": {
          "type": "knight",
          "color": "white"
        }
      },
      ...]
}
```

Other Options can be easily added later.