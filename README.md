**<p>****IMPORTANT: The 0.50 update WILL reset your actor Attributes. Please note your actor attributes prior to updating (items will remain unaffected).</p>
<p>Wound tracking now works! If any text at all is entered into a wound box (either the Serious or Critical) and the Stabilized box is set to "No", then the appropriate penalty will be applied to all rolls.****</p>
<p>You should replace the moves on your actors with the new moves from the Compendium (there have been a couple of updates). There is a known issue that the tree special moves (Keep It Together, Endure Injury, and See Through the Illusion) must have their special field (at the bottom of the Item Sheet) manually set until the Compendium can be corrected.</p>**




This is the first draft of my UNOFFICIAL Kult 4E system for Foundry VTT. It's based on copyrighted material, but contains no copyrighted material. You will be responsible, as the user, for inputting the material from your own copy of the Kult Divinity Lost book. 

It should be noted that I'm new to Foundry systems development, so not everything is completely optimized. I made this because I wanted to use it, and often took the "easy way out" of problems. If you have feature requests or want to contribute code, please let me know.
Clicking on the name of a move/advantage/disadvantage on the character sheet will allow you to roll (each item has an attribute that can be manually associated with it on the item sheet). Advantages and Disadvantages can be set to either Active (able to be rolled) or Passive (not able to be rolled) based on whether or not they trigger a move.
The two fields at the top of the sheet are intended to add ongoing or one-time modifiers to rolls. The bonus from aiding/hindering should be added here, as should penalties for major or critical wounds (these would likely be added into the "Forward" field). Penalties/Bonuses to "Keep It Together" and "See Through the Illusion" based on Stability are automatically factored in.
I have now updated the Stability field to reflect your current level of Stability and all appropriate penalties should be applied automatically (Keep it Together rolls, Disadvantages, and the bonus to See Through the Veil).
Things I know do not currently work (as of version 0.50):

All kinds of visual design on the actor sheet (I'm kind of terrible at both graphic design and CSS)
Error checking on many fields (please let me know if you have questions about what type of data should be in each field)
Ammo Tracking on ranged weapons (my current solution is to use the Edit button on the weapon item to open its sheet so that the ammo can be updated)

Thank you so much to both siegn and michael.t.zajac for helping to clean up the code and squash bugs.
“This product is unofficial Fan Content for KULT: Divinity Lost permitted under the Helmgast Fan Content Policy"
