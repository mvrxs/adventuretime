import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function PopupComponent() {
    return (
        <div
            style={{ height: 200, width: 400, border: '1px solid red' }
            }
            className="tooltipBoundary"
        >
            <Popup
                trigger={
                    <button type="button" className="button">
                        Trigger 1
                    </button>
                }
                position={['top center', 'bottom right', 'bottom left']}
                closeOnDocumentClick
                keepTooltipInside=".tooltipBoundary"
            >
                This page was made by qualified ultra smart monkeys
            </ Popup>
        </div >
    );
}