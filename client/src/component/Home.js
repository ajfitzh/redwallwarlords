import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: 'https://i.ebayimg.com/images/g/EmYAAOSwqjhcJo1d/s-l400.jpg',
    title: 'Pog Collection',
  },
  {
    img: 'https://i0.wp.com/retropond.com/wp-content/uploads/2021/05/Pogs-MorePogs.jpg?fit=1024%2C576&ssl=1',
    title: 'Pogs',
  },
  {
    img: 'https://i.pinimg.com/736x/82/ef/9a/82ef9a15faa7cd7a815531e32222518a.jpg',
    title: 'Pogs',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcm0Mko0yerzmQIUDYkTUQqBI0G7v9gtye-g&usqp=CAU',
    title: 'Pog Solo',
  },
  {
    img: 'https://i.ebayimg.com/images/g/bowAAOSwV0xfGee1/s-l640.jpg',
    title: 'Simpson Pogs',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'More Pogs',
  }
];
const Home = () => {
  return (
    <div id= "home">
      <div id= "welcome" >
        <h2>Welcome to Pog Blogs</h2>
        <p>Are you in a fog? Are you tired of the smog? Do you have a naughty dog? Are you out of grog? Escape your worries with a pog-blog! Blog about your Pogs! Look at other pog-blogs! Connect with other pog-bloggers and escape from the bog! Read about pogs on logs, pogs of frogs, pogs in a cog and even pogs on a jog! So quit slog and blog about your pogs!</p>
      </div>
      <ImageList id = "photoGrid" sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} style={{
        position: 'absolute', left: '50%', top: '75%',
        transform: 'translate(-50%, -50%)'
      }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default Home