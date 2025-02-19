import React from "react";

import { Classes, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Tooltip2 } from "@blueprintjs/popover2";

export function App() {
    return (
        <span className={Classes.POPOVER_WRAPPER}>
            <Tooltip2 placement="bottom" content="This is a tooltip">
                <Icon icon={IconNames.INFO_SIGN} />
            </Tooltip2>
        </span>
    );
}
