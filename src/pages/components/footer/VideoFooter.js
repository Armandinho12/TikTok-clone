import React from "react"
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { Diversity2 } from "@mui/icons-material";

function VideoFooter({ name, description, music }) {
    return (
        <div className="VideoFooter">
            <div className="videoFooter__text" >
                <h3>@{name}</h3>
                <p>{description}</p>
                <div className="videoFooter__music">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <div className="videoFooterMusic__text">
                        <p>{music}</p>
                    </div>
                    <div className="videoFooter__user">
                        <PersonPinIcon fontSize='large' className="videoFooter__user" />
                    </div>
                    <div className="videoFooter__add">
                        <AddCircleIcon fontSize='inherit' className="videoFooter__add" />
                    </div>
                    <div className="videoFooter__search">
                        <SearchIcon fontSize='large' className="videoFooter__search" />
                    </div>
                    <div className="videoFooter__tv">
                        <TvIcon fontSize='large' className="videoFooter__tv" />
                    </div>
                    <div className="videoFooter__seguindo" >
                <h3>Seguindo Para você</h3>
                </div>
                <div className="videoFooter__live" >
                <h5>LIVE</h5>

                </div>
                    < img
                        className="videoFooter__record"
                        alt="Imagem d um vinil girando"
                        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z://muhttps://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Zi.com/material-ui/material-icons/"

                    />
                </div>
            </div>
        </div>



    );
}

export default VideoFooter