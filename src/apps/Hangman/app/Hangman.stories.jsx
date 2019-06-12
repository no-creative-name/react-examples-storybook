import { storiesOf } from "@storybook/react";
import React from "react";
import { text } from "@storybook/addon-knobs";

import { Hangman } from ".";

storiesOf("apps/Hangman", module).add(
  "play the game!",
  () => {
    const answer = text("Answer", "aeroplane");
    return <Hangman key={answer} answer={answer} />;
  },
  {
    notes: {
      markdown: `
This is the full Hangman game! Note how there are also stories for the individual UI components,
developed one at at time before being put together in this main <code>Hangman</code> app component.

Also note how none of almost none of the game logic resides in the components; they are instead
found in separate functions (a "logic layer") for portability and testability.
`
    }
  }
);