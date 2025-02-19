import React from "react";

import { Classes, Icon, Tooltip } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

export function App() {
    return (
        (<span className={Classes.POPOVER_WRAPPER}>
            <Tooltip placement="bottom" content="This is a tooltip">
                <Icon icon={IconNames.INFO_SIGN} />
            </Tooltip>
        </span>)
    );
}
