// Returns a random number 0 or 1
// Condition 0 is the one without looking at content
// Condition 1 is the one with access to looking at the snippet content

export function randomNumber ()
{
    return (Math.random() >= 0.5) ? 1: 0;
}