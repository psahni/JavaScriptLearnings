# Display li's in one line using flex

<ul>
  <li> <a>First View</a> </li> 
  <li> Second View </li> 
  <li> Third View </li> 
</ul>

ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  flex-wrap: wrap;
  width: 300px;
  li {
    text-align: center;
    width: calc(100%/3);
  }
}