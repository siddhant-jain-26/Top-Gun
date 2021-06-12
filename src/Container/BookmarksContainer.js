import React from 'react'
import data from '.././BookmarkData';
import Format from "../Mycomponents/LandingComponents/Format";
import Header from "../Mycomponents/LandingComponents/Header";
import Search from "../Mycomponents/LandingComponents/SearchBar";

function BookmarksContainer() {

    let style = {
        background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
    };
    
    return (
        <>
            <Header/>
            <div className="pt-20 min-h-screen" style={style}>
                <Search/>
                <div className="mx-4"><Format object={data}/></div>
                <div style={{height : "65vh"}}></div>
            </div>
        </>
    );
}

export default BookmarksContainer;
