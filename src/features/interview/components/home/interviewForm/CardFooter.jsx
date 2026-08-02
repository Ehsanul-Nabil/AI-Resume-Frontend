import React from 'react';

export default function CardFooter({ onSubmit }) {
    return (
        <div className='interview-card__footer'>
            <span className='footer-info'>AI-Powered Strategy Generation &bull; Approx 30s</span>
            <button onClick={onSubmit} className='generate-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
                Generate My Interview Strategy
            </button>
        </div>
    );
}