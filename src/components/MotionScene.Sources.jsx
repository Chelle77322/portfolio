import React from 'react';
/*Creates a div element that wrapps aroound the other sources and handles the onClick event */

export default function RenderSource ({ onClick, children})
{
    return React.createElement('div', {onClick},
    children);
}