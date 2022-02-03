// Function returns the checked radio button from a list
// list -> List of Elements (HTML)
// start -> if list has child elements which are not inputs, these can be skipped by setting the start point of the iteration
// end -> if list has child elements which are not inputs, these can be left over by setting the end point of the iteration
// factor -> iteration factor | used if you need to skip elements in between iterating

export function getChecked (list, start, end, factor = 1)
{
    let isChecked = undefined;
    console.log(list);
    for(let i = start; i <= end; i += factor)
    {
        // Radio is the current element in the list
        let radio = list.childNodes[i];
        if(radio.checked)
        {
            isChecked = radio;
        }

    }

    if( isChecked === undefined)
    {
        return -1;
    }
    return parseInt(isChecked.id);
}