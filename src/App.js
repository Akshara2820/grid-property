import styled from 'styled-components';
function App() {
  return (
      <Header>
        <div className='header bg-red-400'>Header

        <br>
        </br>
        The title of the painting, which is known in English as Mona Lisa, is based on the presumption that it depicts Lisa del Giocondo, although her likeness is uncertain. Renaissance art historian Giorgio Vasari wrote that "Leonardo undertook to paint, for Francesco del Giocondo, the portrait of Mona Lisa, his wife."[15][16][17][18] Monna in Italian is a polite form of address originating as ma donna—similar to Ma'am, Madam, or my lady in English. This became madonna, and its contraction monna. The title of the painting, though traditionally spelled Mona in English, is spelled in Italian as Monna Lisa (mona being a vulgarity in Italian), but this is rare in English.
        
        
        </div>
        <div className='menu bg-blue-300 '>Menu
        
        <br>
        </br>
        The title of the painting, which is known in English as Mona Lisa, is based on the presumption that it depicts Lisa del Giocondo, although her likeness is uncertain. Renaissance art historian Giorgio Vasari wrote that "Leonardo undertook to paint, for Francesco del Giocondo, the portrait of Mona Lisa, his wife."[15][16][17][18] Monna in Italian is a polite form of address originating as ma donna—similar to Ma'am, Madam, or my lady in English. This became madonna, and its contraction monna. The title of the painting, though traditionally spelled Mona in English, is spelled in Italian as Monna Lisa (mona being a vulgarity in Italian), but this is rare in English.
       
        </div>
        <div className='hero bg-yellow-400'>Hero

        <br>
        </br>
        The title of the painting, which is known in English as Mona Lisa, is based on the presumption that it depicts Lisa del Giocondo, although her likeness is uncertain. Renaissance art historian Giorgio Vasari wrote that "Leonardo undertook to paint, for Francesco del Giocondo, the portrait of Mona Lisa, his wife."[15][16][17][18] Monna in Italian is a polite form of address originating as ma donna—similar to Ma'am, Madam, or my lady in English. This became madonna, and its contraction monna. The title of the painting, though traditionally spelled Mona in English, is spelled in Italian as Monna Lisa (mona being a vulgarity in Italian), but this is rare in English.
        
        
        </div>
        <div className='main bg-green-400'>Main
        <br>
        </br>
        The title of the painting, which is known in English as Mona Lisa, is based on the presumption that it depicts Lisa del Giocondo, although her likeness is uncertain. Renaissance art historian Giorgio Vasari wrote that "Leonardo undertook to paint, for Francesco del Giocondo, the portrait of Mona Lisa, his wife."[15][16][17][18] Monna in Italian is a polite form of address originating as ma donna—similar to Ma'am, Madam, or my lady in English. This became madonna, and its contraction monna. The title of the painting, though traditionally spelled Mona in English, is spelled in Italian as Monna Lisa (mona being a vulgarity in Italian), but this is rare in English.
       
        
        </div>
        <div className='image bg-gray-500'>Image
        
        <br>
        </br>
        The title of the painting, which is known in English as Mona Lisa, is based on the presumption that it depicts Lisa del Giocondo, although her likeness is uncertain. Renaissance art historian Giorgio Vasari wrote that "Leonardo undertook to paint, for Francesco del Giocondo, the portrait of Mona Lisa, his wife."[15][16][17][18] Monna in Italian is a polite form of address originating as ma donna—similar to Ma'am, Madam, or my lady in English. This became madonna, and its contraction monna. The title of the painting, though traditionally spelled Mona in English, is spelled in Italian as Monna Lisa (mona being a vulgarity in Italian), but this is rare in English.
        
        </div>
        <div className='extra bg-sky-300'>Extra
        
        
        <br>
        </br>
        The title of the painting, which is known in English as Mona Lisa, is based on the presumption that it depicts Lisa del Giocondo, although her likeness is uncertain. Renaissance art historian Giorgio Vasari wrote that "Leonardo undertook to paint, for Francesco del Giocondo, the portrait of Mona Lisa, his wife."[15][16][17][18] Monna in Italian is a polite form of address originating as ma donna—similar to Ma'am, Madam, or my lady in English. This became madonna, and its contraction monna. The title of the painting, though traditionally spelled Mona in English, is spelled in Italian as Monna Lisa (mona being a vulgarity in Italian), but this is rare in English.
       
        </div>
        <div className='barner bg-pink-500'>Barner
        <br>
        </br>
        The title of the painting, which is known in English as Mona Lisa, is based on the presumption that it depicts Lisa del Giocondo, although her likeness is uncertain. Renaissance art historian Giorgio Vasari wrote that "Leonardo undertook to paint, for Francesco del Giocondo, the portrait of Mona Lisa, his wife."[15][16][17][18] Monna in Italian is a polite form of address originating as ma donna—similar to Ma'am, Madam, or my lady in English. This became madonna, and its contraction monna. The title of the painting, though traditionally spelled Mona in English, is spelled in Italian as Monna Lisa (mona being a vulgarity in Italian), but this is rare in English.
       
        <br>
        </br>
        The title of the painting, which is known in English as Mona Lisa, is based on the presumption that it depicts Lisa del Giocondo, although her likeness is uncertain. Renaissance art historian Giorgio Vasari wrote that "Leonardo undertook to paint, for Francesco del Giocondo, the portrait of Mona Lisa, his wife."[15][16][17][18] Monna in Italian is a polite form of address originating as ma donna—similar to Ma'am, Madam, or my lady in English. This became madonna, and its contraction monna. The title of the painting, though traditionally spelled Mona in English, is spelled in Italian as Monna Lisa (mona being a vulgarity in Italian), but this is rare in English.
      

        </div>
      </Header>
  );
}

export default App;

const Header = styled.div`
display: grid;
grid-template-columns:repeat(5, 1fr);
grid-template-rows:auto auto auto auto auto;


.menu{
  grid-column: 2/span 4;
}
.hero{
  grid-column: 1/span 5;
}
.main{
  grid-column: 1/span 3;
  grid-row: 3/ span 2;
}
.image{
  grid-column: 5/ span 1;
}
.extra{
  grid-column: 5/ span 1;
}
.barner{
  grid-column: 1/ span 5;
}

@media only screen and (min-width: 480px) and (max-width:768px){
/*  Teblet view  */
.header{
  grid-column: 1/span 5;
}

.menu{
 grid-row: 3 / span 4;
 grid-column: 1 / span 1;
}

.main{
  grid-column: 2 / span 5;
}
.barner{
  grid-column: 2/ span 4;
  grid-row: 5/ span 1;
}
.extra{
  grid-column:2 /span 2;
  grid-row: 6/ span 1;

}

.image{
  grid-column:4/span 2;

}
}

@media only screen and (min-width: 80px) and (max-width:497px){
/* Mobile view */

.header{
  grid-column: 1/span 5;
}
.menu{
  grid-column: 1/span 5;
}
.hero{
  grid-column: 1/span 5;
  grid-row: 3;
}
.main{
  grid-row: 4;
  grid-column: 1/ span 5;
}
.barner{
  grid-row: 5;
  grid-column: 1/ span 5;
}
.extra{
  grid-row: 6;
  grid-column: 1/ span 5;
}
.image{
  grid-row: 7;
  grid-column: 1/span5;
}
}
`
