import {Tooltip} from 'antd';
import React from 'react';

import {MAX_MENU_ITEM_TITLE_LENGTH} from '../consts';

export default function getLongTextWithTooltip(text: string) {
    return (
        <span>
            {
                text.length < MAX_MENU_ITEM_TITLE_LENGTH
                    ? text
                    : (
                        <Tooltip
                            placement="right"
                            title={text}
                        >
                            { text }
                        </Tooltip>
                    )
            }
        </span>
    );
}
