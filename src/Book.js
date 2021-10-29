import React, { useState } from 'react';
import './Book.css';

const bookCollections = {
    webBooks : [
        {name: 'FullStact React',rating: '9/10'},
        {name: 'HTML To React: The Ultimate Guide',rating: '8/10'},
        {name: ' Learning React: Functional Web Development with React and Redux',rating: '8.5/10'},
        {name: 'The Road to React by Robin Wieruch',rating: '8/10'},
        {name: 'React in Action by Mark Tielens Thomas',rating: '7/10'}
    ],
    fiction : [
        {name:'Don Quixote- MiguelDe Cervantes',rating: '8/10'},
        {name:'The Great Gatsby — F. Scott Fitzgerald',rating: '8.5/10'},
        {name:'Moby-Dick — Herman Melville',rating: '8/10'},
        {name:'War and Peace — Leo Tolstoy',rating: '7/10'},
    ],
    business : [
        {name:'No Filter: The Inside Story of Instagram by Sarah Frier', rating:'8/10'},
        {name:'Reimagining Capitalism in a World on Fire by Rebecca Henderson', rating:'8/10'},
        {name:'Uncharted: How to Navigate the Future by Margaret Heffernan', rating:'7/10'}
    ]

}
const Book = () => {
    const [selectBook,setselectBook] = useState('webBooks');
    const bookclikHandler = (book) =>{
        setselectBook(book)
    }
    return(
        <div>
            <div>
                {Object.keys(bookCollections).map((book) => {
                    return(
                        <button className="btn-submit" onClick={() => bookclikHandler(book)}
                        >{book}</button>
                    )
                } )}
            </div>
            <hr/>
            <div>
                <ul style={{ textAlign: 'left',display:'inline-block' }}>
                    {bookCollections[selectBook].map((book)=>(
                        <li className="listing">
                            <div style={{fontSize:'larger'}}>{book.name}</div>
                            <div style={{fontSize:'smaller'}}>{book.rating}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Book;