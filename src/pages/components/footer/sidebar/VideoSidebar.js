import React, { useState } from 'react'
import "./VideoSidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsIcon from '@mui/icons-material/Sms';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';


    function VideoSidebar({likes, messages, shares, whats}) {

    const [liked, setLiked] = useState(false)
    const [shared, setShared] = useState(false);
    const [whatsCount, setWhatsCount] = useState(whats);

    function handdleLike() {
        setLiked(!liked)
    }
        function handleShare() {
            setShared(!shared);
    }

    function handleWhats() {
        setWhatsCount(!whatsCount );
    }
    return (
        
        <div className='videoSidebar'>
          <div className={`videoSidebar__options ${liked ? 'liked' : ''}`} onClick={handdleLike}>
            {liked ? <FavoriteIcon fontSize='large' className='likedIcon' /> : <FavoriteBorderIcon fontSize='large' />}
            <p>{liked ? likes + 1 : likes}</p>
          </div>
          <div className='videoSidebar__options'>
            <SmsIcon fontSize='large' />
            <p>{messages}</p>
          </div>
          <div className={`videoSidebar__options ${shared ? 'shared' : ''}`} onClick={handleShare}>
          {shared ? <BookmarkIcon fontSize='large' className='sharedIcon' /> : <BookmarkBorderIcon fontSize='large' />}
            <p>{shared ? shares + 1 : shares}</p>
            </div>
           < div className='videoSidebar__options' onClick={handleWhats}>
        <WhatsAppIcon fontSize='large' style={{ color: 'green' }} />
        <p>{liked ? likes + 1 : likes}</p>
        {whatsCount}
          </div>
          <div className='videoSidebar__options'>

        </div>
        </div>
      );
    }
    
    export default VideoSidebar;

    /* dei um pause, preciso fazer o whatsapp contar corretamente!*/