import React from 'react';

//add the word export before the word class. This will export the class NavBar.
//Now, when ProfilePage.js uses import to grab the variable NavBar from NavBar.js, it will get back exactly what it wants: the NavBar component class.
export class NavBar extends React.Component {
  render() {
    const pages = ['Buy', 'Rent', 'Sold', 'Share', 'New homes', 'Find agents', 'Lifestyle', 'News'];
    const navLinks = pages.map(page => {
      return (
         <li className="nav-tab"> <a href={'/' + page}>
          <span>{page}</span>
        </a>
        </li>
      )
    });

    return <nav className="main-nav"><ul>{navLinks}</ul></nav>;
  }
}