import React from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets-article">
            <div className="widgets-article-left">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets-article-right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets-header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Tech event calendar 2021: Upcoming US shows, conferences, and IT expos", "Our sortable chart offers information, dates and locations for a variety of US IT-focused events coming up over the next year.")}
            {newsArticle("Parallels Desktop 17 will run Windows 11 on Macs", "Parallels has introduced Parallels Desktop 17 for Mac, officially ushering in Windows 11 support on M1-based systems.")}
            {newsArticle("T-Mobile hack: Here's what you need to know about the massive data breach", "Last week's breach compromised the personal information of more than 50 million customers. Are you one?")}
        </div>
    )
}

export default Widgets;