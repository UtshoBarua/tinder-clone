import React from 'react';
import ReplyIcon from '@material-ui/icons/Reply';
import CloseIcon from '@material-ui/icons/Close';
import GradeIcon from '@material-ui/icons/Grade';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import './SwipeButton.css';

const SwipeButtons = () => {
    return (
        <div className='swipeButton'>
          <IconButton className='iconButton'>
            <ReplyIcon className='replyIcon'></ReplyIcon>
            </IconButton>
            <IconButton className='iconButton'><CloseIcon className='closeIcon'></CloseIcon></IconButton>
            
           <IconButton className='iconButton'> <GradeIcon className='gradeIcon'></GradeIcon></IconButton>
           <IconButton className='iconButton'> <FavoriteIcon className='favIcon '></FavoriteIcon> </IconButton>
           <IconButton className='iconButton'   > <FlashOnIcon className='flashIcon'></FlashOnIcon> </IconButton>         
         
        </div>
    );
};

export default SwipeButtons;